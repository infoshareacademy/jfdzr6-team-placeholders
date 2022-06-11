import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { Body } from "./Repair-parts/Body";
import { Chassis } from "./Repair-parts/Chassis";
import { Electronics } from "./Repair-parts/Electronics";
import { Engine } from "./Repair-parts/Engine";

export const Form2 = () => {
  const { formData } = useOutletContext();
  console.log("Stan z kontekstu", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { vehicleBrand, vin } = e.target;

    setFormData({
      vehicleBrand: vehicleBrand.value,
      vin: vin.value,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>Rodzaj Naprawy</h3>
      <br />
      <h4>Zaznacz obszary pojazdu, które wymagają sprawdzenia lub naprawy</h4>
      <form onSubmit={handleSubmit}></form>
      <Body />
      <Chassis />
      <Engine />
      <Electronics />
      <Button variant="contained" type="submit">
        Dalej
      </Button>
    </div>
  );
};
