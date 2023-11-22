import http from "configs/http";
export interface IOrder {
  status: Number;
  idUserDTO: {
    id: String;
  };
  quantity: Number;
  idWarehouseDTO: {
    id: String;
  };
}
export const addOrderAsync = (obj: IOrder) => {
  return http.post("/order/api/insert", obj);
};
