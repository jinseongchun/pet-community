import React, { useState, useEffect } from "react";
import axios from "axios";
import { FooterDiv } from "../Style/MainPageCSS.js";
import StoreItem from "../Component/Store/StoreItem.js";
import "../css/Carousel.css";
import "../css/Gallery.css";
import { continent } from "../Component/Store/StoreData.js";
import CheckBox from "../Component/Store/CheckBox.js";

const StorePage = () => {
  const [StoreList, setStoreList] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(6);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    continent: [],
  });

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };

    getStoreList(body);
  }, []);

  const getStoreList = (body) => {
    axios
      .post("/api/store/list", body)
      .then((response) => {
        if (response.data.success) {
          if (body.loadMore) {
            setStoreList([...StoreList, ...response.data.storeInfo]);
          } else {
            setStoreList(response.data.storeInfo);
          }
          setPostSize(response.data.postSize);
        } else {
          alert(" 상품들을 가져오는데 실패 했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
    };

    getStoreList(body);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getStoreList(body);
    setSkip(0);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  return (
    <div className="Gallery-container">
      <CheckBox
        list={continent}
        handleFilters={(filters) => handleFilters(filters, "continent")}
      />
      <div className="item">
        {StoreList.map((post) => (
          <StoreItem store={post} />
        ))}
      </div>
      {PostSize >= Limit && (
        <FooterDiv>
          <button
            style={{ marginBottom: "10vh" }}
            onClick={() => loadMoreHanlder()}
          >
            더 불러오기
          </button>
        </FooterDiv>
      )}
    </div>
  );
};

export default StorePage;
