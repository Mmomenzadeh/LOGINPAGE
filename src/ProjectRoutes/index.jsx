import {
  // Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import LogIn from "../Pages/LogIn";
import { Home } from "../Config";

export default function ProjectRouts() {

  return (
    <Routes>
      <Route path={Home} element={<LogIn />} />
    </Routes>
  );
}
