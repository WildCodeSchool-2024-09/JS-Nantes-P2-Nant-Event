import { useEffect, useState } from "react";

import "../styles/Carousel.css";

type CarouselProps = {
  imgSrc: { imgSrc: string; title: string; date?: string; place?: string }[];
};

function Carousel({ imgSrc }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  /*const [autoPlay, setAutoPlay] = useState(null);*/

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideRight = () => {
    setCurrent((prev) => (prev + 1) % imgSrc.length);
  };
  const slideLeft = () => {
    setCurrent((prev) => (prev - 1 + imgSrc.length) % imgSrc.length);
  };

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {imgSrc.map((item, index) => (
          <div
            key={item.imgSrc}
            className={
              index === current
                ? "carousel-card carousel-card-active"
                : "carousel-card"
            }
          >
            <img className="card-image" src={item.imgSrc} alt={item.title} />
            <div className="card-overlay">
              <p className="card_date">{item.date}</p>
              <p className="card-title">{item.title}</p>
              <p className="card-time">{item.place}</p>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="carousel-arrow-left"
          onClick={slideLeft}
        >
          {" "}
          &lsaquo;
        </button>
        <button
          type="button"
          className="carousel-arrow-right"
          onClick={slideRight}
        >
          {" "}
          &rsaquo;
        </button>
        <div className="carousel-pagination">
          {imgSrc.map((_, index) => {
            return (
              <button
                type="button"
                key={_.imgSrc}
                className={
                  index === current
                    ? "pagination-dot pagination-dot-active"
                    : "pagination-dot"
                }
                onClick={() => setCurrent(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
