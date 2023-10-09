import {
  // Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import LogIn from "../Pages/LogIn";
import { HomePage, LogInPage, UsersPage } from "../Config/RouteConstant";
import Home from "../Pages/Home";
import Main from "../Layouts/Mian";
import Users from "../Pages/Users";
import UserDetails from "../Pages/UserDetails";
import { useEffect } from "react";
import Cookies from "js-cookie";
import NotFound from "../Pages/NotFound";

export default function ProjectRouts() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (Cookies.get("token") && pathname === "/login") {
      navigate("/users");
    } else if (!Cookies.get("token") && pathname === "/users") {
      navigate("/login");
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path={HomePage} element={<Home />}>
        <Route index element={<Main />} />
        <Route path={LogInPage} element={<LogIn />} />
        {Cookies.get("token") && (
          <>
            <Route path={UsersPage} element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </>
        )}
      </Route>
      <Route path={`*`} element={<NotFound />} />
    </Routes>
  );
}
