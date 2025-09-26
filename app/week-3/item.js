import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 mb-3 bg-gray-900 rounded-lg border border-gray-700">
      <div className="flex justify-between items-center">
        <span className="font-medium text-white text-lg">{name}</span>
      </div>
      <div className="text-gray-300 mt-1">
        Buy {quantity} in <span className="text-gray-400">{category}</span>
      </div>
    </li>
  );
};

export default Item;



