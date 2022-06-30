import * as React from "react";
import { Link } from "react-router-dom";

const clientPanelHeader = () => {
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
        <img src="../utils/logoGrad.png" height="75px" />
      </div>

      <div>
        <h1>Panel Klienta</h1>
      </div>
      <div></div>
    </div>
  );
};
export default clientPanelHeader;
