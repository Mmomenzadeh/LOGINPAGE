import React from "react";

import "./../../Assets/style/Layout/index.scss";
export default function Main() {
  return (
    <main className="row w-100 p-0 m-0 justify-content-center h-50 align-items-center ">
      <div className=" main col-8 p-0 m-0 ">
        <p className=" main__title text-center text-white ">
          Welcome to Royal Social App{" "}
        </p>
        <div className="row p-0 m-0 w-100 d-flex justify-content-center py-4 ">
          <div
            className=" col-12 col-lg-6 p-0 m-0  text-center text-white"
            style={{ lineHeight: "23px", textShadow: "#19bfd3 1px 0 10px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            provident delectus reiciendis dolore, illum vitae doloremque
            obcaecati pariatur repudiandae earum id voluptatibus quas
            reprehenderit quo doloribus, corrupti quae totam nemo.
          </div>
        </div>
      </div>
    </main>
  );
}
