import React from "react";

function Mechanic() {
  return (
    <div style={{ positon: "relative" }}>
      <img
        style={{ position: "absolute", bottom: "0", right: "0", zIndex: "-1" }}
        src="/mechanic.png"
      ></img>
    </div>
  );
}

export default Mechanic;
