'use client';

import { useState } from 'react';

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Product:', form);
    alert('Product added (demo)');
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-3"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3"
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border p-3"
          onChange={e => setForm({ ...form, category: e.target.value })}
        />

        <button className="bg-slate-900 text-white px-6 py-3 text-sm hover:bg-amber-600">
          Add Product
        </button>
      </form>
    </div>
  );
}
