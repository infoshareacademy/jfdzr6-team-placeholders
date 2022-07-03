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
      <AdminHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ffffff",
          height: "1000px",
          width: "70vw",
        }}
      >
        <AdminSideMenu />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ margin: "0 20px 0 20px" }}
        />
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            flex: "1 1 auto",
            alignContent: "flex-start",
          }}
        >
          <RepairsInProgress />
        </div>
        <div style={{ width: "550px" }}></div>
       
        <Mechanic />
      </div>
      <Outlet />
    </>
  );
}
