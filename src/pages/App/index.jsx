import { useRoutes, BrowserRouter } from "react-router-dom";
import { routes } from "../../routes";
import ShoppingCartProvider from "./../../context/index";
import Navbar from "./../../components/Navbar/index";
import "./App.css";

function App() {
  const AppRoutes = () => {
    return useRoutes(routes);
  };

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
