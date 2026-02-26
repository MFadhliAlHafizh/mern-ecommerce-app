import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

export const ProductCard = () => {
  const { products, currency, addToCart, removeFromCart, cartItems } =
    useContext(AppContext);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
      {products
        .filter((product) => product.inStock)
        .slice(0, 5)
        .map((product) => (
          <div
            key={product._id}
            className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white w-full mt-6 shadow-md"
          >
            <div className="group cursor-pointer flex items-center justify-center px-2">
              <img
                className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                src={product.image[0]}
                alt={product.name}
              />
            </div>
            <div className="text-gray-500/60 text-sm">
              <p>{product.category}</p>
              <p className="text-gray-700 font-medium text-lg truncate w-full">
                {product.name}
              </p>
              <div className="flex items-center gap-0.5">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <img
                      key={i}
                      src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                      alt="Star"
                      className="md:w-3.5 w-3"
                    />
                  ))}
                <p>(4)</p>
              </div>
              <div className="flex items-end justify-between mt-3">
                <p className="md:text-xl text-base font-medium text-primary">
                  {currency}
                  {product.offerPrice}{" "}
                  <span className="text-gray-500/60 md:text-sm text-xs line-through">
                    {currency}
                    {product.price}
                  </span>
                </p>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="text-primary"
                >
                  {!cartItems[product._id] ? (
                    <button
                      className="flex items-center justify-center gap-1 bg-primary/10 border border-primary py-1.5 px-4 rounded text-primary font-medium cursor-pointer"
                      onClick={() => addToCart(product._id)}
                    >
                      <img src={assets.cart_icon} alt="Cart" />
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 rounded select-none">
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="cursor-pointer text-md px-2 h-fit bg-primary/25 flex justify-center items-center rounded-sm"
                      >
                        -
                      </button>
                      <span className="w-5 text-center">
                        {cartItems[product._id]}
                      </span>
                      <button
                        onClick={() => addToCart(product._id)}
                        className="cursor-pointer text-md px-2 h-fit bg-primary/25 flex justify-center items-center rounded-sm"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
