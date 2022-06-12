import React from "react";
import { Outlet } from "react-router-dom";
import TasksPricing from "../components/TasksPricing/TasksPricing";

export default function AdminPanel() {
  return (
    <>
      <div>AdminPanel</div>
      <TasksPricing />
      <Outlet />
    </>
  );
}
