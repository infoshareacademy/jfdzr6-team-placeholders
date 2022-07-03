import { Button } from "@mui/material";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../src/Firebase";

export const SendRepairDone = ({ getClients, id }) => {
  const repairRef = doc(db, `repairs`, id);
  const handleAccept = () => {
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
      // style={{ marginTop: "10px", marginLeft: "20px", marginRight: "20px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Wykonano
    </Button>
  );
};
{
  /* <SendRepairDone
  clients={clients}
  repair={repair}
  getClients={getClients}
  id={repair.id}
/>; */
}
