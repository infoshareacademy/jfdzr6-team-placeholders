import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "@mui/material";
import { db } from "../../src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Header from "../LandingPage/Header";

import TextField from "@mui/material/TextField";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Form4 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask();
    navigate("/");
  };
  console.log("FORMDATA", formData);

  function addTask() {
    const repairsCollection = collection(db, "repairs");
    return addDoc(repairsCollection, formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="auto">
        <h2 style={{ textAlign: "center" }}>Podsumowanie zlecenia naprawy</h2>
        <br />
        <p>Marka pojazdu: {formData.carBrand}</p>
        <p>VIN pojazdu: {formData.carVin}</p>
        <ul>
          {formData.tasks.map((task) => (
            <li key={task.task}>{task.task}</li>
          ))}
        </ul>
        <p>Dodatkowe informacje: {formData.selfText}</p>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "auto",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            style={{ height: "35px", width: "25ch", alignSelf: "end" }}
            color="secondary"
          >
            Zatwierdź
          </Button>
        </Box>
      </Container>
    </div>
  );
};
