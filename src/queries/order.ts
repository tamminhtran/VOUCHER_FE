import http from "configs/http";
export interface IOrder {
  status: Number;
  idUserDTO: Number;
  quantity: Number;
  idWarehouseDTO: Number;
}
export const addOrderAsync = (obj: IOrder) => {
  return http.post("/order/api/add-order", obj);
};
