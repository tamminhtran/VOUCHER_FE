import { TextField } from "@mui/material";
import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
export const OrdersTab = () => {
  return (
    <>
      <div className="title">Lịch sử đơn hàng</div>
      <div className="label">
        Hiển thị thông tin các sản phẩm bạn đã mua tại Divine Shop
      </div>
      <div className="line"></div>
      <div className="filters">
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="Mã đơn hàng"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="Số tiền từ"
        />{" "}
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="Số tiền đến"
        />
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          label="Từ ngày"
          value={moment()}
        />
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          label="Đến ngày"
          value={moment()}
        />
        <div className="btn-filter">
          <FilterAltOutlinedIcon /> Lọc
        </div>
      </div>
    </>
  );
};
