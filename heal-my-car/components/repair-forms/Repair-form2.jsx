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
import Header from "../LandingPage/Header";
import { HorizontalLabelPositionBelowStepper } from "../Repair-forms/Form-status";

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
      <Header />
      <CssBaseline />
      <Container
        maxWidth="auto"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0",
          marginTop: "35px",
        }}
      >
        <HorizontalLabelPositionBelowStepper />
        <h2 style={{ textAlign: "center", marginTop: "60px" }}>
          Rodzaj Naprawy
        </h2>
        <br />
        <h4 style={{ textAlign: "center", marginBottom: "35px" }}>
          Zaznacz obszary pojazdu, które wymagają sprawdzenia lub naprawy
        </h4>
        <Box
          component="form"
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
          <Engine handleFormUpdate={handleFormUpdate} />
          <Electronics handleFormUpdate={handleFormUpdate} />
        </Box>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          style={{ height: "35px", width: "25ch", margin: "35px" }}
          color="secondary"
        >
          Dalej
        </Button>
      </Container>
    </div>
  );
};
