import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export const AdminSideMenu = () => {
  return (
    <>
      <div
        className="side-menu"
        style={{
          width: "140px",
          display: "flex",
          flexDirection: "column",
          gap: "350px",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="column" spacing={1} marginTop="15px">
          <Link to="/newtasks" style={{ textDecoration: "none" }}>
            <Button variant="contained">Naprawy do wyceny</Button>
          </Link>
          <Link to="/admin-panel" style={{ textDecoration: "none" }}>
            <Button variant="contained">Naprawy w toku</Button>
          </Link>
          <Link to="/repairsdone" style={{ textDecoration: "none" }}>
            <Button variant="contained">Naprawy wykonane</Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing={1} marginTop="15px">
          <Link
            to="/login"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <Button variant="contained">Wyloguj mnie</Button>
          </Link>
        </Stack>
      </div>
    </>
  );
};
