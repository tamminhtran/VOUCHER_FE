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
import { getAllCategory } from "queries/category";
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
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategory().then((rs: any) => {
      if (rs) {
        setCategories(rs.data);
      }
    });
  }, []);

  return (
    <Wrapper>
      <div className="category">
        <div className="title">Danh mục</div>
        <div className="prev">
          <KeyboardArrowLeftIcon className="ic" />
        </div>
        <div className="next">
          <KeyboardArrowRightIcon className="ic" />
        </div>
        <Slider {...settings}>
          {categories
            ? categories.map((cat: any, key) => {
                return (
                  <div className="card" key={key}>
                    <div className="bg">
                      <img src={cat.bannerUrl} alt="" />
                    </div>
                    <span>{cat.name}</span>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </Wrapper>
  );
};
