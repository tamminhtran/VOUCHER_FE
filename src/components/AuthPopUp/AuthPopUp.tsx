import React from "react";
import "./style.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUp } from "queries/auth";
import { signUp } from "queries/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ILogin } from "queries/auth";
import { signIn } from "queries/auth";
import { schemaSignIn } from "validate";
import { schemaSignUp } from "validate";
import { logIn } from "redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

export const AuthPopUp = ({
  setVisibility,
}: {
  setVisibility: (is: boolean) => void;
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: yupResolver(schemaSignUp),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<ILogin>({
    resolver: yupResolver(schemaSignIn),
  });

  const onSubmitSignIn = async (data: ILogin) => {
    console.log(data);
    signIn(data)
      .then((rs: any) => {
        if (rs) {
          toast.success(rs.message);
          dispatch(logIn(rs.data));
          setVisibility(false);
        }
      })
      .catch((err: any) => toast.error(err.response.data.error));
  };
  const onSubmit = async (data: ISignUp) => {
    let obj = { ...data };
    delete obj.confirmPassword;
    signUp(obj)
      .then((rs: any) => {
        if (rs) {
          toast.success(rs.message);
          setVisibility(false);
        }
      })
      .catch((er: AxiosError) => {
        toast.error(er.response.data.error);
      });
  };
  return (
    <div className="auth-pop-up">
      <div className="bg" onClick={() => setVisibility(false)}></div>
      <div className="content">
        <div className="ic" onClick={() => setVisibility(false)}>
          <CloseIcon />
        </div>
        <div className="left">
          <div className="tabs">
            {["Đăng nhập", "Đăng ký"].map((item, key) => {
              return (
                <div
                  className={activeTab === key ? "tab active" : "tab"}
                  key={key}
                  onClick={() => setActiveTab(key)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          {activeTab === 0 && (
            <>
              <div className="lb">
                Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích
                và nhận nhiều ưu đãi hấp dẫn
              </div>
              <form onSubmit={handleSubmit2(onSubmitSignIn)}>
                <div>
                  <label>Email</label>
                  <input {...register2("email")} />
                  {errors2.email && <p>{errors2.email.message.toString()}</p>}
                </div>
                <div>
                  <label>Password</label>
                  <input {...register2("password")} type="password" />
                  {errors2.password && (
                    <p>{errors2.password.message.toString()}</p>
                  )}
                </div>
                <input type="submit" value="Đăng nhập" />
              </form>
              <div className="lb2">Bạn quên mật khẩu?</div>
            </>
          )}
          {activeTab === 1 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>User Name</label>
                <input {...register("userName")} />
                {errors.userName && <p>{errors.userName.message.toString()}</p>}
              </div>{" "}
              <div>
                <label>Email</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message.toString()}</p>}
              </div>
              <div>
                <label>Phone</label>
                <input {...register("phone")} />
                {errors.phone && <p>{errors.phone.message.toString()}</p>}
              </div>{" "}
              <div>
                <label>Password</label>
                <input
                  {...register("password")}
                  type="password"
                  id="passSignUp"
                />
                {errors.password && <p>{errors.password.message.toString()}</p>}
              </div>
              <div>
                <label>Confirm Password</label>
                <input {...register("confirmPassword")} type="password" />
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message.toString()}</p>
                )}
              </div>
              <div>
                <label>First Name</label>
                <input {...register("firstName")} />
                {errors.firstName && (
                  <p>{errors.firstName.message.toString()}</p>
                )}
              </div>
              <div>
                <label>Last Name</label>
                <input {...register("firstName")} />
                {errors.lastName && <p>{errors.lastName.message.toString()}</p>}
              </div>{" "}
              <div>
                <label>Full Name</label>
                <input {...register("fullName")} />
                {errors.fullName && <p>{errors.fullName.message.toString()}</p>}
              </div>{" "}
              <div>
                <label>Address</label>
                <input {...register("address")} />
                {errors.address && <p>{errors.address.message.toString()}</p>}
              </div>
              <div>
                <label>Member Code</label>
                <input {...register("memberCode")} />
                {errors.memberCode && (
                  <p>{errors.memberCode.message.toString()}</p>
                )}
              </div>
              <div>
                <label>Role Name</label>
                <input {...register("roleName")} />
                {errors.roleName && <p>{errors.roleName.message.toString()}</p>}
              </div>
              <input type="submit" />
            </form>
          )}
        </div>
        <div className="right">
          <img src={require(`assets/homepage/auth.png`)} alt="" />
        </div>
      </div>
    </div>
  );
};
