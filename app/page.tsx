import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./data/products";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Watch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 animate-fade-in">
              Established 1994
            </p>
            <h1 className="text-6xl md:text-8xl font-bold luxury-font leading-tight mb-8">
              The Essence of <br />
              <span className="italic">Timeless</span> Luxury
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
              Explore our curated collection of masterfully crafted timepieces
              that transcend generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/store"
                className="bg-amber-600 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-all text-center"
              >
                Discover Collection
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-2">
                Curated selection
              </p>
              <h2 className="text-4xl md:text-5xl font-bold luxury-font">
                Featured Editions
              </h2>
            </div>
            <Link
              href="/store"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all"
            >
              View All Timepieces
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop"
              alt="Watchmaking"
              className="w-full shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-8 hidden md:block">
              <p className="text-3xl font-bold luxury-font">30+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">
                Years of Excellence
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold luxury-font mb-8">
              Horological Mastery
            </h2>
            <p className="text-slate-400 mb-8 leading-loose italic text-lg">
              "We don't just sell watches; we preserve time. Every tick of a
              ChronoLux timepiece is a testament to the artisans who dedicated
              hundreds of hours to its perfection."
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3">
                <span className="text-amber-500">✔</span>
                <span className="text-sm font-medium tracking-wide">
                  Swiss-Certified Movements
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-amber-500">✔</span>
                <span className="text-sm font-medium tracking-wide">
                  Limited Edition Artisan Series
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-amber-500">✔</span>
                <span className="text-sm font-medium tracking-wide">
                  Lifetime Concierge Service
                </span>
              </li>
            </ul>
            <button className="text-amber-500 font-bold uppercase tracking-widest text-xs border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
              Learn about our craftsmanship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
