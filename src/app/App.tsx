import "./styles/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";
import {PublicRoutes} from "./routes/PublicRoutes.tsx";
import {ToastContainer} from "react-toastify";

function App() {

  return <BrowserRouter>
    <PublicRoutes/>
    <ToastContainer />
  </BrowserRouter>
}

export default App
