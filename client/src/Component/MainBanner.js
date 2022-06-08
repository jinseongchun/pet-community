import "../css/MainBanner.css";
const MainBanner = () => {
  return (
    <>
      <div className="Banner">
        <div className="Banner-Img">
          <img src={require("../images/MainBanner.jpg")} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
