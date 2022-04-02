import { CardMedia } from "@mui/material";

const MediaPlayer = () => {
  return (
    <div className="mediaPlayerWrapper">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/TmRgK-pXH9c?start=24"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default MediaPlayer;
