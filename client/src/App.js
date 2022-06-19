import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice.js";
import firebase from "./firebase.js";

import Header from "./Component/Header";
import MainPage from "./pages/MainPage";
import Footer from "./Component/Footer";
import "./App.css";

import CommunityPage from "./pages/CommunityPage";
import MyCart from "./pages/MyCart.js";
import StorePage from "./pages/StorePage";

import Upload from "./Component/Post/Upload";
import PostArea from "./Component/Post/PostArea";
import Edit from "./Component/Post/Edit";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import MyPage from "./Component/User/MyPage";

import StoreUpload from "./Component/Store/StoreUpload.js";
import StoreArea from "./Component/Store/StoreArea.js";
import StoreEdit from "./Component/Store/StoreEdit.js";

import GalleryPage from "./pages/GalleryPage.js";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
      //
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/mycart" element={<MyCart />} />
        {/*Post, Reple*/}
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />

        <Route path="/storeUpload" element={<StoreUpload />} />
        <Route path="/storePost/:storeNum" element={<StoreArea />} />
        <Route path="/storeEdit/:storeNum" element={<StoreEdit />} />

        {/*User*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
