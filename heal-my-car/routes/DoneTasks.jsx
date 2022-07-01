import React from "react";
import { Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { AdminSideMenu } from "../components//admin-panel/menu/AdminSideMenu";
import Header from "../components/LandingPage/Header";
import { RepairsDone } from "../components/admin-panel/RepairsDone";
import AdminHeader from "../components/LandingPage/AdminHeader";
import Mechanic from "../components/admin-panel/Mechanic";

const DoneTasks = () => {
  return (
    <>
      <AdminHeader />
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
          <RepairsDone />
        </div>
        <Mechanic />
      </div>
      <Outlet />
    </>
  );
};

export default DoneTasks;
