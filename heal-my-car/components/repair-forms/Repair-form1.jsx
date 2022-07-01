import { Button, InputBase } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../LandingPage/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const Form1 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const steps = ["Dane pojazdu", "Naprawy", "Informacje", "Zatwierdzanie"];
  const handleSubmit = (e) => {
    e.preventDefault();

    const { carBrand, carVin } = e.target;

    setFormData({
      ...formData,
      carBrand: carBrand.value,
      carVin: carVin.value,
    });
    navigate("/repair-form/repair-form2");
  };
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
            width: "100%",
            border: "2px solid #ba58e6",
            //borderRadius: "70px",
            padding: "25px",
            backgroundColor: "rgb(204, 0, 204, .3)",
          }}
        >
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          //sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "120px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "35px" }}>
            Zleć wycenę naprawy
          </h2>
          <TextField
            id="outlined-basic"
            label="Marka pojazdu"
            variant="outlined"
            type="text"
            name="carBrand"
            color="secondary"
            style={{ width: "300px", textAlign: "center", marginBottom: "26px" }}
            sx={{ color: "black" }}
          />
          <TextField
            id="outlined-basic"
            label="VIN pojazdu"
            variant="outlined"
            placeholder="VIN pojazdu"
            type="text"
            name="carVin"
            color="secondary"
            style={{ width: "300px", marginBottom: "55px" }}
          />
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
              color="secondary"
              style={{ height: "35px", width: "23ch", margin: "15px" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Dalej
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
};
//<InputBase placeholder="VIN pojazdu" type="text" name="vin" />
