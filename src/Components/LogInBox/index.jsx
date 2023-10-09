import "./../../Assets/style/Components/LogInBox.components.scss";

export default function LogInBox() {
  console.log("first");
  return (
    <form className="logIn-box col-4 p-0 m-0 ">
      <div className="logIn-box__header col-12 p-0 m-0 ">
        <div className="row w-100 d-flex flex-column align-items-center ">
          <p className="">LOGIN</p>
          
        </div>
      </div>
      <div className="logIn-box__main col-12 p-0 m-0 "></div>
      <div className="logIn-box__footer col-12 p-0 m-0 "></div>
    </form>
  );
}
