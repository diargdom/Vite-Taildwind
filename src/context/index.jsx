import { createContext, useEffect, useState } from "react";
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

  //---Shopping Cart . Add Product to cards
  const [cardProducts, setCardProducts] = useState([]);

  //---Shopping Cart . Order
  const [order, setOrder] = useState([]);

  //---Get products
  const [items, setItems] = useState(null);
  const [filterItems, setFilterItems] = useState(null);
  //---Get products by tittle
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemBytitle = (items, setSearchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(setSearchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilterItems(filteredItemBytitle(items, searchByTitle));
  }, [items, searchByTitle]);

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
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filterItems,
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
