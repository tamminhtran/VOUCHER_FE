import http from "configs/http";
export interface IBodyBuyTicket {
  idWarehouseDTO: Number;
  idCategoryDTO: Number;
  idOrderDTO: Number;
  status: Number;
  discountType: String;
  discountAmount: Number;
  idStoreDTO: Number;
  idUserDTO: Number;
}
export interface IBuyTicket {
  obj: IBodyBuyTicket;
  email: String;
  numberOfSerial: Number;
}
export const buyTicket = (payload: IBuyTicket) => {
  return http.get(`/ticket/api/buy-ticket/`);
};
