import { collection, getDocs, where, query, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../src/Firebase";
import { MapClientRepairs } from ".MapClientRepairs";

export const ClientRepairs = () => {
  const [clients, setClients] = useState([]);
  const getClients = async () => {
    const clientsCollection = collection(db, "clients");
    const pendingClientsQuery = query(
      clientsCollection,
      where("clientRepairs", "!=", [])
    );

    const clientsQuerySnapshot = await getDocs(pendingClientsQuery);
    const clientsDataPromises = clientsQuerySnapshot.docs.map(async (doc) => {
      const { clientRepairs, ...clientData } = doc.data();
      const clientRepairsData = await Promise.all(
        clientRepairs.map(async (repair) => {
          const repairData = await getDoc(repair);
          return { ...repairData.data(), id: repairData.id };
        })
      );
      return { ...clientData, clientRepairs: clientRepairsData, id: doc.id };
    });
    const clientsData = await Promise.all(clientsDataPromises);
    setClients(clientsData);
    return clientsData;
  };
  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <MapClientRepairs clients={clients} getClients={getClients} />
    </>
  );
};
