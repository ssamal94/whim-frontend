import Typography from "@mui/material/Typography";
import { useState } from "react";

const AboutCourse = () => {
  const [heading, setHeading] = useState("About this course:");
  const [content, setContent] = useState([
    "Learn guitar chords that will allow you to play millions of songs",
    "Lear acoustic gitar technique",
  ]);

  return (
    <div className="aboutCourseWrapper">
      <Typography gutterBottom variant="h6" align="left">
        {heading}
      </Typography>
      {[...content].map((element, index) => {
        return (
          <>
            <Typography variant="body2" align="left" key={index}>
              <i className="fa fa-circle"></i> {content[index]}
            </Typography>
          </>
        );
      })}
    </div>
  );
};

export default AboutCourse;
