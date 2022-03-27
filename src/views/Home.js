import React from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/Card";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";

function Home() {
  return (
    <>
      <TopNav user={localStorage.getItem("name")}></TopNav>
      <Banner></Banner>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default Home;
