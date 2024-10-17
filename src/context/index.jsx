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
  //---Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemBytitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BT_TITTLE") {
      return filteredItemBytitle(items, searchByTitle);
    }
    if (searchType === "BT_CATEGORY") {
      return filteredItemByCategory(items, searchByCategory);
    }
    if (searchType === "BT_TITTLE_AND_CATEGORY") {
      return filteredItemByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilterItems(
        filterBy(
          "BT_TITTLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilterItems(
        filterBy("BT_TITTLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilterItems(
        filterBy("BT_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilterItems(filterBy(null, items, searchByTitle, searchByCategory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchByTitle, searchByCategory]);

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
          searchByCategory,
          setSearchByCategory,
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
