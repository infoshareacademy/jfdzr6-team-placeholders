import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import ClientPanelHeader from "./ClientPanelHeader";
import { MapClientRepairs } from "../components/RapairClientStatus/MapClientRepairs";

export default function ClientPanel() {
  return (
    <>
      <ClientPanelHeader />
      
      <MapClientRepairs />
      <Outlet />
    </>
  );
}


//<ShowOffer />