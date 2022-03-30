import React from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/Card";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import MarketingStatement from "../componets/MarketingStatement";
import NonFunctionalBanner from "../componets/NonFunctionalBanner";

function Home() {
  return (
    <>
      <TopNav user={localStorage.getItem("name")}></TopNav>
      <Banner></Banner>
      <MarketingStatement></MarketingStatement>
      <Card></Card>
      <NonFunctionalBanner></NonFunctionalBanner>
      <Footer></Footer>
    </>
  );
}

export default Home;
