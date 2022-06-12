import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export const TextInput = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, width: "55ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Dodatkowe informacje" placeholder='Dodatkowe informacje' variant="outlined" />
    </Box>
  );
};
