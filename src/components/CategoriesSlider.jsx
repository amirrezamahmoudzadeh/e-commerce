import React, { Component } from "react";
import Slider from "react-slick";

import "./slider.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


class CategoriesSlider extends Component {
  render() {
    const settings = {
      className: "cat-slider",
      swipeToSlide: true,
      infinite: true,
      speed: 1100,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      pauseOnHover: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="categories">
        <Typography
          variant="h4"
          color="initial"
          sx={{ my: 3.5, textAlign: "center" }}
        >
          دسته بندی ها
        </Typography>
        <Slider {...settings}>
          {this.props.categories.map((slide) => {
            return (
              <Link
                to={`/category/${slide.id}`}
                onClick={()=>this.props.selectCategory(slide.id)}
                key={slide.id}
                title={slide.name}
              >
                <div>
                  <img src={slide.assets[0].url} alt={slide.name} />
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ textAlign: "center" , my:3 }}
                  >
                    {slide.name}
                  </Typography>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CategoriesSlider;
