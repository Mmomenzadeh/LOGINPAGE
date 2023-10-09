import { BrowserRouter } from "react-router-dom";
import ProjectRouts from "./ProjectRoutes";
function App() {

  return (
    <>
      <BrowserRouter>
        <ProjectRouts />
      </BrowserRouter>
    </>
  );
}

export default App;
