import Header from "../../Layouts/Header";
import Main from "../../Layouts/Mian";
import Footer from "../../Layouts/Footer";

import "./../../Assets/style/Pages/index.scss";

export default function Home() {
  // console.log("home");
  return (
    <div className="Home ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
