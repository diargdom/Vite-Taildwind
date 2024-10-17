import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light text-red-700">22.08.24</span>
          <span className="font-light text-red-700">
            {totalProducts} articles
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl text-green-600">
            ${totalPrice}
          </span>
          <ChevronRightIcon className="h-6 w-6 text-green-600 cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
