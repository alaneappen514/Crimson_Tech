import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CartView = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.qty * item.price;
    });
    setTotalPrice(total);
    setTaxPrice(totalPrice * 0.08);
  }, [totalPrice, taxPrice, setTaxPrice, cart, setTotalPrice]);

  return (
    <div className="container mx-auto px-4 my-8">
      <div>
        <h1 className="sm:text-xl md:text-2xl font-bold">Shopping Cart</h1>
      </div>
      <div className="grid gap-6 grid-cols-10">
        <div className="col-span-6">
          {cart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-evenly bg-white rounded-xl p-5 mt-5"
              >
                <img
                  src={product.image}
                  alt="cart_item"
                  className="w-56 h-56 object-contain"
                ></img>
                <div className="flex flex-col justify-between w-96">
                  <div>
                    <p className="text-lg font-bold">{product.title}</p>
                    <div className="flex items-center">
                      <p>Quantity</p>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={product.qty}
                        className="w-10 p-1 bg-white-smoke border border-black ml-2 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xl font-bold">${product.price}</p>
                    <p className="hover:underline cursor-pointer">Delete</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-4">
          <div className=" sticky top-0 flex flex-col justify-between h-60 bg-white mt-5 rounded-xl drop-shadow-lg p-5">
            <p className="text-center sm:text-xl md:text-2xl font-bold">
              Order Summary
            </p>
            <div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Sales Tax</span>
                <span>${taxPrice.toFixed(2)}</span>
              </div>
              <hr className="w-full my-1"></hr>
              <div className="flex justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">
                  ${(totalPrice + taxPrice).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="bg-crimson-red hover:bg-crimson-light-red text-white-smoke w-full px-4 py-3 ">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
