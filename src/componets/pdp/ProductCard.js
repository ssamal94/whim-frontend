import "../../assets/styles/scss/style.scss";
import landingPhoto from "../../assets/images/homebanner.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  //router constant
  const navigate = useNavigate();

  //Handle click on click of a card
  const handleClick = () => {
    if (localStorage.getItem("token")) {
      //If subscribed, redirect to take course
      //Else redirect to subscription page
      if (localStorage.getItem("isSubscribed") === "true") {
        navigate("/now_playing");
      } else {
        navigate("/subscription");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="productCardComponentWrapper">
        <Card className="card">
          <CardMedia
            component="img"
            height="140"
            image={landingPhoto}
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
              Learn how to play the guitar in no time, with fun and easy
              courses, tutorials, and songs.
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
            <Button className="button" onClick={handleClick}>
              {localStorage.getItem("token")
                ? "Start this course"
                : "Login and subscribe"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
