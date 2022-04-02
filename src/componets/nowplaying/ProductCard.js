import "../../assets/styles/scss/style.scss";
import landingPhoto from "../../assets/images/homebanner.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ProductCard = () => {
  const [title, setTitle] = useState("Error getting title");
  const [authorName, setAuthorName] = useState("Error fetching name");
  return (
    <>
      <div className="nowPlayingproductCardComponentWrapper">
        <div className="card">
          <CardMedia
            component="img"
            height="140"
            image={landingPhoto}
            alt="something broke*"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" align="left" component="div">
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
  );
};

export default ProductCard;
