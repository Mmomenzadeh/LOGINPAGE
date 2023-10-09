import {
  // Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import LogIn from "../Pages/LogIn";
import { HomePage, LogInPage } from "../Config/RouteConstant";
import Home from "../Pages/Home";

export default function ProjectRouts() {

  return (
    <Routes>
      <Route path={HomePage} element={<Home/>} />
      <Route path={LogInPage} element={<LogIn/>}/>
    </Routes>
  );
}
