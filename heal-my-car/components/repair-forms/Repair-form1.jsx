import { Button, InputBase } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../LandingPage/Header";

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
      <Container maxWidth="sm">
        <div
          className="leftTop"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderTop: "10px #9011E4 solid",
            borderLeft: "10px #9011E4 solid",
            marginTop: "50px",
          }}
        ></div>
        <div
          className="rightTop"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderTop: "10px #9011E4 solid",
            borderRight: "10px #9011E4 solid",
            marginTop: "50px",
            right: "36%",
          }}
        ></div>
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
            paddingTop: "200px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "35px" }}>
            Zleć wycenę
          </h2>
          <TextField
            id="outlined-basic"
            label="Marka pojazdu"
            variant="outlined"
            placeholder="Marka pojazdu"
            type="text"
            name="carBrand"
            color="secondary"
            style={{width: "400px"}}
          />
          <TextField
            id="outlined-basic"
            label="VIN pojazdu"
            variant="outlined"
            placeholder="VIN pojazdu"
            type="text"
            name="carVin"
            color="secondary"
            style={{width: "400px", marginBottom: "55px"}}
          />
          <Button variant="contained" type="submit" color="secondary">
            Dalej
          </Button>
          <Button variant="contained" type="submit" color="secondary">
            Wstecz
          </Button>
        </Box>
        <div
          className="leftBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px #9011E4 solid",
            borderLeft: "10px #9011E4 solid",
            marginTop: "50px",
          }}
        ></div>
        <div
          className="rightBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px #9011E4 solid",
            borderRight: "10px #9011E4 solid",
            marginTop: "50px",
            right: "36%",
          }}
        ></div>
      </Container>
    </div>
  );
};
//<InputBase placeholder="VIN pojazdu" type="text" name="vin" />
