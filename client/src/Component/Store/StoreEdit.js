import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ImageUpload from "../Post/ImageUpload.js";
import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from "../../Style/UploadCSS.js";
import axios from "axios";

const StoreEdit = () => {
  const Continents = [
    { key: 1, value: "사료" },
    { key: 2, value: "간식" },
    { key: 3, value: "장난감" },
    { key: 4, value: "옷" },
  ];

  let params = useParams();
  let navigate = useNavigate();

  const [StoreInfo, setStoreInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Image, setImage] = useState("");

  useEffect(() => {
    let body = {
      storeNum: params.storeNum,
    };
    axios
      .post("/api/store/detail", body)
      .then((response) => {
        if (response.data.success) {
          setStoreInfo(response.data.store);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const continentChangeHandler = (e) => {
    setContinent(e.currentTarget.value);
  };

  useEffect(() => {
    setTitle(StoreInfo.title);
    setContent(StoreInfo.content);
    setPrice(StoreInfo.price);
    setContinent(StoreInfo.continent);
    setImage(StoreInfo.image);
  }, [StoreInfo]);

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
      storeNum: params.storeNum,
      image: Image,
    };

    axios
      .post("/api/store/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/storePost/${params.storeNum}`);
        } else {
          alert("글 수정에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <UploadDiv>
      {Flag && (
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
              className="cancel"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              CANCEL
            </button>
            <button
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              SUBMIT
            </button>
          </UploadButtonDiv>
        </UploadForm>
      )}
    </UploadDiv>
  );
};

export default StoreEdit;
