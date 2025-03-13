import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const categories = [
    'BIRTHDAY',
    'OCCASIONS',
    'ANNIVERSARY',
    'CAKES',
    'FLOWERS',
    'PERSONALISED',
    'PLANTS',
    'CHOCOLATES',
    'COMBOS',
    'LIFESTYLE',
    'GLOBAL',
    'ON TREND'
  ];

  return (
    <nav className="w-full">
      <div className="bg-[#ED6E61] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/src/assets/Gift Ginnie.png" alt="Gift Ginnie" className="h-12" />

          <div className="flex-1 max-w-xl bg-white mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Personalised Gifts"
                className="w-full px-4 py-2 rounded-md text-gray-800"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>
          <div className="flex items-center text-[#1A1A1A]">
            <div className="flex items-center mr-4">
              <ShoppingCart size={24} />
              <span className="ml-2">Cart</span>
            </div>
            <div className="flex items-center">
              <User size={24} />
              <span className="ml-2">Hi Guest</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="container mx-auto">
          <ul className="flex justify-between px-4 py-2">
            {categories.map((category) => (
              <li key={category} className="text-sm hover:text-[#8B8F4E] cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;