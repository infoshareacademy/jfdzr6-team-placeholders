import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "@mui/material";
import { db } from "../../src/firebase.js";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Header from "../LandingPage/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const Form4 = ({ userData, refreshData }) => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const steps = ["Dane pojazdu", "Naprawy", "Informacje", "Zatwierdzanie"];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask();
    navigate("/client-panel");
  };
  console.log("FORMDATA", formData);

  function addTask() {
    const repairsCollection = collection(db, "repairs");

    return addDoc(repairsCollection, formData)
      .then((data) => {
        console.log(data.id);
        console.log("111", userData.clientRepairs);

        const repairRef = doc(db, "repairs", data.id);
        const clientRef = doc(db, "clients", userData.id); //Tutaj przekazujemy ID zalogowanego użytkownika (stan) // userData.id

        return updateDoc(clientRef, {
          clientRepairs: [...userData.clientRepairs, repairRef],
        });
      })
      .then(() => {
        refreshData(userData.id);
      })
      .catch((err) => console.log(err));
  }

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
          <Stepper activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "35px",
            paddingTop: "100px",
          }}
        >
          Podsumowanie zlecenia naprawy
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <p style={{ textAlign: "center" }}>
            Marka pojazdu: {formData.carBrand}
          </p>
          <p style={{ marginBottom: "35px", textAlign: "center" }}>
            VIN pojazdu: {formData.carVin}
          </p>
          <ul
            style={{
              padding: "20px",
              marginBottom: "35px"
            }}
          >
            {formData.tasks.map((task) => (
              <li
                key={task.task}
                style={{
                  width: "550px",
                  listStyleType: "decimal",
                  padding: "5px",
                  marginLeft: "35px",
                }}
              >
                {task.task}
              </li>
            ))}
          </ul>
          <p style={{ width: "600px" }}>
            Dodatkowe informacje: {formData.selfText}
          </p>
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
            paddingTop: "120px",
          }}
        >
          <div>
            <Button
              variant="contained"
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
              color="secondary"
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
              endIcon={<SendIcon />}
            >
              Wyślij
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
};
