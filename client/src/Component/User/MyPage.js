import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../../firebase.js";
import { MyPageDiv } from "../../Style/UserCSS.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [CurrentImage, setCurrentImage] = useState("");
  const [Name, setName] = useState("");
  const [NameCheck, setNameCheck] = useState(false);
  const [NameInfo, setNameInfo] = useState("");
  const [Flag, setFlag] = useState(false);

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate("/login");
    } else {
      setCurrentImage(user.photoURL);
    }
  }, [user]);

  const ImageUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/user/profile/img", formData).then((response) => {
      setCurrentImage(response.data.filePath);
    });
  };

  const SaveProfile = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!Name) {
      return alert("모든 값을 채워주세요!");
    }
    if (!NameCheck) {
      return alert("닉네임 중복검사를 진행해 주세요.");
    }
    try {
      await firebase.auth().currentUser.updateProfile({
        displayName: Name,
        photoURL: CurrentImage,
      });
    } catch (error) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    let body = {
      photoURL: CurrentImage,
      uid: user.uid,
      displayName: Name,
    };
    axios.post("/api/user/profile/update", body).then((response) => {
      setFlag(false);
      if (response.data.success) {
        alert("프로필 저장에 성공하였습니다.");
        window.location.reload();
      } else {
        return alert("프로필 저장에 실패하였습니다.");
      }
    });
  };

  const NameCheckFunc = async (e) => {
    e.preventDefault();
    if (!Name) {
      return alert("닉네임을 입력해주세요");
    }

    let body = {
      displayName: Name,
    };

    await axios.post("/api/user/namecheck", body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo("사용가능한 닉네임입니다.");
        } else {
          setNameInfo("사용불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <MyPageDiv style={{ width: "100vw", height: "100vh" }}>
      <form
        style={{
          width: "50%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => ImageUpload(e)}
          />
          <Avatar
            size="100"
            round={true}
            src={CurrentImage}
            style={{ border: "1px solid #c6c6c6", cursor: "pointer" }}
          />
        </label>
        <span>닉네임</span>
        <input
          type="name"
          value={Name}
          onChange={(e) => setName(e.currentTarget.value)}
          disabled={NameCheck}
        />
        {NameInfo}
        <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>
        <button disabled={Flag} onClick={(e) => SaveProfile(e)}>
          저장
        </button>
      </form>
    </MyPageDiv>
  );
}

export default MyPage;
