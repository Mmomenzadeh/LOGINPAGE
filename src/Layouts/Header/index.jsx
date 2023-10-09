import { Link, useLocation, useNavigate } from "react-router-dom";

import "./../../Assets/style/Layout/index.scss";
import { HomePage, LogInPage, UsersPage } from "../../Config/RouteConstant";
import Cookies from "js-cookie";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  const Navigate = useNavigate()
  return (
    <header
      className={` ${
        pathname !== "/" && pathname !== "/login"
          ? "px-lg-5  darkHeader"
          : "container whiteHeader "
      } `}
    >
      <div className="row p-0 m-0 w-100 py-4">
        <div className=" col-12 pb-3 pb-lg-0 col-lg-4 p-0 m-0 ">
          <div className=" w-100 d-flex justify-content-center justify-content-lg-start ">
            <Link to={HomePage} className="logo-style">
              royal social App
            </Link>
          </div>
        </div>
        <div className=" col-12 col-lg-8 p-0 m-0 ">
          <div className="d-flex w-100 justify-content-center justify-content-lg-end align-items-center">
            {Cookies.get("token") ? (
              <>
                <button
                  className={pathname !== "/" && pathname !== "/login" ? "btn-LogOut_dark" : "btn-LogOut_white"}
                  onClick={() =>{
                    Cookies.remove("token")  ; 
                    Navigate("/")
                  }}
                  

                >
                  {" "}
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link to={LogInPage} className=" link-style  px-2  px-md-4 ">
                  <span className={pathname === LogInPage ? `active` : ""}>
                    LogIn
                  </span>
                </Link>
              </>
            )}

            <Link to={UsersPage} className=" link-style  px-2  px-md-4">
              <span className={pathname === "/users" ? `` : ""}>Users</span>
            </Link>
            <Link to={"/register"} className=" link-style  px-2  px-md-4">
              <span className={pathname === "/register" ? `` : ""}>
                Register
              </span>
            </Link>
            <Link to={"/contactus"} className=" link-style  px-2  px-md-4">
              <span className={pathname === "/contactus" ? `` : ""}>
                contact us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
