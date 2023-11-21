import http from "configs/http";
export interface IBodyBuyTicket {
  idWarehouseDTO: {
    id: Number;
  };
  idCategoryDTO: { id: Number };
  idOrderDTO: { id: Number };
  status: Number;
  discountType: String;
  discountAmount: Number;
  idStoreDTO: {
    id: Number;
  };
  idUserDTO: {
    id: Number;
  };
}
export interface IBuyTicket {
  obj: IBodyBuyTicket;
  email: String;
  numberOfSerial: Number;
}
export const buyTicket = (payload: IBuyTicket) => {
  return http.post(
    `/ticket/api/buy-ticket?email=${payload.email}&numberOfSerial=${payload.numberOfSerial}`,
    payload.obj
  );
};
