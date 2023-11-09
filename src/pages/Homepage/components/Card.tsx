import React from "react";
import "./Card.scss";

export interface ICardProps {
  name: String;
  price: String;
  discount: String;
  discountPercent: String;
  img: String;
  isSoldout?: boolean;
}
export const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <div className="top">
        <img src={require(`assets/homepage/${props.img}.png`)} alt="" />
        {props.isSoldout && <div className="soldout">Hết hàng</div>}
      </div>
      <div className="bottom">
        <div className="name">{props.name}</div>
        <div className="prices">
          <div className="main-price">{props.price}đ</div>
          <div className="discount">{props.discount}đ</div>
          <div className="discount-percent">-{props.discountPercent}%</div>
        </div>
      </div>
    </div>
  );
};
