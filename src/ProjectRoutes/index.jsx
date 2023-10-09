import {
  // Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import LogIn from "../Pages/LogIn";
import { HomePage, LogInPage, UsersPage } from "../Config/RouteConstant";
import Home from "../Pages/Home";
import Main from "../Layouts/Mian";
import Users from "../Pages/Users";
import UserDetails from "../Pages/UserDetails";

export default function ProjectRouts() {
  return (
    <Routes>
      <Route path={HomePage} element={<Home />}>
        <Route index element={<Main/>}/>
        <Route path={LogInPage} element={<LogIn />} />
        <Route path={UsersPage} element={<Users />} />
        <Route path="/users/:id" element={<UserDetails/>}/>
      </Route>
    </Routes>
  );
}
