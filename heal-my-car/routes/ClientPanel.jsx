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
      <h3 style={{textAlign:"center", fontFamily: "lato", fontSize: "25px", marginBottom: "15px", marginTop:"15px"}}>Panel klienta</h3>
      <ShowOffer userId={props.userId} />
      <Repairstatus userId={props.userId} />
      <Outlet />
    </>
  );
}

//<MapClientRepairs /> <ClientFooter />
