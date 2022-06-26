import { Button } from "@mui/material";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../src/Firebase";

export const SendRepairDone = ({ clients, repair, getClients }) => {
  console.log("clients", clients);
  const handleAccept = (id, isDone) => {
    const taskRef = doc(db, "clients");
    updateDoc(taskRef, {
      isDone: true,
    });

    getClients(clients);
  };

  return (
    <Button
      onClick={() => {
        handleAccept();
      }}
      style={{ marginTop: "10px", marginLeft: "5px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Naprawa wykonana
    </Button>
  );
};
