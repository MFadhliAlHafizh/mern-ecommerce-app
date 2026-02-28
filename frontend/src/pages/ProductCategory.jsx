import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import { ProductCard } from "../components/ProductCard";

export const ProductCategory = () => {
  const { products } = useContext(AppContext);
  const { category } = useParams();

  const searchCategory = categories.find((item) => item.path.toLowerCase() === category);
  const filteredCategory = products.filter((product) => product.category.toLowerCase() === category);

  return (
    <div>
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl md:text-3xl font-medium uppercase">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}
      {filteredCategory.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredCategory.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-2xl text-primary font-medium">No products found in this category</p>
        </div>
      )}
    </div>
  );
};
