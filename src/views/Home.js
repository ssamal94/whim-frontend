import React, { useEffect, useState } from "react";
import TopNav from "../componets/TopNav";
import Card from "../componets/homepage/Card";
import Banner from "../componets/homepage/Banner";
import Footer from "../componets/Footer";
import MarketingStatement from "../componets/homepage/MarketingStatement";
import NonFunctionalBanner from "../componets/homepage/NonFunctionalBanner";
import axios from "axios";
import useModal from "../hooks/useModal";
import Dialog from "../componets/Dialogue";

function Home() {
  //Destructure modal methods for dialog box
  const { alertStatus, alertDescription, setAlertDescription, setAlertStatus } =
    useModal();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9032/getAllPosts").then((res) => {
      if (res.data.message === "ok") {
        setPosts(res.data.results);
      } else {
        setPosts([]);
        setAlertDescription(res.data.message);
        setAlertStatus(true);
      }
    });
  }, []);
  return (
    <>
      {alertStatus ? (
        <Dialog
          message={alertDescription}
          toggleDialog={(status) => setAlertStatus(status)}
        />
      ) : null}
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
