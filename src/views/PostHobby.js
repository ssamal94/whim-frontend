import * as React from "react";
import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";
import "../assets/styles/scss/style.scss";
import ImageUpload from "../componets/posthobby/ImageUpload";
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

const PostHobby = () => {
  //CATEGORIES
  const categories = ["music", "art", "tech"];

  //Hook variables
  const {
    authorId,
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

  //A div to display all added videos
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  //
  const [dense, setDense] = React.useState(false);
  const [videoNames, setSecondary] = React.useState(["video 1"]);

  //This fuction generates the list to display on added videos list
  function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <>
      <div className="postHobbyWrapper">
        <TopNav />
        <div className="centerAreaWrapper">
          <div className="leftPan">
            <div className="imageUpload">
              <ImageUpload />
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
                <List dense={dense}>
                  {generate(
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <OndemandVideoIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={videoNames ? videoNames[0] : ""} />
                    </ListItem>
                  )}
                </List>
              </Demo>
            </div>
            <div className="videoLinks">
              <div className="videoTitle">
                <TextField
                  id="filled-multiline-static"
                  label="Video title"
                  sx={{ width: "30ch" }}
                  value={""}
                  helperText="Plese enter a video title"
                  // onChange={""}
                />
              </div>
              <div className="videoLink">
                <TextField
                  id="filled-multiline-static"
                  label="Video link"
                  sx={{ width: "30ch" }}
                  value={""}
                  helperText="Video link goes here"
                  //onChange={""}
                />
              </div>
              <div className="addVideoButton">
                <Button variant="contained">Add video</Button>
              </div>
            </div>
          </div>
          <div className="uploadButton">
            <Button
              className="upload"
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Upload Course
            </Button>
            <Button
              className="cancel"
              variant="outlined"
              startIcon={<DeleteIcon />}
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
