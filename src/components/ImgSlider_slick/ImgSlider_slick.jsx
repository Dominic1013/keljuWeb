import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImgSlider_slick.module.scss";

const ImgSlider_slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.prevArrow}`}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <img src="/homePage/imgSlider/slider1.jpg" alt="slider1 " />

        <img src="/homePage/imgSlider/slider2.jpg" alt="slider2" />

        <img src="/homePage/imgSlider/slider3.jpg" alt="slider3" />

        <img src="/homePage/imgSlider/slider4.jpg" alt="slider4" />

        {/* // ...更多幻燈片 */}
      </Slider>
    </div>
  );
};

export default ImgSlider_slick;
