import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import Divider from "@mui/material/Divider";
import { RepairsInProgress } from "../components/admin-panel/RepairsInProgress";
import { AdminSideMenu } from "../components/admin-panel/menu/AdminSideMenu";
import AdminHeader from "../components/LandingPage/AdminHeader";
import Mechanic from "../components/admin-panel/Mechanic";
export default function AdminPanel(role) {
  const Logout = () => {};
  return (
    <>
      <div style={{ position: "absolute" }}>
        <AdminHeader
          sx={{ position: "relative", top: "0", zIndex: "100", left: "0" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#ffffff",
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
          <Mechanic />
        </div>
      </div>
      <Outlet />
    </>
  );
}
