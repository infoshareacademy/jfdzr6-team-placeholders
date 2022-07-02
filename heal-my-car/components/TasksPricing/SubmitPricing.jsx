import * as React from "react";
import Button from "@mui/material/Button";
import { db } from "../../src/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

const SubmitPricing = ({ getRepairs, repair }) => {
  const handleCalc = () => {
    console.log(repair);
    const sum = repair.tasks.reduce((previous, task) => {
      return parseInt(previous + task.price);
    }, []);
    console.log(sum);
    const taskRef = doc(db, "repairs", repair.id);
    updateDoc(taskRef, {
      totalCost: sum,
    });
    getRepairs();
  };
  return (
    <Button
      key={repair.carVin}
      onClick={() => {
        handleCalc();
      }}
      style={{ marginTop: "10px", marginLeft: "5px" }}
      color="primary"
      variant="contained"
      size="small"
    >
      Wyceń
    </Button>
  );
};
export default SubmitPricing;
