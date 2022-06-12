import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Form3 = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { carBrand, vin } = e.target;

    // setFormData({
    //   carBrand: carBrand.value,
    //   vin: vin.value,
    // });
    navigate("/");
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="auto">
        <h2>Podsumowanie zlecenia naprawy</h2>
        <br />
        <h4></h4>
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
          <h4>Dane pojazdu</h4>
          <h2>Marka: Audi</h2>
          <h2>VIN: SDF23I00ODFF</h2>
          <h4>
            Naprawy:
            <ul>
              <li>Naprawa zawieszenia przedniego</li>
              <li>Naprawa zawieszenia tylnego</li>
              <li>Wymiana oleju</li>
              <li>Serwis klimatyzacji</li>
            </ul>
          </h4>
          <Button
            variant="contained"
            type="submit"
            style={{ height: "35px", width: "25ch", alignSelf: "end" }}
          >
            Zatwierdź
          </Button>
        </Box>
      </Container>
    </div>
  );
};
