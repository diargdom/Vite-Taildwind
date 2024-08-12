import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import "./style.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const cleanImageUrl = (url) => {
    const urlReplace = url.replace(/["[\]]/g, "");
    return urlReplace;
  };

  const imageUrl =
    context.productoToShow.images !== undefined
      ? cleanImageUrl(context.productoToShow.images[0])
      : "";

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl p-6">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-blue-500 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
