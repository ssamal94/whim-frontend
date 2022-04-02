import Typography from "@mui/material/Typography";
import { useState } from "react";

const PreRequisite = () => {
  const [heading, setHeading] = useState("Pre-requisite:");
  const [content, setContent] = useState([
    "An acoustic Guitar",
    "Passion to learn :)",
  ]);
  return (
    <div className="preReqComponentWrapper">
      <Typography gutterBottom variant="h6" align="left" component="div">
        {heading}
      </Typography>
      {[...content].map((element, index) => {
        return (
          <>
            <Typography variant="body2" align="left">
              <i className="fa fa-circle"></i> {content[index]}
            </Typography>
          </>
        );
      })}
    </div>
  );
};

export default PreRequisite;
