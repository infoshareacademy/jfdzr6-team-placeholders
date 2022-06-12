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
          height: "100vh",
          backgroundImage: "url(../../utils/car-fix.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
        }}
      >
        <div className="content-empty-div" style={{ height: "10px" }}></div>
        <div
          className="content-slogan"
          style={{
            color: "#026bac",
            fontFamily: "Anton",
            letterSpacing: "3px",
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
    </>
  );
};
export default Content;
