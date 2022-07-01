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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ConstructionIcon from "@mui/icons-material/Construction";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const Form2 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({});
  const steps = ["Dane pojazdu", "Naprawy", "Informacje", "Zatwierdzanie"];

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
        <div
          style={{
            width: "100%",
            border: "2px solid #ba58e6",
            //borderRadius: "70px",
            padding: "25px",
            backgroundColor: "rgb(204, 0, 204, .3)",
          }}
        >
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "60px",
            width: "400px",
            justifyContent: "space-evenly",
          }}
        >
          <ConstructionIcon fontSize="large" />
          <h2 style={{}}>Rodzaj Naprawy</h2>
        </div>
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
        <div>
          <Button
            variant="contained"
            backButton
            color="secondary"
            onClick={() => navigate(-1)}
            style={{ height: "35px", width: "23ch", margin: "15px" }}
            startIcon={<ArrowBackIosIcon />}
          >
            Wstecz
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            style={{ height: "35px", width: "23ch", margin: "15px" }}
            color="secondary"
            endIcon={<ArrowForwardIosIcon />}
          >
            Dalej
          </Button>
        </div>
      </Container>
    </div>
  );
};
