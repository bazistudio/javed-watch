'use client';

import { useState } from 'react';

const initialProducts = [
  {
    id: '1',
    name: 'Heritage Chronograph',
    price: 2450,
    category: 'Classic',
  },
  {
    id: '2',
    name: 'Ocean Diver 300',
    price: 3100,
    category: 'Sport',
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-t">
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4 space-x-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-slate-400">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
