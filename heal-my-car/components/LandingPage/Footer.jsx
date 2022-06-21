import * as React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div
        style={{
          position: "relative",
          fontFamily: "lato",
          letterSpacing: "3px",
          textAlign: "center",
        }}
      >
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
            Godziny pracy serwisów: pon.-pt. 7:00-19:00, sob.-ndz. 10:00-15:00
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
            style={{
              width: "33%",
              padding: "15px",
              borderRight: "2px solid gray",
            }}
          >
            <p style={{ fontSize: "30px" }}>Gdzie nas znajdziesz?</p>
            <div style={{ padding: "20px", textAlign: "left" }}>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "22px",
                  marginLeft: "100px",
                }}
              >
                <li style={{ marginBottom: "70px" }}>
                  Gdańsk
                  <br />
                  ul. Mechaników 21B/37, 80-410
                </li>
                <li style={{ marginBottom: "18px" }}>
                  Gdynia
                  <br />
                  ul. Hydraulików 13/37, 85-560
                </li>
              </ul>
            </div>
          </div>
          <div
            className="footer-contact"
            style={{
              width: "33%",
              padding: "15px",
              borderRight: "2px solid gray",
            }}
          >
            <p style={{ fontSize: "30px" }}>Kontakt</p>
            <div style={{ padding: "20px", textAlign: "left" }}>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "22px",
                  marginLeft: "150px",
                }}
              >
                <li style={{ marginBottom: "50px" }}>
                  E-mail: serwis@healmycar.com
                </li>
                <li style={{ marginBottom: "50px" }}>Tel: +48 500-600-700</li>
                <li style={{ marginBottom: "50px" }}>Fax: +48-212-9876543</li>
              </ul>
            </div>
          </div>
          <div
            className="footer-contact"
            style={{ width: "33%", padding: "15px" }}
          >
            <h2 style={{ marginBottom: "40px" }}>
              Współpracujemy z najlepszymi!
            </h2>
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "20px",
                }}
              >
                <li>
                  <img
                    src="../utils/bosch.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                    }}
                  ></img>
                </li>
                <li>
                  <img
                    src="../utils/lambo.png"
                    style={{
                      width: "auto",
                      height: "170px",
                      display: "inline-block",
                    }}
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
