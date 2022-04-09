import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const PreRequisite = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(localStorage.getItem("preRequisite").split("."));
  }, []);
  return (
    <div className="preReqComponentWrapper">
      <Typography gutterBottom variant="h6" align="left" component="div">
        Pre-requisite:
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

export default PreRequisite;
