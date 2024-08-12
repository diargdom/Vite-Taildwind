import { useRoutes, BrowserRouter } from "react-router-dom";
import { routes } from "../../routes";
import ShoppingCartProvider from "./../../context/index";
import Navbar from "./../../components/Navbar/index";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
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
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
