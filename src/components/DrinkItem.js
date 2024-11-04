// components/DrinkItem.js
export default function DrinkItem({ name, price }) {
    return (
      <div className="flex justify-between text-black  p-4 ">
        <span>{name}</span>
        <span>{price}₺</span>
      </div>
    );
  }
  