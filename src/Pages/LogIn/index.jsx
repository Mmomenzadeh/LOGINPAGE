import LogInBox from "../../Components/LogInBox";
import "./../../Assets/style/Pages/LogIn/index.scss";

export default function LogIn() {
  return (
    <>
      <div className="bg-logIn">
        <div className="row p-0 m-0 w-100 d-flex justify-content-center align-items-center h-100">
          <LogInBox />
        </div>
      </div>
    </>
  );
}
