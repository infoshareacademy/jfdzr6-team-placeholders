import * as React from "react";
import Button from "@mui/material/Button";
import { db } from "../../../src/firebase.js";
import { updateDoc, doc } from "firebase/firestore";

const AcceptOffer = ({ getRepairs, repair }) => {
  const handleAccept = () => {
    const taskRef = doc(db, "repairs", repair.id);
    updateDoc(taskRef, {
      isAccepted: true,
    });
    getRepairs(repair);
  };
  return (
    <Button
      key={repair.carVin}
      onClick={() => {
        handleAccept();
      }}
      style={{ marginTop: "10px", marginLeft: "5px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Zaakceptuj
    </Button>
  );
};
export default AcceptOffer;
