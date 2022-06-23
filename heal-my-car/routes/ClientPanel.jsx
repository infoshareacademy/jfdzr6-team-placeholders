import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import { Repairstatus } from "../components/Repairstatus";

export default function ClientPanel() {
  return (
    <>
      <div>ClientPanel</div>
      <ShowOffer />
      <Repairstatus />;
      <Outlet />
    </>
  );
}
