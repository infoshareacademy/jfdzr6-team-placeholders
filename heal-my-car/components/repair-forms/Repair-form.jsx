import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Wrapper = () => {
  const [formData, setFormData] = useState({
    vehicleBrand: "",
    vin: "",
  });

  return (
    <>
      <Outlet context={{ formData, setFormData }} />
    </>
  );
};