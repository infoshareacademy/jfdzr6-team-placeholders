import { useState } from "react";
import { Outlet } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";

export const Wrapper = () => {
  const [formData, setFormData] = useState({
    carBrand: "",
    carVin: "",
    tasks: [],
    isAccepted: null,
    isDone: false,
    isRejected: false,
    sumbitDate: serverTimestamp(),
  });

  return (
    <>
      <Outlet context={{ formData, setFormData }} />
    </>
  );
};
