import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustQty, removeFromCart } from "../../redux/actions/cartActions";

const CartItem = (props) => {
  const { item } = props;

  const [inputValue, setInputValue] = useState(item.qty);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(adjustQty(item.id, e.target.value));
  };

  const deleteItem = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(removeFromCart(item.id));
    }, 500);
  };

  return (
    <div className="flex justify-evenly bg-white rounded-xl p-5 mt-5">
      <img
        src={item.image}
        alt="cart_item"
        className="w-56 h-56 object-contain"
      ></img>
      <div className="flex flex-col justify-between w-96">
        <div>
          <p className="text-lg font-bold">{item.title}</p>
          <div className="flex items-center">
            <p>Quantity</p>
            <input
              type="number"
              name="quantity"
              min="1"
              onChange={handleChange}
              value={inputValue}
              className="w-10 p-1 bg-white-smoke border border-black ml-2 rounded"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-bold">${item.price}</p>
          <button onClick={() => deleteItem()}>
            {loader ? (
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 "></div>
            ) : (
              <p className="hover:underline cursor-pointer">Delete</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
