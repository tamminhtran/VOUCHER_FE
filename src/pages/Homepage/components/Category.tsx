/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import "./Category.css";
import { Wrapper } from "components/Wrapper/Wrapper";
import Slider from "react-slick";
import Cate1 from "assets/homepage/cate1.png";
import Cate2 from "assets/homepage/cate2.png";
import Cate3 from "assets/homepage/cate3.png";
import Cate4 from "assets/homepage/cate4.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export interface IDivContainerProps {}

export const Category = ({ ...props }: IDivContainerProps): JSX.Element => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Wrapper>
      <div className="category">
        <div className="title">Danh mục</div>
        <div className="prev">
          <KeyboardArrowLeftIcon />
        </div>
        <div className="next">
          <KeyboardArrowRightIcon />
        </div>
        <Slider {...settings}>
          <div className="card">
            <img src={Cate1} alt="" />
            <div className="bg1"></div>
          </div>{" "}
          <div className="card">
            <img src={Cate2} alt="" />
            <div className="bg2"></div>
          </div>{" "}
          <div className="card">
            <img src={Cate3} alt="" />
            <div className="bg3"></div>
          </div>{" "}
          <div className="card">
            <img src={Cate4} alt="" />
            <div className="bg4"></div>
          </div>
          <div className="card">
            <img src={Cate4} alt="" />
            <div className="bg4"></div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};
