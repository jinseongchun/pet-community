const Feature = () => {
  return (
    <section className="feature" id="feature2">
      <div className="feature-inner">
        <div className="headline-share">
          <h1>WITH PET Feature</h1>
          <p>반려인들 위한 커뮤니티, 스토어 서비스를 제공합니다.</p>
        </div>
        <div className="feature-content">
          <div className="feature-mockup ltr wow">
            <img src={require("../images/community.jpg")} alt="profile" />
          </div>
          <div className="feature-about rtl wow">
            <img src={require("../images/one.png")} alt="profile" />
            <h2>반려인들 간에 다양한 정보 상호 교환</h2>
            <br />
            <p>
              해당 사이트에 가입한 회원들 간에 다양한 정보를 제공하고 피드백을
              받으면 소통하는 사람들 간에 유대감 증진합니다.
            </p>
          </div>
        </div>
        <div className="feature-content flex-order">
          <div className="feature-about ltr wow">
            <img src={require("../images/two.png")} alt="profile" />
            <h2>반려 동물에 필요한 제품을 파는 스토어</h2>
            <br />
            <p>
              직접 밖에 나가서 구매할 필요 없이 필요한 제품을 온라인을 통해
              공간에 제약 받지 않고 구매 가능합니다.
            </p>
          </div>
          <div className="feature-mockup-rtl-wow">
            <img src={require("../images/store.jpg")} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
