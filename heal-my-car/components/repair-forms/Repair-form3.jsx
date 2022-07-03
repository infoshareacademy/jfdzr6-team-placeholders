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
              marginBottom: "35px",
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
        </Box>
      </Container>
    </div>
  );
};
