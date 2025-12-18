type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="border rounded p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-gray-600">Rs {price}</p>
      <button className="mt-2 w-full bg-green-600 text-white py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}
