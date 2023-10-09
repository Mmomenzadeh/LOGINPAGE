import { BrowserRouter } from "react-router-dom";
import ProjectRouts from "./ProjectRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer position="top-center"/>
          <ProjectRouts />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
