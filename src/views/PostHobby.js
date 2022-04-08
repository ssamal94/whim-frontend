import { useState } from "react";

import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";
import "../assets/styles/scss/style.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import useProductUpload from "../hooks/useProductUpload";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const PostHobby = () => {
  //CATEGORIES
  const categories = ["music", "art", "tech"];

  //Router variable
  const navigate = useNavigate();

  //Is image icon required?
  const [isRequired, setIsRequired] = useState("flex");

  //Upload button text
  const [buttonText, setButtonText] = useState("SELECT IMAGE");

  //List of video names and links
  const [videos, setVideos] = useState([]);
  //current video and video link
  const [currentVideo, setCurrentVideoName] = useState("");
  const [currentVideoLink, setCurrentVideoLink] = useState("");

  //Current image
  const [currentImage, setCurrentImage] = useState("");

  //Hook variables
  const {
    category,
    setCategory,
    coverImage,
    setCoverImage,
    title,
    setTitle,
    aboutCorse,
    setAboutCorse,
    preRequisite,
    setPreRequisite,
    videoLinks,
    setVideoLinks,
  } = useProductUpload();

  //Handles change of CATEGORY selection
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  //Handles change of PRE-REQUISITE selection
  const handlePreReqChange = (event) => {
    setPreRequisite(event.target.value);
  };

  //Handles change of POST TITLE selection
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //Handles change of POST ABOUT(description) selection
  const handleAboutCorseChange = (event) => {
    setAboutCorse(event.target.value);
  };

  //Handles change of video name
  const handleVideoNameChanges = (event) => {
    setCurrentVideoName(event.target.value);
  };

  //Handles change of video link
  const handleVideoLinkChanges = (event) => {
    setCurrentVideoLink(event.target.value);
  };

  //Handles image selection
  const handleImageChanges = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCurrentImage(reader.result);
      setIsRequired("none");
      setButtonText("CHANGE IMAGE");
    };
    reader.readAsDataURL(files[0]);
  };

  //A div to display all added videos
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  //Add video to the upload list
  const addVideo = () => {
    let tempArray = [...videos];
    tempArray.push({ name: currentVideo, link: currentVideoLink });
    setVideos(tempArray);
  };

  //Remove video from the upload list
  const removeVideo = (updateThis) => {
    let tempArray = [...videos];
    tempArray.forEach((element, index) => {
      if (element.name === updateThis.name) {
        tempArray.splice(index, 1);
      }
    });
    setVideos(tempArray);
  };

  const PostHobby = () => {
    console.log("uploded");
  };

  return (
    <>
      <div className="postHobbyWrapper">
        <TopNav />
        <div className="centerAreaWrapper">
          <div className="leftPan">
            <div className="imageUpload">
              <div id="uploadArea" className="upload-area">
                <div className="upload-area__header">
                  <h3 className="upload-area__title">Cover image</h3>
                  <p className="upload-area__paragraph">
                    Tip: When choosing your thumbnail, choose an image that
                    shows a person making eye contact with the viewer. This
                    subtle visual cue draws people in and makes them feel more
                    connected.
                  </p>
                </div>

                <div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
                  <span
                    className="drop-zoon__icon"
                    style={{ display: isRequired }}
                  >
                    <i className="fa fa-image"></i>
                  </span>
                  <img
                    src={currentImage}
                    alt="Please upload an image"
                    className="uploadedImage"
                  />
                  <input
                    type="file"
                    id="fileInput"
                    className="drop-zoon__file-input"
                    accept="image/*"
                    onChange={handleImageChanges}
                  />
                </div>
                <label htmlFor="fileInput" style={{ "margin-top": "2rem" }}>
                  <Button variant="outlined" component="span">
                    {buttonText}
                  </Button>
                </label>
              </div>
            </div>
          </div>
          <div className="centerPan">
            <div className="titleAbout">
              <div className="title">
                <TextField
                  id="filled-multiline-static"
                  label="Post title"
                  sx={{ width: "55.5ch" }}
                  value={title}
                  helperText="Plese enter a title for your post"
                  onChange={handleTitleChange}
                />
              </div>
              <div className="about">
                <TextField
                  id="filled-multiline-static"
                  label="Description"
                  multiline
                  maxRows={4}
                  sx={{ width: "50ch" }}
                  value={aboutCorse}
                  helperText="Every line separated with a (.) appears as a bullet point to the viewers"
                  onChange={handleAboutCorseChange}
                />
              </div>
            </div>
            <div className="preRequisite">
              <TextField
                id="filled-multiline-static"
                label="Pre-requisite"
                multiline
                maxRows={4}
                sx={{ width: "50ch" }}
                value={preRequisite}
                helperText="Every line separated with a (.) appears as a bullet point to the viewers"
                onChange={handlePreReqChange}
              />
            </div>
            <div className="category">
              <TextField
                id="outlined-select-category"
                select
                label="Category"
                value={category}
                onChange={handleCategoryChange}
                helperText="Please select your category"
              >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className="rightPan">
            <div className="addedVideos">
              <Demo>
                <List>
                  {videos.map((element, index) => {
                    return (
                      <ListItem
                        key={index}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => removeVideo(element)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <OndemandVideoIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={element.name ? element.name : ""}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Demo>
            </div>
            <div className="videoLinks">
              <div className="videoTitle">
                <TextField
                  id="filled-multiline-static"
                  label="Video title"
                  sx={{ width: "30ch" }}
                  value=""
                  helperText="Plese enter a video title"
                  onChange={handleVideoNameChanges}
                />
              </div>
              <div className="videoLink">
                <TextField
                  id="filled-multiline-static"
                  label="Video link"
                  sx={{ width: "30ch" }}
                  value=""
                  helperText="Video link goes here"
                  onChange={handleVideoLinkChanges}
                />
              </div>
              <div className="addVideoButton">
                <Button variant="contained" onClick={addVideo}>
                  Add video
                </Button>
              </div>
            </div>
          </div>
          <div className="uploadButton">
            <Button
              className="upload"
              variant="outlined"
              endIcon={<SendIcon />}
              onClick={PostHobby}
            >
              Upload Course
            </Button>
            <Button
              className="cancel"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PostHobby;
