import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../asset/images/women_puffer_jackets_slider.jpg";
import img2 from "../asset/images/Checkered_shirt_slider.jpg";
import img3 from "../asset/images/boot_slider.jpg";

import "./slider.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      className: "main",
      swipeToSlide: true,
      fade: true,
      autoplay:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
    return (
      <div className="top">
        <Slider {...settings}>
          <div>
            <img src={img1} alt={img1} />
          </div>
          <div>
            <img src={img2} alt={img2} />
          </div>
          <div>
            <img src={img3} alt={img3} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
