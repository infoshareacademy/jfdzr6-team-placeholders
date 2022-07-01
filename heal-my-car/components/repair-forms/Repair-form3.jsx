import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../LandingPage/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoIcon from "@mui/icons-material/Info";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const Form3 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const steps = ["Dane pojazdu", "Naprawy", "Informacje", "Zatwierdzanie"];
  const handleSubmit = (e) => {
    e.preventDefault();

    const { selfText } = e.target;

    setFormData({
      ...formData,
      selfText: selfText.value,
    });

    navigate("/repair-form/repair-form4");
  };
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
          <Stepper activeStep={2} alternativeLabel>
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
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "60px",
              width: "500px",
              justifyContent: "space-evenly",
              marginBottom: "35px"
            }}
          >
            <InfoIcon fontSize="large" />

            <h2>Przekaż dodatkowe informacje</h2>
          </div>
          <TextField
            id="outlined-basic"
            label="Dodatkowe informacje"
            variant="outlined"
            placeholder="Dodatkowe informacje"
            type="text"
            name="selfText"
            multiline
            rows={6}
            sx={{ width: "400px", marginBottom: "35px" }}
            color="secondary"
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
              style={{ height: "35px", width: "23ch", margin: "15px" }}
              color="secondary"
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
