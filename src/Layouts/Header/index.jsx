import { Link, useLocation } from "react-router-dom";

import "./../../Assets/style/Layout/index.scss";
import { HomePage, LogInPage, UsersPage } from "../../Config/RouteConstant";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className="container ">
      <div className="row p-0 m-0 w-100 py-4">
        <div className="col-lg-4 p-0 m-0 ">
          <div className=" w-100 d-flex justify-content-">
            <Link to={HomePage} className="logo-style">
              royal social App
            </Link>
          </div>
        </div>
        <div className="col-lg-8 p-0 m-0 ">
          <div className="d-flex w-100 justify-content-end">
            <Link to={LogInPage} className=" link-style px-4 ">
              <span className={pathname === LogInPage ? `active` : ""}>
                Login
              </span>
            </Link>
            <Link to={UsersPage} className=" link-style px-4">
              <span className={pathname === "/users" ? `active` : ""}>
                Users
              </span>
            </Link>
            <Link to={"/register"} className=" link-style px-4">
              <span className={pathname === "/register" ? `` : ""}>
                Register
              </span>
            </Link>
            <Link to={"/contactus"} className=" link-style px-4">
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
