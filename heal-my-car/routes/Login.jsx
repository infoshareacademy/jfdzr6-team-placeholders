import React from 'react'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderForm = (
        <div className="form">
            <form>
                <div className="input-container"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        margin: '10px',
                    }}>
                    <label>Login: </label>
                    <input
                        type="text"
                        name="uname"
                        required
                        style={{ height: '25px', border: '1px solid rgba(0, 0, 0, 0.2)' }}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    margin: '10px',
                }}>
                    <label>Hasło: </label>
                    <input
                        type="password"
                        name="pass"
                        required
                        style={{ height: '25px', border: '1px solid rgba(0, 0, 0, 0.2)' }}
                    />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div
                    className="button-container"
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Link to='/admin-panel'>
                        <input
                            type="submit"
                            style={{ marginTop: "10px", cursor: "pointer", fontSize: "15px", background: "#1976d2", color: "#fff", padding: "10px 20px" }} />
                    </Link>
                </div>
            </form >
        </div >
    );
    return (
        <>
            <div className="app"
                style={{
                    fontFamily: 'sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                    height: '100vh',
                    backgroundColor: '#f8f9fd'
                }}>
                <div
                    className="login-form"
                    style={{
                        backgroundColor: 'white', padding: '2rem',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    }}>
                    <div className="title"
                        style={{
                            fontSize: '25px',
                            marginBottom: '20px'
                        }}>Zaloguj się</div>
                    {isSubmitted ? <div>Logowanie pomyślne</div> : renderForm}

                </div>
            </div>
        </>
    )
}
