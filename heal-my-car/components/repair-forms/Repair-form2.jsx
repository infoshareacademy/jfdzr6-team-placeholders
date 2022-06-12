import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Body } from "./Repair-parts/Body";
import { Chassis } from "./Repair-parts/Chassis";
import { Electronics } from "./Repair-parts/Electronics";
import { Engine } from "./Repair-parts/Engine";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Form2 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
  console.log("Stan z kontekstu", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { carBrand, vin } = e.target;

    // setFormData({
    //   carBrand: carBrand.value,
    //   vin: vin.value,
    // });
    navigate("/repair-form/repair-form3");
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="auto">
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Rodzaj Naprawy
        </h2>
        <br />
        <h4 style={{ textAlign: "center" }}>
          Zaznacz obszary pojazdu, które wymagają sprawdzenia lub naprawy
        </h4>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "auto",
            flexWrap: "wrap",
          }}
        >
          <Body />
          <Chassis />
          <Engine />
          <Electronics />
          <Button
            variant="contained"
            type="submit"
            style={{ height: "35px", width: "25ch", alignSelf: "end" }}
          >
            Dalej
          </Button>
        </Box>
      </Container>
    </div>
  );
};
