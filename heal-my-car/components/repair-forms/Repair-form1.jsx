import { Button, InputBase } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate, useOutletContext } from "react-router-dom";

export const Form1 = () => {
  const { setFormData, formData } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { carBrand, vin } = e.target;

    setFormData({
      ...formData,
      carBrand: carBrand.value,
      vin: vin.value,

    });
    navigate("/repair-form/repair-form2");
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Marka pojazdu"
          variant="outlined"
          placeholder="Marka pojazdu"
          type="text"
          name="carBrand"
        />
        <TextField
          id="outlined-basic"
          label="VIN pojazdu"
          variant="outlined"
          placeholder="VIN pojazdu"
          type="text"
          name="vin"
        />
        <Button variant="contained" type="submit">
          Dalej
        </Button>
      </Box>
    </div>
  );
};
//<InputBase placeholder="VIN pojazdu" type="text" name="vin" />
