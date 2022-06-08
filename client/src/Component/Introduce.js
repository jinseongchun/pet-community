const Introduce = () => {
  return (
    <section className="ceo-access" id="feature1">
      <div className="ceo-inner">
        <div className="headline-share">
          <h1>반려인 커뮤니티</h1>
          <p>반려인들 간에 소통 발전을 위한 다양한 서비스를 제공합니다.</p>
        </div>
        <div className="ceo-content">
          <div className="ceo-left ltr wow">
            <img src={require("../images/thing.png")} alt="profile" />
            <h3>애완 동물의, 애완 동물에 의한, 애완 동물을 위한 커뮤니티</h3>
            <br />
            <p>
              여러분의 커뮤니케이션 공간을 더욱 확장시키기 위해 온 힘을 다할
              것이며
              <br />
              <h2 className="product-title">WITH PET</h2>는 이름답게 항상
              동반자가 되겠습니다.
            </p>
          </div>
          <div className="ceo-right rtl wow">
            <div className="ceo-msg">
              <h3>
                다양한 사람과 소통을 <br />
                해보세요!
              </h3>
              <h2 className="product-title">WITH PET</h2>는 국내에 거주하는
              반려인을 위한 다양한 서비스를 제공하고 있습니다.
              <p></p>
            </div>
            <div className="ceo-photo">
              <img src={require("../images/me.png")} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
