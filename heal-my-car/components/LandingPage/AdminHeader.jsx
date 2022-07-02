import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useState } from "react";

const AdminHeader = () => {
  const isLoggedIn = !!auth.currentUser;
  console.log(isLoggedIn);
  const LoggedButtons = () => {
    return (
      <>
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Link className="link" to="/admin-panel">
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "25px", fontFamily: "Lato " }}
            >
              Menu
            </Button>
          </Link>
        </div>
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Link className="link" to="/">
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "25px", fontFamily: "Lato " }}
              onClick={() => signOut(auth)}
            >
              Wyloguj
            </Button>
          </Link>
        </div>
      </>
    );
  };
  const LogOutButtons = () => {
    return (
      <>
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Link to="/login" className="link">
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "25px", fontFamily: "Lato " }}
            >
              Zaloguj
            </Button>
          </Link>
        </div>
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Link className="link" to="/register">
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "25px", fontFamily: "Lato " }}
            >
              Zarejestruj
            </Button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="landing-top"
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 0px",
          width: "100%",
          height: "75px",
          backgroundColor: "#252e42",
          alignItems: "center",
          zIndex: "1",
          borderBottom: "1px white solid",
        }}
      >
        <div className="landing-logo">
          <Link to="/" className="link">
            <img src="/logoGrad.png" height="75px" />
          </Link>
        </div>

        <div
          className="landing-buttons"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {isLoggedIn ? <LoggedButtons /> : <LogOutButtons />}
        </div>
      </div>
    </>
  );
};
export default AdminHeader;
