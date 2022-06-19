import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageUpload from "../Post/ImageUpload.js";
import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from "../../Style/UploadCSS.js";
import axios from "axios";

const StoreUpload = () => {
  const Continents = [
    { key: 1, value: "사료" },
    { key: 2, value: "간식" },
    { key: 3, value: "장난감" },
    { key: 4, value: "옷" },
  ];

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Image, setImage] = useState("");

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, [user]);

  const continentChangeHandler = (e) => {
    setContinent(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (Title === "" || Content === "" || Price === 0 || Image === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      content: Content,
      price: Price,
      continent: Continent,
      image: Image,
      uid: user.uid,
    };

    axios
      .post("/api/store/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="label">제품 이미지</label>
        <ImageUpload setImage={setImage} types="store" />
        <label htmlFor="label">제품명</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor="price">값</label>
        <input
          id="price"
          value={Price}
          onChange={(e) => {
            setPrice(e.currentTarget.value);
          }}
        />
        <label>종류</label>
        <select onChange={continentChangeHandler} value={Continent}>
          {Continents.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            SUBMIT
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default StoreUpload;
