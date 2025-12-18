'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignIn attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center luxury-font">Sign In</h2>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Forgot & Register Links */}
        <div className="flex justify-between mt-4 text-xs text-slate-500">
          <Link href="/forgot-password" className="hover:text-amber-600">
            Forgot Password?
          </Link>
          <Link href="/register" className="hover:text-amber-600">
            Register Now
          </Link>
        </div>

        {/* Google & Mobile Login Options */}
       <p className="text-center text-sm mt-4">
  Or sign in with{' '}
  <span className="font-bold text-blue-600 cursor-pointer hover:underline transition-all">
    Google
  </span>{' '}
  or{' '}
  <span className="font-bold text-green-600 cursor-pointer hover:underline transition-all">
    Mobile Number
  </span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
