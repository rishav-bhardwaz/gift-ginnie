import React from "react";
import { motion } from "framer-motion";

type Category = {
  name: string;
  image: string;
  label?: string;
};

const categories: Category[] = [
  { name: "Holi", image: "/holi.jpg", label: "14th Mar" },
  { name: "Birthday", image: "/birthday.jpg" },
  { name: "2-Hour Delivery", image: "/delivery.jpg" },
  { name: "Ramadan", image: "/ramadan.jpg" },
  { name: "FNP Luxe", image: "/luxury.jpg" },
  { name: "Anniversary", image: "/anniversary.jpg" },
  { name: "Flowers", image: "/flowers.jpg" },
  { name: "Sweets", image: "/sweets.jpg" },
  { name: "Gift Hampers", image: "/hampers.jpg" },
];

const GiftFinder: React.FC = () => {
  return (
    <div className="bg-white p-10 shadow-md w-full overflow-hidden">
      <div className="flex justify-center gap-6 overflow-x-hidden">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 text-center cursor-pointer will-change-transform"
          >
            <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-lg">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              {category.label && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                  {category.label}
                </span>
              )}
            </div>
            <span className="text-base font-semibold text-gray-700">{category.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="bg-gray-100 p-6 shadow-lg rounded-lg flex flex-wrap gap-4 items-center w-full max-w-5xl">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="border p-3 rounded-md flex-1 min-w-[180px] text-gray-700 focus:ring-2 focus:ring-green-500"
          />
          <select className="border p-3 rounded-md flex-1 min-w-[200px] bg-white text-gray-700">
            <option>Birthday, Anniversary etc.</option>
          </select>
          <select className="border p-3 rounded-md flex-1 min-w-[200px] bg-white text-gray-700">
            <option>Flowers, Cakes, Plants, etc.</option>
          </select>
          <button className="bg-[#ED6E61] hover:bg-[#ED6E61] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all">
            FIND GIFTS
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-600 text-lg font-medium leading-relaxed">
        Celebrate Occasions with <span className="text-[#ED6E61] font-semibold">India's #1 Online Gift Store</span><br />
        Thoughtfully curated <span className="font-semibold">139,821 Gift Ideas</span>. Get <span className="font-semibold">2-Hour Delivery</span> & Free Shipping in India.
      </p>
    </div>
  );
};

export default GiftFinder;
