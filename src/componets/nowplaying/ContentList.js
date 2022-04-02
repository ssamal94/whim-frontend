import Typography from "@mui/material/Typography";
import { useState } from "react";

const ContentList = () => {
  const [content, setContent] = useState([
    "something broke",
    "unable to fetch data",
    "please check database connection",
  ]);
  return (
    <div className="contentListComponentWrapper">
      <Typography gutterBottom variant="h6" align="left" component="div">
        Content:
      </Typography>
      {[...content].map((element, index) => {
        return (
          <div className="contentTitles" key={index}>
            <Typography variant="body2" align="left">
              <i className="fa fa-play"></i> {content[index]}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default ContentList;
