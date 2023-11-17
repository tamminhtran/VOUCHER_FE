import http from "configs/http";

export interface ILogin {
  email: String;
  password: String;
}
export interface ISignUp {
  email: String;
  password: String;
  phone: String;
}
export const signIn = async (payload: ILogin) => {
  const rs = await http.post("/account/api/signin", null, {
    params: payload,
  });
  return rs;
};

export const signUp = (payload: ISignUp) => {
  return http.post("/account/api/signup", payload);
};

export const logOutAsync = (refreshToken: any) => {
  return http.post("/account/api/logout", null, {
    headers: {
      Authorization: "Bearer " + refreshToken,
    },
  });
};
export const forgotPassword = (email: String) => {
  return http.post(`/account/api/forgot_password?email=${email}`);
};

export const setPassword = (obj: any) => {
  return http.put(`/account/api/set_password`, obj);
};
