import React, { useState, useEffect } from "react";
import StoreDetail from "./StoreDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spinner } from "react-bootstrap";
import { SpinnerDiv } from "../../Style/PostDetailCSS.js";

function StoreArea() {
  const [StoreInfo, setStoreInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  let params = useParams();

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

  return (
    <div>
      {Flag ? (
        <>
          <StoreDetail StoreInfo={StoreInfo} />
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </div>
  );
}

export default StoreArea;
