import { useState } from "react";
import "../assets/styles/scss/style.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Save from "@mui/icons-material/Save";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthorDetails = () => {
  //Route variable
  const navigate = useNavigate();
  //State variable to store image
  const [profilePic, setProfilePic] = useState("");
  //Button text
  const [buttonText, setButtonText] = useState("Upload an image");
  //Is image icon required?
  const [isRequired, setIsRequired] = useState("flex");
  //Intro variable
  const [intro, setIntro] = useState("");
  //Description variable
  const [description, setDescription] = useState("");

  //Handle image upload
  const handleImageChanges = (event) => {
    let files;
    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else if (event.target) {
      files = event.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
      setIsRequired("none");
      setButtonText("Change image");
    };
    reader.readAsDataURL(files[0]);
  };
  //Handle intro change
  const handleIntroChange = (event) => {
    setIntro(event.target.value);
  };
  //Handle description change
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const saveDetails = () => {
    if (intro === "" || description === "" || profilePic === "") {
      alert("All fields are mandatory");
    } else {
      const email = localStorage.getItem("email");
      axios
        .post("http://localhost:9032/saveAuthor", {
          profilePic,
          intro,
          description,
          email,
        })
        .then((res) => {
          if (res.data.status === "ok") {
            navigate("/");
          } else {
            alert(res.data.message);
          }
        });
    }
  };

  return (
    <>
      <div className="authorDetailsWrapper">
        <div className="topPan">
          <div className="authorName">{localStorage.getItem("name")}</div>
        </div>
        <div className="bottomPan">
          <div className="leftPan">
            <div className="imageUpload">
              <div id="uploadArea" className="upload-area">
                <div className="upload-area__header">
                  <h3 className="upload-area__title">Profile picture</h3>
                  <p className="upload-area__paragraph">
                    Tip: Choose something professional to attract more users.
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
                    src={profilePic}
                    alt="Please upload something to preview"
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
                <label htmlFor="fileInput" style={{ marginTop: "2rem" }}>
                  <Button
                    variant="outlined"
                    component="span"
                    className="imageButton"
                  >
                    {buttonText}
                  </Button>
                </label>
              </div>
            </div>
          </div>
          <div className="rightPan">
            <div className="textfields">
              <div className="intro">
                <TextField
                  label="Profile intro"
                  helperText="Ex: Diploma in software development and 5 years of experience in the field."
                  sx={{ width: "30rem" }}
                  value={intro}
                  required
                  onChange={handleIntroChange}
                />
              </div>
              <div className="description">
                <TextField
                  label="Description"
                  helperText="Please provide a brief details about the profile intro you mention above."
                  multiline
                  maxRows={10}
                  minRows={5}
                  sx={{ width: "30rem" }}
                  value={description}
                  required
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className="uploadButton">
              <Button
                variant="outlined"
                startIcon={<Save />}
                onClick={saveDetails}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorDetails;
