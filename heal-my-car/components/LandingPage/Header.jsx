import * as React from "react";
import Button from "@mui/material/Button";

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
        // position: "fixed",
        zIndex: "1"
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
          <Button
            variant="text"
            color="inherit"
            sx={{ fontSize: "18px", fontFamily: "Helvetica " }}
          >
            Zaloguj
          </Button>
        </div>
        <div
          className="landing-buttons-style"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Button
            variant="text"
            color="inherit"
            sx={{ fontSize: "18px", fontFamily: "Helvetica " }}
          >
            Zarejestruj
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
