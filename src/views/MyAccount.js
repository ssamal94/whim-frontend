import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/scss/style.scss";
import defaultPic from "../assets/images/defaultCardImage.webp";
import TopNav from "../componets/TopNav";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const MyAccount = () => {
  const navigate = useNavigate();

  //State variable for button text
  const [buttonText, setButtonText] = useState("Subscribe to whim");

  //State variable for to store list of posts
  const [data, setData] = useState([]);

  //State variable for About author
  const [aboutAuthor, setAboutAuthor] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:9032/getUserPosts", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        if (res.data.message === "ok") {
          setData(res.data.results);
          setAboutAuthor(res.data.aboutAuthor);
        } else if (res.message === "incomplete profile") {
          navigate("/authorDetails");
        } else {
          alert(res.data.message);
        }
      });
  }, []);

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
                <p>{aboutAuthor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomPan">
        <div className="posts">
          <div className="heading">Your posts</div>
          <div className="listView">
            {data.map((element) => {
              return (
                <Card
                  sx={{ backgroundColor: "none" }}
                  key={element._id}
                  onClick={() => handleClick(element)}
                >
                  <CardContent>
                    <div className="postCards">
                      <div className="cardImage">
                        <img
                          src={element.coverImage || defaultPic}
                          alt="cover pic"
                        />
                      </div>
                      <div className="cardTitle">
                        <Typography variant="h6" className="heading">
                          {element.title}
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
