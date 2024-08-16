import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const cleanImageUrl = (url) => {
    const urlReplace = url.replace(/["[\]]/g, "");
    return urlReplace;
  };

  const imageUrl =
    data.data.images[0] && data.data.images[0].length > 0
      ? cleanImageUrl(data.data.images[0])
      : "";

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductoToShow(productDetail);
  };

  const addProductstoCard = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCardProducts([...context.cardProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isIncart = context.cardProducts.some((product) => product.id === id);

    return (
      <div
        className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 ${
          isIncart ? "bg-green-400" : "bg-white"
        }`}
        onClick={
          !isIncart ? (event) => addProductstoCard(event, data.data) : undefined
        }
      >
        {isIncart ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <PlusIcon className="h-6 w-6 text-black" />
        )}
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-b text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imageUrl}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
