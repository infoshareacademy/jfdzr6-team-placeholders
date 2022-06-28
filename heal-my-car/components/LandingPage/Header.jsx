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
        padding: "0px 0px",
        width: "100%",
        height: "75px",
        backgroundColor: "#1e88e5",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <div className="landing-logo">
        <Link to="/" className="link">
          <img src="../utils/logoGrad.png" height="75px" />
        </Link>
      </div>

      <div
        className="landing-buttons"
        style={{ display: "flex", flexDirection: "row" }}
      >
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
      </div>
    </div>
  );
};
export default Header;
