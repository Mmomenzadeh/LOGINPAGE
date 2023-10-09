import { Link, useLocation } from "react-router-dom";
import "./../../Assets/style/Layout/index.scss";

export default function Footer() {
  const location = useLocation();
  return (
    <footer
      className={
        location.pathname !== "/" && location.pathname !== "/login"
          ? `darkFooter p-0 m-0  row w-100 px-5 py-5`
          : " whiteFooter p-0 m-0  row w-100 px-5"
      }
    >
      <div className=" col-8  p-0 m-0  ">
        <Link to={`/aboutus`} className="px-4 ">
          <span className="">About Us</span>
        </Link>
        <Link to={`/privacy`} className="px-4 ">
          <span className="">Privacy Policy</span>
        </Link>
        <Link to={`/terms`} className="px-4 ">
          <span className="">Terms Of Use</span>
        </Link>
      </div>
      <div className="col-4 p-0 m-0 ">
        <p
          className={
            location.pathname !== "/" && location.pathname !== "/login"
              ? " text-end"
              : "text-white text-end"
          }
        >
          © 2024 Key. All Rights Reserved | Design By M.Momenzadeh
        </p>
      </div>
    </footer>
  );
}
