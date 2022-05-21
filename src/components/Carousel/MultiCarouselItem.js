const MultiCarouselItem = ({ slide }) => {
  return (
    <div className="multicarousel-item">
      <div className="product-img">
        <div className="img">
          <a href="#">
            <img src={slide} alt="pro" />
          </a>
        </div>
      </div>
      <div className="product-inform">
        <div className="category">
          아아아아아아아아아아아아아아아아아아아아아아아아아아아아
        </div>
        <div className="title">아아아아아아아</div>
        <div className="product-user">아아아아아아아</div>
      </div>
    </div>
  );
};

export default MultiCarouselItem;
