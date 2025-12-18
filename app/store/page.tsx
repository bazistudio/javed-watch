"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ShopPage() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Classic", "Sport", "Luxury", "Automatic"];

  const filteredProducts =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold luxury-font mb-4">The Collection</h1>
          <p className="text-slate-500 max-w-lg mx-auto">
            Browse our complete catalog of professional, dress, and avant-garde timepieces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                filter === cat
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 italic">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
