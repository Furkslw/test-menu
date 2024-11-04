import Image from "next/image";

export default function DrinkItem({ name, img, price }) {
  return (
    <div className="flex items-center justify-between border-b h-16 border-gray-200 pb-3 px-4 bg-white rounded-md">
      <div className="flex items-center justify-center">
        <Image src={img} alt={name} className=" rounded-md  mr-3 object-cover" width={50} height={50}/>
        <span className="text-lg font-medium text-gray-500">{name}</span>
      </div>
      <span className="text-lg  text-gray-500">{price}₺</span>
    </div>
  );
}
