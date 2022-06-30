import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import { Repairstatus } from "../components/Repairstatus";
import ClientPanelHeader from "./ClientPanelHeader";

export default function ClientPanel() {
  return (
    <>
      <ClientPanelHeader />
      <ShowOffer />
      <Repairstatus />
      <Outlet />
    </>
  );
}
