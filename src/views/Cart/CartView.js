import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

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
    <div className="container mx-auto px-4 my-16">
      <header>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Shopping Cart
        </h1>
      </header>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-10">
        <section className="lg:col-span-6">
          {cart.length ? (
            cart.map((product) => (
              <div key={product.id}>
                <CartItem item={product} />
              </div>
            ))
          ) : (
            <div className="h-80 lg:h-96 flex flex-col justify-center items-center">
              <p>Cart is empty...</p>
            </div>
          )}
        </section>
        <section className="lg:col-span-4">
          <div className=" sticky top-4 flex flex-col justify-between h-60 bg-white mt-5 rounded-xl drop-shadow-lg p-5">
            <p className="text-center text-lg sm:text-xl md:text-2xl font-bold">
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
            {cart.length ? (
              <button className="bg-crimson-red hover:bg-crimson-light-red text-white-smoke w-full px-4 py-3 ">
                {" "}
                Proceed to Checkout
              </button>
            ) : (
              <Link to="/all_products/">
                <button className="bg-crimson-red hover:bg-crimson-light-red text-white-smoke w-full px-4 py-3 ">
                  {" "}
                  Continue Shopping
                </button>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartView;
