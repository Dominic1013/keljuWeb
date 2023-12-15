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
        <img src="/homePage/imgSlider/change1.jpg" alt="change1 " />

        <img src="/homePage/imgSlider/change22.jpg" alt="change2" />

        <img src="/homePage/imgSlider/change11.jpg" alt="change3" />

        <img src="/homePage/imgSlider/change33.jpg" alt="change4" />

        {/* // ...更多幻燈片 */}
      </Slider>
    </div>
  );
};

export default ImgSlider_slick;
