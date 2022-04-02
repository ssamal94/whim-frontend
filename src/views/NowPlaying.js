import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";
import ProductCard from "../componets/nowplaying/ProductCard";
import ContentList from "../componets/nowplaying/ContentList";
import MediaPlayer from "../componets/nowplaying/MediaPlayer";

const NowPlaying = () => {
  return (
    <>
      <TopNav />
      <div className="nowPlayigWrapper">
        <div className="leftPanWrapper">
          <div className="aboutCardWrapper">
            <ProductCard />
          </div>
          <div className="contentCardWrapper">
            <ContentList />
          </div>
        </div>
        <div className="rightPanWrapper">
          <MediaPlayer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NowPlaying;
