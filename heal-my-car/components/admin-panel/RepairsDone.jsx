import { Divider } from "@mui/material";
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { db } from "../../src/firebase";
import { MapRepairsDone } from "./MapRepairsDone";
import Header from "../LandingPage/Header";
import { AdminSideMenu } from "../Menu/AdminSideMenu";

export const RepairsDone = () => {
  const [clients, setClients] = useState([]);
  console.log("usestate", clients);

  const getClients = async () => {
    const clientsCollection = collection(db, "clients");
    const pendingClientsQuery = query(
      clientsCollection,
      where("isDone", "==", true)
    );

    const clientsQuerySnapshot = await getDocs(pendingClientsQuery);
    const clientsDataPromises = clientsQuerySnapshot.docs.map(async (doc) => {
      const { clientRepairs, ...clientData } = doc.data();
      const clientRepairsData = await Promise.all(
        clientRepairs.map(async (repair) => {
          const repairData = await getDoc(repair);
          return repairData.data();
        })
      );
      return { ...clientData, clientRepairs: clientRepairsData, id: doc.id };
    });
    const clientsData = await Promise.all(clientsDataPromises);
    setClients(clientsData);
    console.log("clientdata", clientsData);
    return clientsData;
  };
  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <MapRepairsDone clients={clients} />
    </>
  );
};
