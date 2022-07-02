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
        maxWidth="100%"
        style={{ padding: "0", color: "primary", marginTop: "35px" }}
      >
        <div
          style={{
            width: "auto",
            borderTop: "2px solid #ba58e6",
            borderBottom: "2px solid #ba58e6",
            borderRadius: "70px",
            padding: "25px",
            backgroundColor: "#b35797",
            marginLeft: "55px",
            marginRight: "55px",
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

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "60px",
              marginBottom: "25px"
            }}
          >
            <ConstructionIcon
              fontSize="large"
              style={{ marginRight: "35px" }}
            />
            <h2 style={{ textAlign: "center" }}>Rodzaj Naprawy</h2>
          </div>
          <h4 style={{ textAlign: "center", marginBottom: "35px" }}>
            Zaznacz obszary pojazdu, które wymagają sprawdzenia lub naprawy
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Body handleFormUpdate={handleFormUpdate} />
            <Chassis handleFormUpdate={handleFormUpdate} />
            <Engine handleFormUpdate={handleFormUpdate} />
            <Electronics handleFormUpdate={handleFormUpdate} />
          </div>
        </Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            backButton
            color="secondary"
            onClick={() => navigate(-1)}
            sx={{
              height: "35px",
              width: "23ch",
              margin: "15px",
              backgroundColor: "#41506e",
              "&:hover": {
                backgroundColor: "#9c27b0",
                color: "#fff",
              },
            }}
            startIcon={<ArrowBackIosIcon />}
          >
            Wstecz
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{
              height: "35px",
              width: "23ch",
              margin: "15px",
              backgroundColor: "#41506e",
              "&:hover": {
                backgroundColor: "#9c27b0",
                color: "#fff",
              },
            }}
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
