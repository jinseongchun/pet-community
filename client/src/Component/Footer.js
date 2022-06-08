const Footer = () => {
  return (
    <footer>
      <div class="footer-inner">
        <div class="footer-content">
          <div class="footer-logo">
            <img src={require("../images/logo-footer.png")} alt="profile" />
          </div>
          <div class="copyright">
            <div class="policy-sns">
              <div class="policy">
                <span>
                  <a href="#none">개인정보취급방침</a> <em>|</em>
                  <a href="#none">이용약관</a>
                </span>
                <span>Copyright WITH PET. All right reserved.</span>
              </div>
            </div>
            <div class="address">
              <span>
                (주)WITH PET | 대표자 : CJS | 사업자번호 : 123-5-67890 사업자
                정보 확인 | 개인정보보호책임자 : CJS
              </span>
              <span>
                주소 : 대구광역시 대곡동 이미지 123-56 WITH PET 빌딩 ㅣ 이메일:
                zlzh818@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
