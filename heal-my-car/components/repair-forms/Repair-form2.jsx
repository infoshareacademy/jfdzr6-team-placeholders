import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Body } from "./Repair-parts/Body";
import { Chassis } from "./Repair-parts/Chassis";
import { Electronics } from "./Repair-parts/Electronics";
import { Engine } from "./Repair-parts/Engine";
import { TextInput } from "./Repair-parts/Text-field";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useState } from "react";

export const Form2 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({});

  console.log("Stan z kontekstu", formData);
  const handleFormUpdate = (e) => {
    const newState = { ...formState, [e.target.name]: e.target.checked };
    setFormState(newState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { carBrand, vin } = e.target;
    const filtrowanie = Object.entries(formState)
      .filter((x) => {
        return x[1];
      })
      .map((x) => {
        return {
          task: x[0],
          isDone: false,
          price: 0,
        };
      });
    console.log(filtrowanie);

    setFormData({
      ...formData,
      tasks: filtrowanie,
    });

    navigate("/repair-form/repair-form3");
  };
  console.log(formState);
  return (
    <div>
      <CssBaseline />
      <Container
        component="form"
        maxWidth="auto"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Rodzaj Naprawy
        </h2>
        <br />
        <h4 style={{ textAlign: "center" }}>
          Zaznacz obszary pojazdu, które wymagają sprawdzenia lub naprawy
        </h4>
        <Box
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Body handleFormUpdate={handleFormUpdate} />
          <Chassis handleFormUpdate={handleFormUpdate} />
          <Engine />
          <Electronics />
        </Box>
        <TextInput />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          style={{ height: "35px", width: "25ch", marginTop: "20px" }}
        >
          Dalej
        </Button>
      </Container>
    </div>
  );
};
