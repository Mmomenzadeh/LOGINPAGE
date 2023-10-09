import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import "./../../Assets/style/Pages/index.scss";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation()
  return (
    <div className={ location.pathname === "/" || location.pathname ===  "/login" ? `Home` : ""}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
