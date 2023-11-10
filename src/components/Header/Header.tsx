import React from "react";
import "./Header.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { selectAccessToken } from "redux/features/auth/authSlice";
import Logo from "assets/logo.png";
import { AuthPopUp } from "components/AuthPopUp/AuthPopUp";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "redux/features/auth/authSlice";
import { logOutAsync } from "queries/auth";
export const Header = () => {
  const [isShowAuthPopup, setIsShowAuthPopup] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  console.log(token);
  return (
    <div className="header-container">
      <Wrapper>
        {isShowAuthPopup && <AuthPopUp setVisibility={setIsShowAuthPopup} />}
        <div className="header-content">
          <div className="logo-wrapper">
            <img src={Logo} alt="" />
            <div className="logo">Super Voucher</div>
          </div>
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
          {!token ? (
            <div className="btns" onClick={() => setIsShowAuthPopup(true)}>
              <AccountCircleIcon className="ic" />
              <div className="btn">Đăng nhập</div>/
              <div className="btn">Đăng ký</div>
            </div>
          ) : (
            <div
              className="btn"
              onClick={() => {
                dispatch(logOut());
                logOutAsync()
                  .then((rs: any) => {
                    if (rs) {
                      toast.success(rs.message);
                    }
                  })
                  .catch((err): any => toast.error(err.response.data.error));
              }}
            >
              Đăng Xuất
            </div>
          )}
          {/* <div className="cart">
            <ShoppingCartOutlinedIcon />
            <span>Giỏ hàng</span>
            <div className="num">4</div>
          </div> */}
        </div>
      </Wrapper>
    </div>
  );
};
