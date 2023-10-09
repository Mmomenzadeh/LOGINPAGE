import { BrowserRouter } from "react-router-dom";
import ProjectRouts from "./ProjectRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ProjectRouts />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
