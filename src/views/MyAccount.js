import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/scss/style.scss";
import TopNav from "../componets/TopNav";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const MyAccount = () => {
  //State variable for button text
  const [buttonText, setButtonText] = useState("Subscribe to whim");

  //State variable for
  return (
    <div className="myAccountWrapper">
      <TopNav />
      <div className="topPan">
        <div className="home">
          <div className="card">
            <div className="card-header">
              <div className="card-image">
                <img
                  src={localStorage.getItem("profilePic")}
                  alt="profile pic"
                />
              </div>
              <div className="card-profile">
                <div className="card-details">
                  <h5>{localStorage.getItem("name")}</h5>
                </div>
                <div className="card-contact">
                  <h6>
                    <span className="fa fa-envelope"></span>
                    {localStorage.getItem("email")}
                  </h6>
                </div>
                <div className="subscribeButton">
                  <Button variant="outlined">{buttonText}</Button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis dicta nobis repellat! Quae eum inventore neque hic
                  deleniti doloremque iure numquam. Incidunt dolorum sequi,
                  placeat iste eveniet minima consequatur odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomPan">
        <div className="posts">
          <div className="heading">Your posts</div>
          <div className="listView">
            <Card sx={{ "background-color": "none" }}>
              <CardContent>
                <div className="postCards">
                  <div className="cardImage">
                    <img
                      src={localStorage.getItem("coverImage")}
                      alt="post image"
                    />
                  </div>
                  <div className="cardTitle">
                    <Typography variant="h6" className="heading">
                      Post title
                    </Typography>
                  </div>
                  <div className="deleteButton">
                    <Button variant="outlined">
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
