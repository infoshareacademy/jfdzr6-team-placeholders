import React from "react";

function Mechanic() {
  return (
    <div style={{ positon: "absolute", zIndex: "-1" }}>
      <img
        style={{ position: "fixed", bottom: "0", right: "0", zIndex: "-1" }}
        src="/mechanic.png"
      ></img>
    </div>
  );
}

export default Mechanic;
