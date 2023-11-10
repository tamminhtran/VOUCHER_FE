import http from "configs/http";

export interface ILogin {
  email: String;
  password: String;
}
export interface ISignUp {
  memberCode: String;
  firstName: String;
  lastName: String;
  fullName: String;
  email: String;
  address: String;
  userName: String;
  password: String;
  phone: String;
  roleName: String;
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
      Authorization: "Bearer" + refreshToken,
    },
  });
};
