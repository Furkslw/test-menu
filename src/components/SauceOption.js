// components/SauceOption.js
export default function SauceOption({ name, description, img, color }) {
  return (
    <div
      className="bg-cover bg-center text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${img})`, height: '150px', width: '150px' }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg p-2 text-center w-full">
        <h3 className="font-bold" style={{ color: color }}>{name}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
}
