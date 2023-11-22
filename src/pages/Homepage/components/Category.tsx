/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import "./Category.css";
import { Wrapper } from "components/Wrapper/Wrapper";
import Slider from "react-slick";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { getAllCategory } from "queries/category";
import { toast } from "react-toastify";
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
    getAllCategory()
      .then((rs: any) => {
        if (rs) {
          setCategories(rs.data);
        }
      })
      .catch((err: any) => toast.error(err.message));
  }, []);
  console.log("categories", categories);

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
                let id = cat.bannerUrl.slice(32, cat.bannerUrl.length - 18);
                return (
                  <div className="card-cate" key={key}>
                    <div className="bg">
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${id}`}
                        alt=""
                      />
                    </div>
                    <span className="txt">{cat.name}</span>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </Wrapper>
  );
};
