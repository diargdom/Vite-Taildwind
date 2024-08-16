import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

function OrderCard({ id, title, images, price, handleDelete }) {
  const cleanImageUrl = (url) => {
    const urlReplace = url.replace(/["[\]]/g, "");
    return urlReplace;
  };

  const imageUrl = images[0]?.length > 0 ? cleanImageUrl(images[0]) : "";

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light"></p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className="h-6 w-6 text-blue-500 cursor-pointer"
        ></XMarkIcon>
      </div>
    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
