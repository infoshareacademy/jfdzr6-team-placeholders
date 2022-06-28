import { Button } from "@mui/material";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../src/Firebase";

export const SendRepairDone = ({ clients, repair, getClients, id }) => {
  console.log("clients", clients);
  const repairRef = doc(db, `repairs`, id);
  const handleAccept = () => {
    console.log("id", id);

    updateDoc(repairRef, {
      isDone: true,
    }).then(() => {
      getClients();
    });
  };

  return (
    <Button
      onClick={() => {
        handleAccept();
      }}
      style={{ marginTop: "10px", marginLeft: "20px", marginRight: "20px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Naprawa wykonana
    </Button>
  );
};
