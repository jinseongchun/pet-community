const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="head-container">
          <div className="head-brand">
            <a href="/">
              <img src={require("../images/logo.png")} alt="profile" />
            </a>
            <a href="/community">커뮤니티</a>
            <a href="/">스 토 어</a>
          </div>
          <div className="head-blog">
            <a href="/">로 그 인</a>
            <a href="/">회 원 가 입</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
