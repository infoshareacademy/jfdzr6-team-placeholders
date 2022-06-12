import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Divider from "@mui/material/Divider";
import { AdminSideMenu } from "../components/Menu/AdminSideMenu";
import { ClientsList } from "../components/ClientsList";
import { Repairstatus } from "../components/Repairstatus";
import ShowOffer from "../components/AcceptPricing/ShowOffer";

export default function AdminPanel(role) {
  const Logout = () => {};
  return (
    <>
      <Navbar />
      <ShowOffer />
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
        <div className="content" style={{ width: "100%" }}>
          <Repairstatus />
          <br />

          <br />
          <ClientsList />
        </div>
      </div>

      <Outlet />
    </>
  );
}
