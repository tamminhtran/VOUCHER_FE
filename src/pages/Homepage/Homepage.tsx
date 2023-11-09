import React from "react";
import { Overview } from "./components/Overview";
import { Brand } from "./components/Brand";
import { Category } from "./components/Category";
import { Products } from "./components/Products";
import { Edus, Entertains, Games } from "./Homepage.hard";
import { Wrapper } from "components/Wrapper/Wrapper";
import "./Homepage.scss";
import { toast } from "react-toastify";
export const Homepage = () => {
  return (
    <div className="homepage">
      <Overview />
      <Brand title="Thương hiệu nổi bật" isNew={false} />
      <Brand title="Thương hiệu mới" isNew={true} />
      <Category />
      <Products
        title="Game trên Steam"
        label="Khám phá"
        subtitle="Những trò chơi được đánh giá tốt, nội dung hấp dẫn thu hút đang chờ bạn"
        data={Games}
      />
      <Products title={"Học tập"} data={Edus} />
      <Products title={"Giải trí"} data={Entertains} />
      <Wrapper>
        <div className="faqs-wrapper">
          <div className="faqs">
            <div className="question">
              Bạn có <span> câu hỏi?</span> Super Voucher có{" "}
              <span>câu trả lời </span>
            </div>
            <div className="more">Xem thêm</div>
          </div>
        </div>
      </Wrapper>
      <div className="not-have-account">
        <Wrapper>
          <div className="content">
            <img src={require(`assets/homepage/register.png`)} alt="" />
            <div className="txt">
              <div className="title">Bạn chưa có tài khoản?</div>
              <div className="subtitle">
                Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích
                lũy ưu đãi khi thanh toán các sản phẩm và tham gia vào chương
                trình Giới thiệu bạn bè nhận hoa hồng vĩnh viễn tại Super
                Voucher.
              </div>
              <div className="btns">
                <div className="register">Đăng ký ngay</div>
                <div className="login">
                  Hoặc bạn đã có tài khoản? <span>Đăng nhập</span>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
