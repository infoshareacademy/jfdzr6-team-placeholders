import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../src/firebase";
import { firebaseErrors } from "../src/utils/firebaseErrors";
// import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import { setDoc, doc } from "firebase/firestore";
// import GoogleIcon from '@mui/icons-material/Google';
// import GoogleButton from "react-google-button";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="healmycar.pl">
        Heal My Car Team
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setFirstname] = React.useState("");
  const [surname, setSurname] = React.useState("");

  // const SingInWithFirebase = () => {
  //   const provider = new GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider)
  //     .then((re) => {
  //       console.log(re);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        const ref = doc(db, "clients", jwt.user.uid);
        // navigate("/ClientPanel", { replace: true });
        setDoc(ref, { name, lastName: surname, email, clientRepairs: [] })
          .then(() => {
            alert("Zarejestrowano pomyślnie");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((e) => {
        alert(firebaseErrors[e.code]);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

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
              Zarejestruj swoje konto
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleRegister}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    label="Twje imię"
                    autoFocus
                    value={name}
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Twoje nazwisko"
                    name="lastName"
                    autoComplete="family-name"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Twój email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Twoje hasło"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Chcę być na bieżąco z promocjami oraz ważnymi zmianami w serwisie"
                />
              </Grid> */}
              </Grid>
              <Link href="/ClientPanel">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Zarejestruj się
                </Button>
              </Link>

              <Grid container justifyContent="space-between">
                {/* <Grid item>
                <Link href="#" variant="body2">
                  Zarejestruj się z kontem Google
                </Link>
              </Grid> */}
                <Grid item>
                  <Link href="/Login" variant="body2">
                    Masz już konto? Zaloguj się
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
