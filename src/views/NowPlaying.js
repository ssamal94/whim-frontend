import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import defaultImage from "../assets/images/defaultCardImage.webp";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const NowPlaying = () => {
  const [title, setTitle] = useState("Error getting title");
  const [authorName, setAuthorName] = useState("Error fetching name");
  const [coverImage, setCoverImage] = useState();

  //List of videos
  const [content, setContent] = useState([]);
  //Variable to store video link
  const [link, setLink] = useState("");

  //Update all the variables on page load
  useEffect(async () => {
    setContent(await eval(localStorage.getItem("videoLinks")));
    setTitle(localStorage.getItem("title"));
    setAuthorName(localStorage.getItem("authorName"));
  }, []);

  //Method to change video
  const changeVideo = (newLink) => {
    setLink(newLink);
  };
  return (
    <>
      <TopNav />
      <div className="nowPlayigWrapper">
        <div className="leftPanWrapper">
          <div className="aboutCardWrapper">
            <>
              <div className="nowPlayingproductCardComponentWrapper">
                <div className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={localStorage.getItem("coverImage") || defaultImage}
                    alt="something broke*"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      align="left"
                      component="div"
                    >
                      {title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      align="left"
                      component="div"
                    >
                      By - {authorName}
                    </Typography>
                    <div className="downloadContent">Download resources</div>
                  </CardContent>
                </div>
              </div>
            </>
          </div>
          <div className="contentCardWrapper">
            <div className="contentListComponentWrapper">
              <Typography
                gutterBottom
                variant="h6"
                align="left"
                component="div"
              >
                Content:
              </Typography>
              {content.map((element, index) => {
                return (
                  <div
                    className="contentTitles"
                    key={index}
                    onClick={() => changeVideo(element.link)}
                  >
                    <Typography variant="body2" align="left">
                      <i className="fa fa-play"></i> {element.name}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rightPanWrapper">
          <div className="mediaPlayerWrapper">
            <iframe
              width="100%"
              height="100%"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NowPlaying;
