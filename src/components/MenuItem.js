// components/MenuItem.js
export default function MenuItem({ title, sizes }) {
  // En düşük fiyatı bulma
  const minPrice = Math.min(...sizes.map(size => size.price));

  return (
    <div className="flex justify-between items-start border-b border-gray-200 py-3 w-full">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {sizes.map((size, index) => (
            <li key={index}>
              {size.weight} - {size.price} ₺
            </li>
          ))}
        </ul>
      </div>
      <span className=" text-lg font-semibold text-gray-800">{minPrice} ₺</span>
    </div>
  );
}
