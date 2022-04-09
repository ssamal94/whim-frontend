import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const AboutCourse = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(localStorage.getItem("aboutCorse").split("."));
  }, []);

  return (
    <div className="aboutCourseWrapper">
      <Typography gutterBottom variant="h6" align="left">
        About this course:
      </Typography>
      {[...content].map((element, index) => {
        let icon = "";
        if (content[index].trim()) {
          icon = <i className="fa fa-circle"></i>;
        }
        return (
          <Typography
            variant="body2"
            align="left"
            key={index}
            style={{ fontSize: "1rem" }}
          >
            {icon} {content[index]}
          </Typography>
        );
      })}
    </div>
  );
};

export default AboutCourse;
