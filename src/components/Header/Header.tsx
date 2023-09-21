import React from "react";
import "./Header.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const Header = () => {
  return (
    <div className="header-container">
      <Wrapper>
        <div className="header-content">
          <div className="logo">VOUCHER SHOP</div>
          <div className="search-wrapper">
            <input
              type="search"
              name=""
              id=""
              placeholder="Tìm kiếm sản phẩm"
            />
            <div className="ic-wrapper">
              <SearchIcon />
            </div>
          </div>
          <div className="btns">
            <AccountCircleIcon className="ic" />
            <div className="btn">Đăng nhập</div>/
            <div className="btn">Đăng ký</div>
          </div>
          <div className="cart">
            <ShoppingCartOutlinedIcon />
            <span>Giỏ hàng</span>
            <div className="num">4</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
