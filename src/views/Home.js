import React from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/Card";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import MarketingStatement from "../componets/MarketingStatement";
import NonFunctionalBanner from "../componets/NonFunctionalBanner";
import MembershipType from "../componets/MembershipType";
import ConfirmSubscription from "../componets/ConfirmSubscription";
import Payment from "../componets/Payment";

function Home() {
  return (
    <>
      <TopNav user={localStorage.getItem("name")}></TopNav>
      {/* <Banner></Banner>
      <MarketingStatement></MarketingStatement>
      <Card></Card>
      <NonFunctionalBanner></NonFunctionalBanner>
      <Footer></Footer> */}
      {/* <MembershipType></MembershipType> */}
      {/* <ConfirmSubscription></ConfirmSubscription> */}
      <Payment></Payment>
    </>
  );
}

export default Home;
