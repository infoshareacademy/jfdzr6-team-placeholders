import Button from "@mui/material/Button";

const Content = () => {
  return (
    <>
      <div
        className="content-background"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "50vh",
          backgroundImage: "url(../../utils/car-fix.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
        }}
      >
        <div
          className="content-slogan"
          style={{
            color: "#1e88e5",
            marginTop: "50px",
            fontFamily: "lato",
            letterSpacing: "3px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              fontSize: "60px",
              userSelect: "none",
              wordWrap: "break-word",
            }}
          >
            Skorzystaj z naszych usług już dziś!
          </p>
          <p
            style={{
              fontSize: "25px",
              userSelect: "none",
              wordWrap: "break-word",
              marginTop: "20px",
            }}
          >
            miliony zadowolonych klientów w całej Polsce
          </p>
        </div>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "300px",
            height: "70px",
            fontSize: "35px",
            borderRadius: "15px",
            fontFamily: "lato",
          }}
          href="/repair-form/repair-form1"
          color="secondary"
        >
          Zleć naprawę
        </Button>
      </div>
      <div
        className="content-hero1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "80%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div
          className="leftTop"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderTop: "10px #9011E4 solid",
            borderLeft: "10px #9011E4 solid",
            top: "-50px",
            left: "35%",
          }}
        ></div>
        <div
          className="rightTop"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderTop: "10px #9011E4 solid",
            borderRight: "10px #9011E4 solid",
            top: "-50px",
            right: "35%",
          }}
        ></div>
        <div
          className="leftBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px #000000 solid",
            borderRight: "10px #000000 solid",
            bottom: "-50px",
            right: "35%",
          }}
        ></div>
        <div
          className="rightBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px black solid",
            borderLeft: "10px black solid",
            bottom: "-50px",
            left: "35%",
          }}
        ></div>
        <div
          className="content-hero1-slogan"
          style={{
            fontFamily: "lato",
            letterSpacing: "3px",
            textAlign: "center",
            color: "#9011E4",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          <h2>Jak to działa?</h2>
        </div>
        <div
          style={{
            userDrag: "none",
            userSelect: "none",
          }}
        >
          <img
            style={{ width: "700px", height: "auto" }}
            src="../utils/flow.jpg"
          />
        </div>
      </div>
      <div
        className="content-hero2"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxHeight: "550px",
        }}
      >
        <div
          className="content-hero2-column1"
          style={{
            width: "73%",
            background: "rgb(203,101,197)",
            background:
              "linear-gradient(90deg, rgba(203,101,197,0.2497373949579832) 0%, #cc23c2e6 0%, #1e88e5 100%)",
          }}
        >
          <div
            className="content-hero2-column1-whyus"
            style={{
              width: "40%",
              padding: "20px",
              fontFamily: "lato",
              letterSpacing: "5px",
              textAlign: "center",
              color: "white",
              marginLeft: "150px",
            }}
          >
            <h1>Dlaczego my?</h1>
            <div
              className="content-hero2-column1-list"
              style={{
                width: "100%",
                padding: "20px",
                fontFamily: "Arial",
                letterSpacing: "3px",
                color: "white",
                textAlign: "left",
                fontSize: "30px",
              }}
            >
              <ul style={{ listStyleType: "none", width: "auto" }}>
                <li style={{ marginBottom: "20px" }}>
                  <img
                    src="../utils/icons/mechanic.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                      marginRight: "15px",
                    }}
                  ></img>
                  wykwalifikowani mechanicy
                </li>
                <li style={{ marginBottom: "20px", marginLeft: "150px" }}>
                  <img
                    src="../utils/icons/trust.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                      marginRight: "15px",
                    }}
                  ></img>
                  zaufanie milionów klientów
                </li>
                <li style={{ marginBottom: "20px", marginLeft: "0px" }}>
                  <img
                    src="../utils/icons/best-price.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                      marginRight: "15px",
                    }}
                  ></img>
                  rozsądne ceny
                </li>
                <li style={{ marginBottom: "20px", marginLeft: "150px" }}>
                  <img
                    src="../utils/icons/clock.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                      marginRight: "15px",
                    }}
                  ></img>
                  szybkie naprawy
                </li>
                <li style={{ marginBottom: "20px", marginLeft: "0px" }}>
                  <img
                    src="../utils/icons/diagnostic.png"
                    style={{
                      height: "50px",
                      width: "auto",
                      display: "inline-block",
                      marginRight: "15px",
                    }}
                  ></img>
                  najnowszy sprzęt diagnostyczny
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="content-hero2-column2"
          style={{
            flexGrow: "1",
            backgroundColor: "#1e88e5",
            textAlign: "right",
          }}
        >
          <img
            style={{ width: "40%", height: "100%", marginRight: "150px" }}
            src="../utils/mechanic2.png"
          />
        </div>
      </div>
    </>
  );
};
export default Content;