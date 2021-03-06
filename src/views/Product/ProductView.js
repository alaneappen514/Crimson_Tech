import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Collapsible from "./Collapsible";
import Reviews from "./Reviews";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
const ProductView = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [loader, setLoader] = useState(false);

  const itemToCart = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(addToCart(product));
    }, 500);
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <i className="fa fa-chevron-left"></i>
      <button
        className="inline-block ml-3 mb-16 hover:underline"
        onClick={() => history(-1)}
      >
        Back
      </button>
      {Object.keys(product).length !== 0 ? (
        <>
          <section>
            <div className="flex flex-wrap justify-evenly items-center">
              <figure>
                <img
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain bg-white border-dark-green rounded-xl border p-2"
                  src={product.image}
                  alt="product_img"
                ></img>
              </figure>
              <div className="mt-10 sm:m-10 w-full lg:w-1/2 flex flex-col justify-center p-10 rounded-3xl bg-white drop-shadow-lg relative">
                <button className="absolute top-0 right-0 p-5 outline-violet-900 outline-2 ">
                  <i className="far fa-heart text-2xl sm:text-3xl"></i>
                </button>
                <div className="space-y-2">
                  <header>
                    <h1 className="text-lg sm:text-2xl   font-extrabold">
                      {product.title}
                    </h1>
                  </header>
                  <div className="flex items-center">
                    {Array(parseInt(product.rating.rate))
                      .fill()
                      .map((_, i) => (
                        <i className="text-crimson-red fas fa-star" key={i}></i>
                      ))}
                    <p className="mx-2">{product.rating.rate}</p>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="sm:text-lg  font-extrabold">Category:</h3>
                  <p className="text-base">
                    {product.category[0].toUpperCase() +
                      product.category.substring(1)}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <h1 className="text-lg md:text-2xl font-extrabold">
                    ${product.price}
                  </h1>
                  <button
                    onClick={() => itemToCart()}
                    className="bg-crimson-red hover:bg-crimson-light-red text-white-smoke w-full px-4 py-3 flex justify-center outline-violet-900 outline-offset-4 outline-2 "
                  >
                    {loader ? (
                      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 "></div>
                    ) : (
                      <p>Add to Cart</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Collapsible
              title="Description"
              description={product.description}
            />
            <Collapsible title="Reviews" description={<Reviews />} />
          </section>
        </>
      ) : (
        <>
          {/* //Loading containers */}{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {Array(2)
              .fill()
              .map((_, i) => (
                <div
                  className="border border-slate-300 m-5 p-5  shadow rounded-xl h-80"
                  key={i}
                >
                  <div className="animate-pulse  space-x-4">
                    <div className="rounded-full bg-slate-200 h-20 w-20"></div>
                    <div className="flex-1 space-y-6 py-1 ">
                      <div className="h-2 bg-slate-200 rounded mt-10"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="my-10">
            <div className="border border-slate-300 m-5 p-5 shadow rounded-xl">
              <div className="flex-none  py-8 ">
                <div className="h-4 bg-slate-200 rounded "></div>
              </div>
            </div>
            <div className="border border-slate-300 m-5 p-5 shadow rounded-xl">
              <div className="flex-none  py-8 ">
                <div className="h-4 bg-slate-200 rounded "></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
