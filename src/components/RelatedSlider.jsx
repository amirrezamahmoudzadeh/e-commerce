import React, { Component } from "react";
import Slider from "react-slick";

import "./slider.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

class RelatedSlider extends Component {
  render() {
    const settings = {
      className: "related-slider",
      swipeToSlide: true,
      infinite: true,
      speed: 1100,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      pauseOnHover: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
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
      <div className="relateds">
        <Typography
          variant="h3"
          color="initial"
          sx={{ my: 3.5, textAlign: "center" }}
        >
          محصولات مرتبط
        </Typography>
        <Slider {...settings}>
          {this.props.related.map((item) => {
            return (
              <Link
                component={Link}
                to={`/products/${item.id}`}
                onClick={() => this.props.selectProduct(item.id)}
                title={item.name}
                key={item.id}
              >
                <div>
                  <img src={item.image.url} alt={item.name} />
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ textAlign: "center", my: 3 }}
                  >
                    {item.name}
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

export default RelatedSlider;
