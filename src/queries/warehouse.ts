import http from "configs/http";
export const getWarehouseByLabel = (id: number) => {
  return http.get(`/warehouse/by-label-id/${id}`);
};

export const getAllWarehouse = () => {
  return http.get(`/warehouse/api/all`);
};
