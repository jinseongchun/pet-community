import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  StoreDiv,
  ProductDiv,
  StoreImage,
  StoreContent,
  BtnDiv,
} from "../../Style/StoreDetailCSS";

const StoreDetail = (props) => {
  let params = useParams();

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, [user]);

  const addToCart = async (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      sid: props.StoreInfo._id,
    };

    await axios
      .post("/api/store/addToCart", body)
      .then((response) => {
        if (response.data.success) {
          if (response.data.duplicate) {
            alert("이미 장바구니에 있습니다.");
          } else {
            alert("장바구니에 등록했습니다.");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        storeNum: params.storeNum,
      };
      axios
        .post("/api/store/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("게시글 삭제에 실패하였습니다.");
        });
    }
  };

  const getContinent = (props) => {
    switch (props) {
      case 1:
        return <span>사 료</span>;
        break;
      case 2:
        return <span>간 식</span>;
        break;
      case 3:
        return <span>장 난 감</span>;
        break;
      case 4:
        return <span>옷</span>;
        break;
    }
  };

  return (
    <StoreDiv>
      <ProductDiv>
        <StoreImage>
          <img
            src={props.StoreInfo.image}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </StoreImage>
        <StoreContent>
          <div>
            <h2>제품명: {props.StoreInfo.title}</h2>
            <p>내용: {props.StoreInfo.content}</p>
            <p>가격: {props.StoreInfo.price}원</p>
            <p>카테고리: {getContinent(props.StoreInfo.continent)}</p>
          </div>
        </StoreContent>
      </ProductDiv>
      {user.uid === props.StoreInfo.author.uid ? (
        <BtnDiv>
          <Link to={`/storeEdit/${props.StoreInfo.storeNum}`}>
            <button className="edit">수정</button>
          </Link>

          <button className="delete" onClick={() => DeleteHandler()}>
            삭제
          </button>
        </BtnDiv>
      ) : (
        <BtnDiv>
          <button className="cart" onClick={(e) => addToCart(e)}>
            장바구니 담기
          </button>
        </BtnDiv>
      )}
    </StoreDiv>
  );
};

export default StoreDetail;
