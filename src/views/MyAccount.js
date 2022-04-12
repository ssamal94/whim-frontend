import "../assets/styles/scss/style.scss";
const MyAccount = () => {
  return (
    <div className="MyAccountWrapper">
      <div className="topPan">
        <div className="profilePic">image</div>
        <div className="About">About</div>
      </div>
      <div className="bottomPan">
        <div className="Posts">list of posts</div>
      </div>
    </div>
  );
};

export default MyAccount;
