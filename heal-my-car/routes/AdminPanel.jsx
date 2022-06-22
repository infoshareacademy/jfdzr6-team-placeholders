import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Divider from "@mui/material/Divider";
import { AdminSideMenu } from "../components/Menu/AdminSideMenu";
import { RepairsInProgress } from "../components/admin-panel/clientsData/RepairsInProgress";
import { MapClients } from "../components/admin-panel/clientsData/MapClients";

export default function AdminPanel(role) {
  const Logout = () => { };
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Panel Admina</h2>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AdminSideMenu />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ margin: "0 20px 0 20px" }}
        />
        <div className="content">
          <RepairsInProgress />
        </div>
      </div>
      <Outlet />
    </>
  );
}
