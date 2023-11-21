import { Wrapper } from "components/Wrapper/Wrapper";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.scss";
import { toast } from "react-toastify";
import { getWarehouseDetail } from "queries/warehouse";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IBodyBuyTicket } from "queries/ticket";
import { addOrderAsync } from "queries/order";
import { IOrder } from "queries/order";
import { getUserInfo } from "queries/auth";
import { IBuyTicket } from "queries/ticket";
import { buyTicket } from "queries/ticket";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBuyTicket } from "validate";
export const Detail = () => {
  let { id } = useParams();
  const [data, setData] = React.useState<any>();
  const [userData, setUserData] = React.useState<any>();
  React.useEffect(() => {
    getUserInfo()
      .then((rs: any) => {
        if (rs) {
          setUserData(rs.data);
        }
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  }, []);
  React.useEffect(() => {
    getWarehouseDetail(id)
      .then((rs: any) => {
        if (rs) {
          setData(rs.data);
        }
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  }, [id]);

  console.log(data);
  const navigate = useNavigate();
  const addOrder = () => {
    let obj: IOrder = {
      status: 1,
      idUserDTO: {
        id: userData.id,
      },
      quantity: 2,
      idWarehouseDTO: { id: data.id },
    };
    return addOrderAsync(obj);
  };
  const handelBuyTicket = () => {
    if (data && userData) {
      addOrder()
        .then((rs: any) => {
          if (rs) {
            let payload: IBuyTicket = {
              obj: {
                idWarehouseDTO: { id: rs.data.idWarehouseDTO.id },
                idCategoryDTO: { id: rs.data.idWarehouseDTO.idCategory },
                idOrderDTO: { id: rs.data.id },
                status: 1,
                discountType: "Percentage Off",
                discountAmount: rs.data.idWarehouseDTO.discountAmount,
                idUserDTO: { id: rs.data.idUserDTO.id },
                idStoreDTO: { id: 401 },
              },
              email: rs.data.idUserDTO.email,
              numberOfSerial: 1,
            };
            buyTicket(payload)
              .then((rs: any) => {
                if (rs) {
                  console.log(rs);
                  toast.success(rs.message);
                }
              })
              .catch((err: any) => {
                toast.error(err.message);
              });
          }
        })
        .catch((err: any) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="detail">
      {data ? (
        <Wrapper>
          <div
            className="path"
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIosIcon className="ic" /> Home
          </div>
          <div className="header">
            <h1>{data.name}</h1>
            <div className="label">
              <div className="time">
                {moment(data.availableTo).format("DD/MM/YYYY")}
              </div>
              <span>Tin Khuyến Mại</span>
            </div>
          </div>
          <div className="content">
            <div className="banner">
              {data.bannerUrl !== null ? (
                <img src={data.bannerUrl} alt="" />
              ) : (
                <img src={require(`assets/detail/default.jpg`)} alt="" />
              )}
            </div>
            <h3>Thông tin voucher</h3>
            <p className="note">
              ** LƯU Ý: Voucher có hiệu lực đến{" "}
              {moment(data.availableTo).format("DD/MM/YYYY")}
            </p>
            <h3>Điều kiện sử dụng</h3>
            <p>{data.termtermOfUse}</p>
            <h3>Hướng dẫn sử dụng voucher</h3>
            <p>
              <b>Bước 1: </b>Khách hàng đổi điểm lấy voucher và nhấn sao
              chép/copy mã voucher nhận được trên ứng dụng VinID
            </p>
            <p>
              <b>Bước 2: </b>Khách hàng đặt xe trên ứng dụng Xanh SM
            </p>
            <p>
              <b> Bước 3: </b>Tại phần Ưu đãi/Offers trên ứng dụng Xanh SM,
              khách hàng dán/paste mã voucher đã lấy từ ứng dụng VinID vào để sử
              dụng
            </p>
            <p>
              <b>Bước 4: </b>Mệnh giá voucher sẽ được trừ tiền vào cuốc xe
            </p>
            <p>Đổi điểm VinID nhận ưu đãi ngay!</p>
          </div>
          <div className="btnBuy" onClick={() => handelBuyTicket()}>
            MUA NGAY
          </div>
        </Wrapper>
      ) : (
        "No data"
      )}
    </div>
  );
};

const PopUpBuyTicket = () => {
  return (
    <div className="pop-up-buy-ticket">
      <div className="bg"></div>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmitt)}>
          <div>
            <div className="label">Enter amount want to buy :</div>
            <input type="number" min={1} max={3} {...register("amount")} />
            <p>{errors.amount && errors.amount.message.toString()}</p>
          </div>
        </form>
      </div>
    </div>
  );
};
