import React from "react";
import defaultCardImage from "../../assets/images/defaultCardImage.webp";
import "../../assets/styles/scss/style.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ProductCard() {
  //router constant
  const navigate = useNavigate();

  //Handle click on click of a card
  const handleClick = () => {
    navigate("/product_description");
  };

  return (
    <div className="cardWrapper">
      <Card sx={{ maxWidth: 300 }} className="card" onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={defaultCardImage}
          alt="something broke*"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" align="left" component="div">
            Learn Guitar - Noob to pro in 4 weeks
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="left"
            component="div"
          >
            By - Arthur Gunn
          </Typography>
          <Typography variant="body2" align="left" color="text.secondary">
            Learn how to play the guitar in no time, with fun and easy courses,
            tutorials, and songs.
          </Typography>
          <Typography gutterBottom variant="h6" align="left" component="div">
            CA$7.99
          </Typography>
          <div className="rating">
            <Typography
              gutterBottom
              variant="subtitle1"
              align="left"
              component="div"
            >
              (56894 ratings)
            </Typography>
            <input type="radio" name="rating" value="5" id="5" />
            <label htmlFor="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label htmlFor="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label htmlFor="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label htmlFor="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label htmlFor="1">☆</label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
