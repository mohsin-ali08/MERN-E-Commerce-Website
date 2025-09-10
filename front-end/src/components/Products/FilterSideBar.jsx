import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParam] = useSearchParams("");
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Gray",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Wool", "Silk", "Denim"];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParam]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 1000,
    });
    setPriceRange([params.minPrice || 0, params.maxPrice || 1000]);
  }, [searchParam]);


  

  return (
    <div className="w-64 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 sticky top-20 h-[90vh] overflow-y-auto transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
        Filters
      </h2>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">
          Category
        </label>
        {categories.map((category) => (
          <div
            key={category}
            className="flex items-center mb-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={filter.category === category}
              className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <span className="text-gray-700 group-hover:text-blue-600 transition">
              {category}
            </span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">
          Gender
        </label>
        {genders.map((g) => (
          <div
            key={g}
            className="flex items-center mb-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="gender"
              value={g}
              checked={filter.gender === g}
              className="mr-3 h-4 w-4 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
            />
            <span className="text-gray-700 group-hover:text-pink-600 transition">
              {g}
            </span>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">Colors</label>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((c) => (
            <div
              key={c}
              className="w-8 h-8 rounded-full border cursor-pointer shadow hover:scale-110 transition"
              style={{ backgroundColor: c.toLowerCase() }}
            ></div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">Sizes</label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <span
              key={s}
              className={`px-3 py-1 rounded-lg text-sm font-medium border shadow-sm cursor-pointer transition ${
                filter.size.includes(s)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">
          Materials
        </label>
        {materials.map((m) => (
          <div
            key={m}
            className="flex items-center mb-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              value={m}
              checked={filter.material.includes(m)}
              className="mr-3 h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
            />
            <span className="text-gray-700 group-hover:text-green-600 transition">
              {m}
            </span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-gray-700 font-semibold mb-3">
          Price Range
        </label>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterSideBar;
