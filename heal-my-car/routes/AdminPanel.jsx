import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import Divider from "@mui/material/Divider";
import { RepairsInProgress } from "../components/admin-panel/RepairsInProgress";
import { AdminSideMenu } from "../components/admin-panel/menu/AdminSideMenu";
export default function AdminPanel(role) {
  const Logout = () => {};
  return (
    <>
      <Header />
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
