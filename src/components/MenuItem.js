// components/MenuItem.js
export default function MenuItem({ title, img, sizes }) {

  return (
    <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 py-3 w-full">
      <div className="flex-shrink-0 w-full md:w-1/4 mb-3 md:mb-0">
        <img src={img} alt={title} className="w-full h-auto  bg-cover rounded" />
      </div>
      <div className="flex-1 px-4 w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
 
        <ul className="text-sm text-gray-500 space-y-1 w-full">
          {sizes.map((size, index) => (
            <li key={index} className="flex justify-between ">
              <span className="w-full max-w-64">{size.weight}</span>
              <span className="whitespace-nowrap text-end">{size.price} ₺</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
