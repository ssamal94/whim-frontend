import React, { useEffect, useState } from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/homepage/Card";
import Banner from "../componets/homepage/Banner";
import Footer from "../componets/Footer";
import MarketingStatement from "../componets/homepage/MarketingStatement";
import NonFunctionalBanner from "../componets/homepage/NonFunctionalBanner";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9032/getAllPosts").then((res) => {
      if (res.data.message === "ok") {
        setPosts(res.data.results);
      } else {
        setPosts([]);
        alert("res.data.message");
      }
    });
  }, []);
  return (
    <>
      <TopNav user={localStorage.getItem("name")}></TopNav>
      <Banner></Banner>
      <MarketingStatement></MarketingStatement>
      <Card data={posts}></Card>
      <NonFunctionalBanner></NonFunctionalBanner>
      <Footer></Footer>
    </>
  );
}

export default Home;
