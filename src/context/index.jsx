import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  //---Shopping Card . Increment quantity
  const [count, setCount] = useState(0);

  //---Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //---Checkout Side Menu . Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //---Product Detail . Show Product
  const [productoToShow, setProductoToShow] = useState({});

  //---Shopping Card . Add Product to cards
  const [cardProducts, setCardProducts] = useState([]);

  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          count,
          setCount,
          openProductDetail,
          closeProductDetail,
          isProductDetailOpen,
          productoToShow,
          setProductoToShow,
          setCardProducts,
          cardProducts,
          isCheckoutSideMenuOpen,
          openCheckoutSideMenu,
          closeCheckoutSideMenu,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
