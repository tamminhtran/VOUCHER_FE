import { Wrapper } from "components/Wrapper/Wrapper";
import React from "react";
import "./Brand.css";
import Brand1 from "assets/homepage/brand1.png";
import Brand2 from "assets/homepage/brand2.png";
import Brand3 from "assets/homepage/brand3.png";
import Brand4 from "assets/homepage/brand4.png";
import Brand5 from "assets/homepage/brand5.png";
import Brand6 from "assets/homepage/brand6.png";
import Brand7 from "assets/homepage/brand7.png";
import Brand8 from "assets/homepage/brand8.png";
import Newbrand1 from "assets/homepage/newbrand1.png";
import Newbrand2 from "assets/homepage/newbrand2.png";
import Newbrand3 from "assets/homepage/newbrand3.png";
import Newbrand4 from "assets/homepage/newbrand4.png";
import Newbrand5 from "assets/homepage/newbrand5.png";
import Newbrand6 from "assets/homepage/newbrand6.png";
import Newbrand7 from "assets/homepage/newbrand7.png";
import Newbrand8 from "assets/homepage/newbrand8.png";
export const Brand = ({ title, isNew }: any) => {
  return (
    <Wrapper>
      <div className="brand">
        <div className="title">{title}</div>
        {isNew ? (
          <div className="list">
            <img src={Brand1} alt="" />
            <img src={Brand2} alt="" />
            <img src={Brand3} alt="" />
            <img src={Brand4} alt="" />
            <img src={Brand5} alt="" />
            <img src={Brand6} alt="" />
            <img src={Brand7} alt="" />
            <img src={Brand8} alt="" />
          </div>
        ) : (
          <div className="list">
            <img src={Newbrand1} alt="" />
            <img src={Newbrand2} alt="" />
            <img src={Newbrand3} alt="" />
            <img src={Newbrand4} alt="" />
            <img src={Newbrand5} alt="" />
            <img src={Newbrand6} alt="" />
            <img src={Newbrand7} alt="" />
            <img src={Newbrand8} alt="" />
          </div>
        )}
      </div>
    </Wrapper>
  );
};
