import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-slate-100 aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button className="bg-white text-slate-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            Add to Bag
          </button>
        </div>
        {product.isFeatured && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            Featured
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-1">
          {product.brand}
        </p>
        <h3 className="text-base font-medium text-slate-800 mb-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-slate-900">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
