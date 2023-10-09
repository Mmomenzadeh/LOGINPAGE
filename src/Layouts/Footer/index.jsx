import { Link } from "react-router-dom";
import "./../../Assets/style/Layout/index.scss";

export default function Footer() {
  return (
    <footer className=" row w-100 px-5">
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
        <p className="text-white text-end">
          © 2024 Key. All Rights Reserved | Design By M.Momenzadeh
        </p>
      </div>
    </footer>
  );
}
