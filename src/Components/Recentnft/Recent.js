import React from "react";
import "../Styles/Recent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recent = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    CenterMode: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 3,
          initialSlide: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="recentHeader">
        <p>
          <span> RECENT NFT</span> |{" "}
        </p>
        <button>VIEW MORE </button>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src="./past1.svg" alt="img" />{" "}
          </div>
          <div>
            <img src="./past2.svg" alt="img" />
          </div>
          <div>
            <img src="./past3.svg" alt="img" />
          </div>
          <div>
            <img src="./past4.svg" alt="img" />
          </div>
          <div>
            <img src="./past5.svg" alt="img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
