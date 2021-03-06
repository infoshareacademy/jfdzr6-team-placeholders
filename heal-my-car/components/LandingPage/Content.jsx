import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Content = () => {
  const imgStyle = {
    width: "auto",
    height: "850px",
  };
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
          height: "90vh",
          backgroundImage: "url(/car-fix.jpg)",
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
              color: "#fff",
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
              color: "#fff",
            }}
          >
            tysiące zadowolonych klientów w całej Polsce
          </p>
        </div>
        <Link to="/repair-form/repair-form1" className="link">
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "15.0vw",
              height: "70px",
              fontSize: "clamp(1.8rem, 0.6vw, 2.8rem)",
              borderRadius: "15px",
              fontFamily: "lato",
              border: "1px white solid",
              backgroundColor: "#41506e",
              lineHeight: 1,
              "&:hover": {
                backgroundColor: "#41506e",
                color: "#9c27b0",
              },
            }}
          >
            Zleć naprawę
          </Button>
        </Link>
      </div>
      <div
        className="content-hero1"
        style={{
          display: "flex",
          margin: "0 auto",
          padding: "0",
          scrollBehavior: "smooth",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          maxWidth: "1200px",
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
            borderTop: "10px #ad5be4 solid",
            borderLeft: "10px #9011E4 solid",
            top: "-50px",
            left: "20%",
          }}
        ></div>
        <div
          className="rightTop"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderTop: "10px #ad5be4 solid",
            borderRight: "10px #9011E4 solid",
            top: "-50px",
            right: "20%",
          }}
        ></div>
        <div
          className="leftBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px #ad5be4 solid",
            borderRight: "10px #9011E4 solid",
            bottom: "-50px",
            right: "20%",
          }}
        ></div>
        <div
          className="rightBottom"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderBottom: "10px #ad5be4 solid",
            borderLeft: "10px #9011E4 solid",
            bottom: "-50px",
            left: "20%",
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
          <img style={imgStyle} src="/flow.jpg" />
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
            background: "rgb(124,39,255)",
            background:
              "linear-gradient(90deg, rgba(124,39,255,1) 0%, rgba(9,9,121,1) 61%, rgba(31,48,110,1) 100%)",
          }}
        >
          <div
            id="whyus"
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
                width: "600px",
                padding: "30px",
                fontFamily: "Arial",
                letterSpacing: "3px",
                color: "white",
                textAlign: "left",
                fontSize: "clamp(1.0rem, 1.5rem, 3.0rem)",
              }}
            >
              <ul style={{ listStyleType: "none", width: "auto" }}>
                <li style={{ marginBottom: "20px" }}>
                  <img
                    src="/icons/mechanic.png"
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
                    src="/icons/trust.png"
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
                    src="/icons/best-price.png"
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
                    src="/icons/clock.png"
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
                    src="/icons/diagnostic.png"
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
            backgroundColor: "#1F306E",
            textAlign: "right",
          }}
        >
          <img
            style={{ width: "auto", height: "100%", marginRight: "10%" }}
            src="/mechanic2.png"
          />
        </div>
      </div>
    </>
  );
};
export default Content;
