import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";
import ProductCard from "../componets/pdp/ProductCard";
import PreRequisite from "../componets/pdp/PreRequisite";
import AuthorCard from "../componets/pdp/AuthorCard";
import AboutCourse from "../componets/pdp/AboutCourse";

const ProductDescription = () => {
  return (
    <div className="pdpWrapper">
      <div className="topNavWrapper">
        <TopNav />
      </div>
      <div className="centerArea">
        <div className="leftArea">
          <div className="productCardWraper">
            <ProductCard />
          </div>
        </div>
        <div className="rightArea">
          <div className="aboutCourseWrapper">
            <AboutCourse />
          </div>
          <div className="authorAndPreReqWrapper">
            <div className="authorCard">
              <AuthorCard />
            </div>
            <div className="preRequisite">
              <PreRequisite />
            </div>
          </div>
        </div>
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDescription;
