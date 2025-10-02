import { useState } from "react";

export default function Menu({ mode }) {
  const category = ["Men", "Women", "Accessories", "DISCOUNT"];
  const [activeCategory, setActiveCategory] = useState("Men"); // default active

  return (
    <div
      className={`w-full h-full duration-150 px-12 py-4 ${
        mode ? "bg-white text-black" : "bg-slate-800 text-white"
      }`}
    >
      <h1 className="font-bold text-start text-3xl">
        Todays Best Deals For You
      </h1>

      {/* Large Menu */}
      <div className="lg:flex md:block sm:block space-x-5 space-y-2 justify-center gap-10 px-12 py-4 hidden">
        {category.map((item) => (
          <button
            key={item}
            onClick={() => setActiveCategory(item)}
            className={`px-4 py-2 border rounded-3xl cursor-pointer font-semibold transition-colors ${
              activeCategory === item
                ? mode
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-blue-400 text-white border-blue-400"
                : mode
                ? "bg-white text-black border-blue-800 hover:bg-blue-800 hover:text-white"
                : "bg-slate-600 text-white border-blue-400 hover:bg-blue-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Small Menu */}
      <div className="sm:hidden">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className={`w-full text-center outline-none rounded-3xl py-4 mt-2 cursor-pointer font-semibold
            border ${
              mode
                ? "bg-white text-black border-blue-800"
                : "bg-slate-600 text-white border-blue-400"
            }`}
        >
          {category.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
