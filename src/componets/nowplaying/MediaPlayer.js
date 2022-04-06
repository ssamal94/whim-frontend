const MediaPlayer = () => {
  return (
    <div className="mediaPlayerWrapper">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/kSux13Yy4pM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default MediaPlayer;
