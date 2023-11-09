import { Wrapper } from "components/Wrapper/Wrapper";
import React from "react";
import { Card, ICardProps } from "./Card";
import "./Products.scss";
export interface IProductsProps {
  title?: String;
  label?: String;
  subtitle?: String;
  data: any;
}
export const Products = ({ title, label, subtitle, data }: IProductsProps) => {
  return (
    <Wrapper>
      <div className="title">
        {title} {label && <div className="label">{label}</div>}
      </div>
      {subtitle && <div className="subtitle">{subtitle} </div>}
      <div className="lst">
        {data
          ? data.map((item: ICardProps, key: any) => {
              return (
                <Card
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                  discountPercent={item.discountPercent}
                  img={item.img}
                  isSoldout={false}
                  key={key}
                />
              );
            })
          : "no data"}
      </div>
      <div
        className="more"
        onClick={() => {
          const ele = document.querySelector(".lst");
        }}
      >
        Xem thêm
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};
