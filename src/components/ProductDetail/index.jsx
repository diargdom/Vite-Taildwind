import { XMarkIcon } from "@heroicons/react/24/solid";
import "./ProductDetail.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
function ProductDetail() {
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
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl p-6">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-blue-500 cursor-pointer"
            onClick={() => context.closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={imageUrl}
          alt={context.productoToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productoToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productoToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productoToShow.description}
        </span>
      </p>
    </aside>
  );
}

export default ProductDetail;
