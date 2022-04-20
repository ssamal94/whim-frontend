import "../../assets/styles/scss/style.scss";
import { useEffect, useState } from "react";
import defaultImage from "../../assets/images/defaultCardImage.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import useModal from "../../hooks/useModal";
import Dialog from "../Dialogue";

const AuthorCard = () => {
  //Destructure modal methods for dialog box
  const { alertStatus, alertDescription, setAlertDescription, setAlertStatus } =
    useModal();

  const [name, setName] = useState("Author name");
  const [intro, setIntro] = useState(
    "This is a sampe intro, author is genius!"
  );
  const [about, setAbout] = useState(
    "Hi! I am a sample author. 8 years of professional experience on the topic. I create the best content on internet."
  );

  useEffect(() => {
    setName(localStorage.getItem("authorName"));
    axios
      .post("http://localhost:9032/getAuthor", {
        id: localStorage.getItem("authorId"),
      })
      .then((res) => {
        if (res.data.message === "ok") {
          setIntro(res.data.intro);
          setAbout(res.data.about);
        } else {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
        }
      });
  });

  return (
    <>
      {alertStatus ? (
        <Dialog
          message={alertDescription}
          toggleDialog={(status) => setAlertStatus(status)}
        />
      ) : null}
      <div className="authorCardComponentWrapper">
        <Card className="card">
          <CardContent>
            <Typography
              gutterBottom
              align="center"
              style={{ fontSize: "1.3rem" }}
            >
              About author
            </Typography>
            <div className="flexWrapper">
              <div className="authorImage">
                <img
                  src={localStorage.getItem("profilePic") || defaultImage}
                  alt="something broke"
                />
              </div>
              <div className="nameAndIntroWrapper">
                <Typography
                  gutterBottom
                  align="left"
                  component="div"
                  variant="h6"
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="text.secondary"
                  component="div"
                  style={{ fontSize: "1rem" }}
                >
                  {intro}
                </Typography>
              </div>
            </div>
            <Typography
              gutterBottom
              variant="subtitle1"
              align="left"
              component="div"
            >
              {about}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AuthorCard;
