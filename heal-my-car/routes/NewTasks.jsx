import React from "react";
import { Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TasksPricing from "../components/TasksPricing/TasksPricing";
import { AdminSideMenu } from "../components//admin-panel/menu/AdminSideMenu";
import Header from "../components/LandingPage/Header";

const NewTasks = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h2>Witaj Adminie</h2>
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
          <TasksPricing />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NewTasks;
