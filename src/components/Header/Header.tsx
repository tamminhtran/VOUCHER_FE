import React, { useState } from "react";
import "./Header.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import SearchIcon from "@mui/icons-material/Search";
import { selectAccessToken } from "redux/features/auth/authSlice";
import Logo from "assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthPopUp } from "components/AuthPopUp/AuthPopUp";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "redux/features/auth/authSlice";
import { logOutAsync } from "queries/auth";
import { selectRefreshToken } from "redux/features/auth/authSlice";
import { getUserInfo } from "queries/auth";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const [isShowAuthPopup, setIsShowAuthPopup] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const [info, setInfo] = useState<any>();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token)
      getUserInfo()
        .then((rs: any) => {
          if (rs) {
            setInfo(rs.data);
          }
        })
        .catch((err: any) => toast.error(err.message));
  }, [token]);
  return (
    <div className="header-container">
      <Wrapper>
        {isShowAuthPopup && <AuthPopUp setVisibility={setIsShowAuthPopup} />}
        <div className="header-content">
          <div className="logo-wrapper" onClick={() => navigate("/")}>
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
          {token && info ? (
            <div
              className="profile"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <div className="wr">
                <div>Hello {info.fullName || "..."}</div>
                <div className="avatar">
                  {info.avatarUrl ? (
                    <img src={info.avatarUrl} alt="" />
                  ) : (
                    <AccountCircleIcon className="ic" />
                  )}
                </div>
              </div>
              <div
                className="btn"
                onClick={() => {
                  dispatch(logOut());

                  logOutAsync(refreshToken)
                    .then((rs: any) => {
                      if (rs) {
                        toast.success(rs.message);
                      }
                    })
                    .catch((err: any) => toast.error(err.response.data.error));
                }}
              >
                Đăng Xuất
              </div>
            </div>
          ) : (
            <div className="btns" onClick={() => setIsShowAuthPopup(true)}>
              <AccountCircleIcon className="ic" />
              <div className="btn">Đăng nhập</div>/
              <div className="btn">Đăng ký</div>
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
