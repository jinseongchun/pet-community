import React, { useState, useEffect } from "react";
import { CartForm, CartDiv } from "../Style/MyCartCSS.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyCart = () => {
  const user = useSelector((state) => state.user);
  const [StoreList, setStoreList] = useState([]);
  const [IsClick, setIsClick] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
    console.log("user", user.uid);
    if (user.isLoading && !user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, [user]);

  const getCartList = () => {
    let body = {
      uid: user.uid,
    };

    console.log("body", body.uid);

    axios
      .post("/api/store/cartlist", body)
      .then((response) => {
        if (response.data.success) {
          setStoreList([...response.data.storeInfo]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeItem = (productId) => {
    let body = {
      uid: user.uid,
      pid: productId,
    };
    axios
      .post("/api/store/removeFromCart", body)
      .then((response) => {
        if (response.data.success) {
          setStoreList([...response.data.storeInfo]);
          setIsClick(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartForm>
      <CartDiv>
        <table>
          <thead>
            <tr>
              <th>이 미 지</th>
              <th>제 품 명</th>
              <th>가 격</th>
              <th>삭 제</th>
            </tr>
          </thead>
          {IsClick ? (
            <button
              onClick={() => {
                setIsClick(false);
                getCartList();
              }}
            >
              제출
            </button>
          ) : (
            <tbody>
              {StoreList.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      style={{ width: "70px" }}
                      alt="product"
                      src={product.image}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} 원</td>
                  <td>
                    <button onClick={() => removeItem(product._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </CartDiv>
    </CartForm>
  );
};

export default MyCart;
