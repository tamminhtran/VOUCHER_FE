import { Wrapper } from "components/Wrapper/Wrapper";
import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
export const Detail = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="detail">
      <Wrapper>
        <div className="header">
          <h1>ƯU ĐÃI ĐỘC QUYỀN TRÊN VINID KHI DI CHUYỂN CÙNG XANH SM</h1>
          <div className="label">
            <div className="time">23/09/2023</div>
            <span>Tin Khuyến Mại</span>
          </div>
        </div>
        <div className="content">dsf</div>
        <div className="btnBuy">MUA NGAY</div>
      </Wrapper>
    </div>
  );
};
