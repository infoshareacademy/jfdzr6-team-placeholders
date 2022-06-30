import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import ClientPanelHeader from "./ClientPanelHeader";
import { MapClientRepairs } from "../components/RapairClientStatus/MapClientRepairs";
import { Repairstatus } from "../components/Repairstatus";

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


//<MapClientRepairs />