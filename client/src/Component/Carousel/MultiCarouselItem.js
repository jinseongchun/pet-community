import React from "react";

import moment from "moment";
import "moment/locale/ko";

const MultiCarouselItem = ({ post }) => {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  return (
    <div className="custom-multicarousel-item">
      <div className="product-img">
        <div className="img">
          <a href={`/post/${post.postNum}`}>
            <img src={post.image} alt="pro" />
          </a>
        </div>
      </div>
      <div className="product-inform">
        <div className="category">{post.author.displayName}</div>
        <div className="title">{post.title}</div>
        <div className="product-user">
          {SetTime(post.createdAt, post.updatedAt)}
        </div>
      </div>
    </div>
  );
};

export default MultiCarouselItem;
