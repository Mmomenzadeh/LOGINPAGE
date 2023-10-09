import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import "./../../Assets/style/Pages/index.scss";
import { Outlet } from "react-router-dom";

export default function Home() {
  // console.log("home");
  return (
    <div className="Home ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
