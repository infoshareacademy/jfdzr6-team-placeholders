import { Button, InputBase } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../LandingPage/Header";
import { HorizontalLabelPositionBelowStepper } from "./Form-status";

export const Form1 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();

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
      <Container maxWidth="100%" style={{ padding: "0", margin: "0", color: "primary" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "150px",
          }}
        >
          <HorizontalLabelPositionBelowStepper activeStep={1} />
          <h2 style={{ textAlign: "center", marginBottom: "35px" }}>
            Zleć wycenę
          </h2>
          <TextField
            id="outlined-basic"
            label="Marka pojazdu"
            variant="outlined"
            type="text"
            name="carBrand"
            color="primary"
            style={{ width: "400px" }}
            sx={{ color: "black" }}
          />
          <TextField
            id="outlined-basic"
            label="VIN pojazdu"
            variant="outlined"
            placeholder="VIN pojazdu"
            type="text"
            name="carVin"
            color="primary"
            style={{ width: "400px", marginBottom: "55px" }}
          />
          <Button variant="contained" type="submit" color="secondary">
            Dalej
          </Button>
          <Button variant="contained" type="submit" color="secondary">
            Wstecz
          </Button>
        </Box>
      </Container>
    </div>
  );
};
//<InputBase placeholder="VIN pojazdu" type="text" name="vin" />
