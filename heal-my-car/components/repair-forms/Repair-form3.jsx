import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Form3 = () => {
  const { setFormData, formData } = useOutletContext();
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
  console.log("FORMDATA", formData);
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="auto">
        <h2 style={{ textAlign: "center" }}>Podsumowanie zlecenia naprawy</h2>
        <br />
        <h4>Hello</h4>
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
          >
            Zatwierdź
          </Button>
        </Box>
      </Container>
    </div>
  );
};
