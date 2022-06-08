const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="custom-carousel-indicators">
      {slides.map((_, index) => (
        <button
          className={`custom-carousel-indicator-item${
            currentIndex === index ? " active" : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
