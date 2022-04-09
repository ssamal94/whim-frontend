import React from "react";
import defaultCardImage from "../../assets/images/defaultCardImage.webp";
import "../../assets/styles/scss/style.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  //router constant
  const navigate = useNavigate();

  //Handle click on click of a card
  const handleClick = (element) => {
    localStorage.setItem("authorId", element.authorId);
    localStorage.setItem("authorName", element.authorName);
    localStorage.setItem("profilePic", element.authorImage);
    localStorage.setItem("category", element.category);
    localStorage.setItem("coverImage", element.coverImage);
    localStorage.setItem("title", element.title);
    localStorage.setItem("aboutCorse", element.aboutCorse);
    localStorage.setItem("preRequisite", element.preRequisite);
    localStorage.setItem("videoLinks", JSON.stringify(element.videoLinks));
    navigate("/product_description");
  };

  return (
    <div className="cardWrapper">
      {props.data.map((element, index) => {
        return (
          <Card
            sx={{ maxWidth: 300 }}
            className="card"
            key={index}
            onClick={() => handleClick(element)}
          >
            <CardMedia
              component="img"
              height="140"
              image={element.coverImage || defaultCardImage}
              alt="something broke*"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                align="left"
                component="div"
              >
                {element.title}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                align="left"
                component="div"
              >
                By - {element.authorName}
              </Typography>
              <Typography variant="body2" align="left" color="text.secondary">
                Category: {element.category}
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
        );
      })}
    </div>
  );
}

export default ProductCard;
