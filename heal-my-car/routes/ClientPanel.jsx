import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import Header from "../components/LandingPage/Header";
import { Repairstatus } from "../components/Repairstatus";

export default function ClientPanel() {
  return (
    <>
      <Header />
      <div>ClientPanel</div>
      <ShowOffer />
      <Repairstatus />
      <Outlet />
    </>
  );
}


//<MapClientRepairs />