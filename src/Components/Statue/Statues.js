import React from "react";
import "../Styles/Statues.css";
import "../Styles/Mobile.css";
import Avatar1 from "../Statue/images/Avatar1.svg";
import Avatar2 from "../Statue/images/Avatar2.svg";
import Avatar3 from "../Statue/images/Avatar3.svg";
import Avatar4 from "../Statue/images/Avatar4.svg";
import Avatar5 from "../Statue/images/Avatar5.svg";
import Avatar6 from "../Statue/images/Avatar6.svg";
import Avatar7 from "../Statue/images/Avatar7.svg";
import Avatar8 from "../Statue/images/Avatar8.svg";
import Avatar9 from "../Statue/images/Avatar9.svg";
import Avatar10 from "../Statue/images/Avatar10.svg";
import Avatar11 from "../Statue/images/Avatar11.svg";
import Avatar12 from "../Statue/images/Avatar12.svg";
import Mapped from "./Mapped";
import Slider from "react-slick";

const Statues = () => {
  const Statues = [
    {
      image: Avatar1,
    },
    {
      image: Avatar2,
    },
    {
      image: Avatar3,
    },
    {
      image: Avatar4,
    },
    {
      image: Avatar5,
    },
    {
      image: Avatar6,
    },
    {
      image: Avatar7,
    },
    {
      image: Avatar8,
    },
    {
      image: Avatar9,
    },
    {
      image: Avatar10,
    },
    {
      image: Avatar11,
    },
    {
      image: Avatar12,
    },
  ];
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
    className: "center",
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesPerRow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear",
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
          // slidesPerRow: 2,
          // initialSlide: 1,
          // rows: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="statueContainer">
      <div className="Greek">
        <div className="flexText">
          <h1>GREEK STATUE AVATARS </h1>
          <p>+ 500 GREEK STYLE USER AVATARS </p>
          <div>
            <img src="./DownloadButton.svg" alt="img" />{" "}
          </div>
        </div>
        <div className="Vertical">
          <Slider {...settings}>
            {Statues.map((Statue, index) => {
              return (
                <div key={index}>
                  <Mapped Statue={Statue} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Statues;
