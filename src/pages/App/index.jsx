import { useRoutes, BrowserRouter } from "react-router-dom";
import { routes } from "../../routes";

import "./App.css";
import Navbar from "./../../components/Navbar/index";

function App() {
  const AppRoutes = () => {
    return useRoutes(routes);
  };

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
