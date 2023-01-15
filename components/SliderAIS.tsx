import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const SliderData = [
    {
      image: "/ais-1.JPG",
    },
    {
      image: "/ais-2.JPG",
    },
    {
      image: "/ais-3.JPG",
    },
    {
      image: "/ais-4.JPG",
    },
    {
      image: "/ais-5.JPG",
    },
    {
      image: "/ais-6.JPG",
    },
    {
      image: "/ais-7.JPG",
    },
    {
      image: "/ais-8.JPG",
    },
  ];

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FontAwesomeIcon
        className="slider--arrow"
        icon={faChevronLeft}
        onClick={prevSlide}
      />
      <div className="loading gap" />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide --active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} alt="Photo" className="image" />
              </>
            )}
          </div>
        );
      })}
      <FontAwesomeIcon
        className="slider--arrow"
        icon={faChevronRight}
        onClick={nextSlide}
      />
    </div>
  );
};

export default ImageSlider;
