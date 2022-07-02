import React from "react";
import { Outlet } from "react-router-dom";
import ShowOffer from "../components/AcceptPricing/ShowOffer";
import Header from "../components/LandingPage/Header";
// import Footer from "../components/LandingPage/ClientFooter";
import { Repairstatus } from "../components/Repairstatus";

export default function ClientPanel(props) {
  return (
    <>
      <Header />
      <ShowOffer />
      <Repairstatus userId={props.userId} />
      <Outlet />
    </>
  );
}

//<MapClientRepairs /> <ClientFooter />
