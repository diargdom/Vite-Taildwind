import { createContext } from "react";
import PropTypes from "prop-types";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  return (
    <>
      <ShoppingCartContext.Provider value={{}}>
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}

ShoppingCartProvider.prototypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
