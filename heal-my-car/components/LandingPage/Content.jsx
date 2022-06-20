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
            width: "250px",
            height: "70px",
            fontSize: "25px",
            borderRadius: "15px",
          }}
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
        }}
      >
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
        }}
      >
        <div
          className="content-hero2-column1"
          style={{
            width: "75%",
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
            }}
          >
            <h2>Dlaczego my?</h2>
            <div
              className="content-hero2-column1-list"
              style={{
                width: "100%",
                padding: "20px",
                fontFamily: "Arial",
                letterSpacing: "3px",
                color: "white",
                textAlign: "left",
              }}
            >
              <ul>
                <li style={{ marginBottom: "20px" }}>
                  Wykwalifikowani mechanicy
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Zaufanie milionów klientów
                </li>
                <li style={{ marginBottom: "20px" }}>Rozsądne ceny</li>
                <li style={{ marginBottom: "20px" }}>Szybkie naprawy</li>
                <li style={{ marginBottom: "20px" }}>
                  Najnowszy sprzęt diagnostyczny
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
            style={{ width: "45%", height: "auto" }}
            src="../utils/mechanic2.png"
          />
        </div>
      </div>
    </>
  );
};
export default Content;
