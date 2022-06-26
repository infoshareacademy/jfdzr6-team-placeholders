import { Button } from "@mui/material";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../src/Firebase";

export const SendRepairDone = ({ clients, repair, getClients }) => {
  const handleAccept = () => {
    const taskRef = doc(db, "clients", "isDone");
    updateDoc(taskRef, {
      isDone: true,
    });
    console.log("taskref", taskRef);

    getClients(clients);
  };
  const id = clients.map((client) => {
    return client.id;
  });
  console.log("client", id);

  return (
    <Button
      key={id}
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
