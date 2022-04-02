import "../../assets/styles/scss/style.scss";
import { useState } from "react";
import landingPhoto from "../../assets/images/homebanner.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const AuthorCard = () => {
  const [name, seName] = useState("Author name");
  const [intro, seIntro] = useState("This is a sampe intro, author is genius!");
  const [about, seAbout] = useState(
    "Hi! I am a sample author. 8 years of professional experience on the topic. I create the best content on internet."
  );

  return (
    <>
      <div className="authorCardComponentWrapper">
        <Card className="card">
          <CardContent>
            <Typography gutterBottom align="center">
              About author
            </Typography>
            <div className="flexWrapper">
              <div className="authorImage">
                <img src={landingPhoto} alt="something broke" />
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
