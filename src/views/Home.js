import React from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/homepage/Card";
import Banner from "../componets/homepage/Banner";
import Footer from "../componets/Footer";
import MarketingStatement from "../componets/homepage/MarketingStatement";
import NonFunctionalBanner from "../componets/homepage/NonFunctionalBanner";

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
