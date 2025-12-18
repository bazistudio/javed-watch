"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold luxury-font mb-6 tracking-tighter">CHRONOLUX</h3>
            <p className="text-sm leading-relaxed mb-6">
              Curating the world's most exquisite timepieces for the discerning collector since 1994.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors">FB</a>
              <a href="#" className="hover:text-amber-500 transition-colors">IG</a>
              <a href="#" className="hover:text-amber-500 transition-colors">TW</a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-amber-500 transition-colors">Shop All</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Watch Care</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Join our elite circle for exclusive access to limited editions.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none px-4 py-2 text-sm focus:ring-1 focus:ring-amber-500 w-full"
              />
              <button className="bg-amber-600 text-white px-4 py-2 text-xs uppercase font-bold hover:bg-amber-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} ChronoLux. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
