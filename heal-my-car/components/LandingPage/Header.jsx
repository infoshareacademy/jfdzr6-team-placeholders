import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="landing-top"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "75px",
        backgroundColor: "#1e88e5",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <div className="landing-logo">
        <img src="../utils/logoGrad.png" height="75px" />
      </div>

      <div
        className="landing-buttons"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Link to="/login">
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
          <Link to="/register">
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "25px", fontFamily: "Lato " }}
            >
              Zarejestruj
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
