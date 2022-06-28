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
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../src/utils/firebaseErrors";
import { auth } from "../src/firebase";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { getFormData } from "../src/utils/getFormData";

// export const Login = () => {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const renderForm = (
//     <div className="form">
//       <form>
//         <div
//           className="input-container"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "8px",
//             margin: "10px",
//           }}
//         >
//           <label>Login: </label>
//           <input
//             type="text"
//             name="uname"
//             required
//             style={{ height: "25px", border: "1px solid rgba(0, 0, 0, 0.2)" }}
//           />
//           {/* {renderErrorMessage("uname")} */}
//         </div>
//         <div
//           className="input-container"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "8px",
//             margin: "10px",
//           }}
//         >
//           <label>Hasło: </label>
//           <input
//             type="password"
//             name="pass"
//             required
//             style={{ height: "25px", border: "1px solid rgba(0, 0, 0, 0.2)" }}
//           />
//           {/* {renderErrorMessage("pass")} */}
//         </div>
//         <div
//           className="button-container"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Link to="/admin-panel">
//             <input
//               type="submit"
//               style={{
//                 marginTop: "10px",
//                 cursor: "pointer",
//                 fontSize: "15px",
//                 background: "#1976d2",
//                 color: "#fff",
//                 padding: "10px 20px",
//               }}
//             />
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
//   return (
//     <>
//       <div
//         className="app"
//         style={{
//           fontFamily: "sans-serif",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           gap: "20px",
//           height: "100vh",
//           backgroundColor: "#f8f9fd",
//         }}
//       >
//         <div
//           className="login-form"
//           style={{
//             backgroundColor: "white",
//             padding: "2rem",
//             boxShadow:
//               "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//           }}
//         >
//           <div
//             className="title"
//             style={{
//               fontSize: "25px",
//               marginBottom: "20px",
//             }}
//           >
//             Zaloguj się
//           </div>
//           {isSubmitted ? <div>Logowanie pomyślne</div> : renderForm}
//         </div>
//       </div>
//     </>
//   );
// };

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

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        alert("Zalogowano");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.code);
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
              Zaloguj się
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Podaj hasło"
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Zapamiętaj mnie"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ZALOGUJ
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    to="/password-reset"
                    variant="body2"
                    className="linkBlue"
                  >
                    Przypomnij hasło
                  </Link>
                </Grid>
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
