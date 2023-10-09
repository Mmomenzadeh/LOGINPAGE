import React from "react";
import { Link } from "react-router-dom";

import "./../../Assets/style/Layout/index.scss";

export default function Header() {
  return (
    <header className="container ">
      <div className="row p-0 m-0 w-100 py-4">
        <div className="col-lg-4 p-0 m-0 ">
          <div className=" w-100 d-flex justify-content-">
            <p className="logo-style">royal social club</p>
          </div>
        </div>
        <div className="col-lg-8 p-0 m-0 ">
          <div className="d-flex w-100 justify-content-end">
            <Link to={"/login"} className=" link-style px-4 ">
              <span className={`active`}>Login</span>
            </Link>
            <Link to={"/login"} className=" link-style px-4">
              <span className={``}>About Us</span>
            </Link>
            <Link to={"/login"} className=" link-style px-4">
              <span className={``}>Register</span>
            </Link>
            <Link to={"/login"} className=" link-style px-4">
              <span className={``}>contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
