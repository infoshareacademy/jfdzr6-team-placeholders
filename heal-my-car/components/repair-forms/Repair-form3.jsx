import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Form3 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();
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
      <CssBaseline />
      <Container
        maxWidth="auto"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Dodatkowe informacje"
            variant="outlined"
            placeholder="Dodatkowe informacje"
            type="text"
            name="selfText"
          />

          <Button
            variant="contained"
            type="submit"
            style={{ height: "35px", width: "25ch", marginTop: "20px" }}
          >
            Dalej
          </Button>
        </Box>
      </Container>
    </div>
  );
};
