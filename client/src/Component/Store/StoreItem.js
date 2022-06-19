import React from "react";

const StoreItem = ({ store }) => {
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
    <div className="custom-multicarousel-item">
      <div className="product-img">
        <div className="img">
          <a href={`/storePost/${store.storeNum}`}>
            <img src={store.image} alt="pro" />
          </a>
        </div>
      </div>
      <div className="product-inform">
        <div className="category">{getContinent(store.continent)}</div>
        <div className="title">{store.title}</div>
        <div className="product-user">{store.author.displayName}</div>
      </div>
    </div>
  );
};

export default StoreItem;
