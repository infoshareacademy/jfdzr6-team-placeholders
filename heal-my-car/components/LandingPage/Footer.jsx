import * as React from "react";
const Footer = () => {
  return (
    <div className="footer" style={{ position: "relative" }}>
      <div
        className="footer-overlay"
        style={{
          borderRadius: "30px",
          width: "1000px",
          height: "100px",
          backgroundColor: "#9011E4",
          zIndex: "1",
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginLeft: "20px",
            marginTop: "3%",
            fontFamily: "lato, sans-serif",
            userSelect: "none",
            wordWrap: "break-word",
            letterSpacing: "3px",
          }}
        >
          Zostańmy w kontakcie
        </h2>
      </div>
      <div
        className="footer-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "300px",
          backgroundColor: "#222121",
          color: "white",
          paddingTop: "50px",
        }}
      >
        <div
          className="footer-contact"
          style={{ width: "33%", padding: "15px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          sequi tempora minus quisquam laborum ea cupiditate, magnam corrupti
          maxime accusantium sed! Quisquam tempora ducimus nulla modi dolorem
          eum optio laudantium!
        </div>
        <div
          className="footer-contact"
          style={{ width: "33%", padding: "15px" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          mollitia ullam blanditiis dolore possimus voluptatem atque dolorum,
          ipsa ipsam fugiat veritatis, quisquam tenetur incidunt rem odit rerum,
          quidem reiciendis. Animi.
        </div>
        <div
          className="footer-contact"
          style={{ width: "33%", padding: "15px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae,
          voluptatibus quo dolores numquam itaque at provident veniam illo
          delectus distinctio nobis modi sed exercitationem quidem aut ratione
          nostrum et!
        </div>
      </div>
    </div>
  );
};
export default Footer;
