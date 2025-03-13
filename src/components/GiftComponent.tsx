import { featuredGifts, giftItems } from "./data";

const CuratedGifts = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Thoughtfully Curated Gifts</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {featuredGifts.map((feat, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <img src={feat.image} alt={feat.title} className="w-full h-48 object-cover" />
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{feat.title}</h3>
              <p className="text-sm">{feat.subtitle}</p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded">GIFT NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {giftItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedGifts;
