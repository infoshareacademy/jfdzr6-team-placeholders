import React from 'react'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

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
                    fontFamily: 'inherit',
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
