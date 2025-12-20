'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSignIn = () => {
    router.push('/signin'); // navigate to SignIn page
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
    <Link href="/" className="text-2xl font-bold tracking-tighter luxury-font">
      <span className={isScrolled ? 'text-slate-900' : 'text-white'}>
        CHRONO
      </span>{' '}
      <span className="text-amber-600">LUX</span>
    </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium uppercase tracking-widest hover:text-amber-600 transition-colors ${
                pathname === link.path ? 'text-amber-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleSignIn}
            className="bg-slate-900 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-amber-600 transition-all"
          >
            Sign In
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
