import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Wrapper = () => {
  const [formData, setFormData] = useState({
    carBrand: "",
    vin: "",
    tasks: [],
    //Flagi tutaj wstawic
  });

  return (
    <>
      <Outlet context={{ formData, setFormData }} />
    </>
  );
};
