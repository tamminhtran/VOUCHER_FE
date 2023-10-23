import React from "react";
import { MenuItem, TextField } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export const AccountTab = () => {
  return (
    <>
      <div className="title">Tổng quan</div>
      <div className="stats">
        <div className="stat">
          <div className="label">Tên đăng nhập</div>
          <div className="val">tamminhtran</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Email</div>
          <div className="val">tmt270594@gmail.com</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Họ và tên</div>
          <div className="val">Tran Minh Tam</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Nhóm khách hàng</div>
          <div className="val">Member</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Số dư</div>
          <div className="val">0đ</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Đã tích lũy</div>
          <div className="val">0đ</div>
        </div>{" "}
        <div className="stat">
          <div className="label">Ngày tham gia</div>
          <div className="val">2023-10-10 22:38:33</div>
        </div>{" "}
      </div>
      <div className="line"></div>
      <div className="avatar">
        <img src={require(`assets/avatar.png`)} alt="" />
        <div className="btn">Sửa ảnh đại diện</div>
        <div className="straight"></div>
        <div className="txts">
          <span>Vui lòng chọn ảnh nhỏ hơn 5MB</span>
          <span>Chọn hình ảnh phù hợp, không phản cảm</span>
        </div>
      </div>
      <div className="title">Cá nhân</div>
      <div className="inputs">
        <TextField
          id="outlined-basic"
          label="Họ và tên"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Số điện thoại"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Chứng minh nhân dân"
          variant="outlined"
          size="small"
        />{" "}
        <TextField
          id="outlined-basic"
          label="Giới tính"
          variant="outlined"
          size="small"
          select
        >
          {[
            { label: "Nam", val: "nam" },
            { label: "Nữ", val: "nu" },
          ].map((item, key) => {
            return (
              <MenuItem key={item.val} value={item.val}>
                {item.label}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Tỉnh / Thành phố"
          variant="outlined"
          size="small"
          select
        />{" "}
        <TextField
          id="outlined-basic"
          label="Quận / Huyện"
          variant="outlined"
          size="small"
          select
        />{" "}
        <TextField
          id="outlined-basic"
          label="Xã / Phường"
          variant="outlined"
          size="small"
          select
        />{" "}
        <TextField
          id="outlined-basic"
          label="fdsf"
          variant="outlined"
          size="small"
        />
        <div className="address">
          <MapOutlinedIcon /> Quản lý địa chỉ mua hàng
        </div>
      </div>
      <div className="allow">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Cho phép hiển thị tên của bạn trên các hoạt động"
          />
        </FormGroup>
      </div>
      <div className="save">Lưu thay đổi</div>
    </>
  );
};
