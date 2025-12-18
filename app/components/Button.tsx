type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({ text, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded hover:opacity-90"
    >
      {text}
    </button>
  );
}
