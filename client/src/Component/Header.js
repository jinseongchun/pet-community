import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <header>
      <div className="inner">
        <div className="head-container">
          <div className="head-brand">
            <a href="/">
              <img src={require("../images/logo.png")} alt="profile" />
            </a>
            <a href="/community">커뮤니티</a>
            <a href="/store">스 토 어</a>
          </div>
          <div className="head-blog">
            {user.accessToken ? (
              <>
                <a href={`/mycart`}>장 바 구 니</a>
                <a href="/" onClick={() => LogoutHandler()}>
                  로 그 아 웃
                </a>
                <a href="/MyPage">마 이 페 이 지</a>
              </>
            ) : (
              <>
                <a href="/login">로 그 인</a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
