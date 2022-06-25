import { collection, getDocs, where, query, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../src/firebase";
import { MapClients } from "./MapClients";
import { MapRepairsInProgress } from "./MapRepairsInProgress";

export const RepairsInProgress = () => {
  const [repairs, setRepairs] = useState([]);
  const [clients, setClients] = useState([]);

  const getRepairs = () => {
    const repairsCollection = collection(db, "repairs");
    const pendingRepairsQuery = query(
      repairsCollection,
      where("isAccepted", "==", true),
      where("isDone", "==", false)
    );

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  };

  const getClients = async () => {
    const clientsCollection = collection(db, "clients");
    const pendingClientsQuery = query(clientsCollection);

    const clientsQuerySnapshot = await getDocs(pendingClientsQuery);
    const clientsArr = clientsQuerySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    // Mapujemy po klientach, wyciagamy clientsRepairs -> Promise.all
    const clientsRepairsRefs = clientsArr.map((client) => client.clientRepairs);
    const promises = clientsRepairsRefs.map((clientRepairsRef) => {
      console.log(clientRepairsRef);
      return getDoc(clientRepairsRef).then((doc) => doc.data());
    });

    // const promises = clientsArr.map((client) => {
    //   return client.clientRepairs.map((ref) => {
    //     console.log("ref", ref);
    //     return getDoc(ref).then((doc) => {
    //       console.log(doc.data());
    //       return { ...client, clientRepairs: doc.data() };
    //     });
    //   });
    // });
    console.log("promises", promises);
    //   .map(([promise]) => promise);
    // console.log("promises", promises);
    // Promise.all(promises).then((clientWithRepairs) => {
    //   console.log(clientWithRepairs);
    // });
  };
  useEffect(() => {
    getRepairs();
    getClients();
  }, []);

  // console.log("rep", repairs);
  // console.log("clie", clients);
  return (
    <>
      <MapRepairsInProgress repairs={repairs} clients={clients} />
    </>
  );
};
