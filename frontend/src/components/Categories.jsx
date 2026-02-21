import { useContext } from "react";
import { categories } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export const Categories = () => {
  const { navigate } = useContext(AppContext);

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-center gap-2 px-3 py-5 cursor-pointer rounded-lg"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-108 max-w-28 transition"
            />
            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
