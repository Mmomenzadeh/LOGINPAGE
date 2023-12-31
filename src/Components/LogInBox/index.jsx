import { useForm } from "react-hook-form";
import "./../../Assets/style/Components/LogInBox.components.scss";
import { AuthService } from "../../Api/Services/LogIn";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function LogInBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigate();

  const onSubmit = async (data) => {
    AuthService(data)
      .then((res) => {
        // console.log(res);
        if (res.data.token) {
          toast.success("successfull");
          Cookies.set("token", res.data.token);
          navigation("/users");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        navigation("/");
      });
  };

  return (
    <form
      className="logIn-box col-12 col-sm-11 col-md-8 col-lg-5  col-xl-3 p-0 m-0 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="logIn-box__header col-12 p-0 m-0 ">
        <div className="row w-100 d-flex flex-column align-items-center ">
          <p className="text-center text-white" style={{ fontSize: "42px" }}>
            LOGIN
          </p>
        </div>
      </div>
      <div className="logIn-box__main col-12 p-0 m-0 d-flex flex-column px-5 py-4">
        <input
          type="text"
          placeholder="UserName"
          className="my-3 py-2"
          {...register("email", {
            required: true,
            minLength: 4,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && (
          <small style={{fontSize:"12px"}} className="text-muted">user name is required</small>
        )}
        <input
          type="password"
          placeholder="Password"
          className="my-3 py-2"
          {...register("password", {
            required: true,
            minLength: 8,
            // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
          })}
        />
        {errors.password && (
          <small style={{fontSize:"12px"}} className="text-muted">password is required</small>
        )}
      </div>
      <div className="logIn-box__footer col-12 p-0 m-0 d-flex flex-column  align-items-center pb-4">
        <button className="btn-logIn py-3 col-5 text-white " type="submit">
          get started
        </button>
        <label className=" py-3 text-white" style={{ fontSize: "12px" }}>
          <input type="checkbox" className="mx-2 " />I agree to the terms and
          conditions
        </label>
      </div>
    </form>
  );
}
