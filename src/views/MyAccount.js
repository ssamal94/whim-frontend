import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/scss/style.scss";
import defaultPic from "../assets/images/defaultCardImage.webp";
import TopNav from "../componets/TopNav";
import Dialog from "../componets/Dialogue";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import useModal from "../hooks/useModal";

const MyAccount = () => {
  const navigate = useNavigate();

  //Destructure modal methods for dialog box
  const { alertStatus, alertDescription, setAlertDescription, setAlertStatus } =
    useModal();

  //Profile pic
  const [profilePic, setProfilePic] = useState("");

  //State variable for button text
  const [buttonText, setButtonText] = useState("");

  //State variable for to store list of posts
  const [data, setData] = useState([]);

  //State variable for About author
  const [aboutAuthor, setAboutAuthor] = useState("");

  //On load of page, make service call
  useEffect(() => {
    axios
      .post("http://localhost:9032/getUserPosts", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        if (res.data.message === "ok") {
          setData(res.data.results);
          setAboutAuthor(res.data.aboutAuthor);
          setProfilePic(res.data.pic);
          if (res.data.isSubscribed === true) {
            setButtonText("Unsubscribe from WHIM");
          } else {
            setButtonText("Subscribe to WHIM");
          }
        } else if (res.data.message === "incomplete profile") {
          navigate("/authorDetails");
        } else {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
        }
      });
  }, []);

  //Handle click on click of a card
  const openPost = (element) => {
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

  //Delete a post
  const deletePost = (post) => {
    axios
      .post("http://localhost:9032/deletePost", { postId: post._id })
      .then((res) => {
        if (res.data.message === "ok") {
          localStorage.setItem("aboutCorse", "");
          localStorage.setItem("category", "");
          localStorage.setItem("coverImage", "");
          localStorage.setItem("authorId", "");
          localStorage.setItem("authorName", "");
          localStorage.setItem("videoLinks", "");
          localStorage.setItem("title", "");
          localStorage.setItem("preRequisite", "");
          setAlertDescription("post deleted");
          setAlertStatus(true);
          if (res.data.results !== null) {
            setData(res.data.results);
          } else {
            setData([]);
          }
        } else {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
        }
      });
  };

  //Chagnge subscription
  const changeSubscription = () => {
    if (buttonText === "Subscribe to WHIM") {
      navigate("/subscription");
    } else {
      axios
        .post("http://localhost:9032/unsubscribe", {
          email: localStorage.getItem("email"),
        })
        .then((res) => {
          if (res.data.status === "ok") {
            localStorage.setItem("isSubscribed", false);
            setAlertDescription(
              "Sorry to see you leave! You are unsubscribed from WHIM, you will not be able to access or post any content however, if you have any existing post as an Author, your post will stay active till you delete it."
            );
            setAlertStatus(true);
          } else {
            setAlertDescription(
              "Something went wrong, please try again after sometime. If the problem still persists, please contat us for help."
            );
            setAlertStatus(true);
          }
        });
    }
  };

  return (
    <>
      {alertStatus ? (
        <Dialog
          message={alertDescription}
          toggleDialog={(status) => setAlertStatus(status)}
        />
      ) : null}
      <div className="myAccountWrapper">
        <TopNav />
        <div className="topPan">
          <div className="home">
            <div className="card">
              <div className="card-header">
                <div className="card-image">
                  <img src={profilePic} alt="profile pic" />
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
                    <Button variant="outlined" onClick={changeSubscription}>
                      {buttonText}
                    </Button>
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
                  <Card sx={{ backgroundColor: "none" }} key={element._id}>
                    <CardContent>
                      <div className="postCards">
                        <div
                          className="cardImage"
                          onClick={() => openPost(element)}
                        >
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
                        <div
                          className="deleteButton"
                          onClick={() => deletePost(element)}
                        >
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
    </>
  );
};

export default MyAccount;
