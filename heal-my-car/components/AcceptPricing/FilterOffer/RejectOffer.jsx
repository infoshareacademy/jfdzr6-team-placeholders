import * as React from "react";
import Button from "@mui/material/Button";
import { db } from "../../../src/firebase.js";
import { updateDoc, doc } from "firebase/firestore";

const RejectOffer = ({ getRepairs, repair }) => {
  const handleReject = () => {
    const taskRef = doc(db, "repairs", repair.id);
    updateDoc(taskRef, {
      isAccepted: false,
    });
    getRepairs(repair);
  };
  return (
    <Button
      key={repair.carVin}
      onClick={() => {
        handleReject();
      }}
      style={{ marginTop: "10px", marginLeft: "5px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Odrzuć
    </Button>
  );
};
export default RejectOffer;
