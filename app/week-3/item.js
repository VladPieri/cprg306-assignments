export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-200 flex justify-between items-center">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-600">x{quantity}</span>
      <span className="text-xs text-gray-500 italic">{category}</span>
    </li>
  );
}

