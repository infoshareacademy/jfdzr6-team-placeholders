import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/LandingPage/Header";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseErrors } from "../src/utils/firebaseErrors";
import { auth } from "../src/firebase";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { getResetData } from "../src/utils/getResetData";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a className="linkBlue" color="inherit" href="https://healmycar.pl/">
        Heal My Car
      </a>
      {` `}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function PasswordReset() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = getResetData(e);
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        e.target.reset();
        alert("Sprawdź swojego maila");
        navigate("/login");
      })
      .catch((e) => {
        console.log("error", e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Przypomnij hasło
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Podaj email"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#242c3f",
                  "&:hover": {
                    backgroundColor: "#9c27b0",
                    color: "#fff",
                  },
                }}
                color="secondary"
              >
                PRZYPOMNIJ HASŁO
              </Button>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item>
                  <Link to="/register" variant="body2" className="linkBlue">
                    {"Nie masz konta? Zarejestruj się"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
