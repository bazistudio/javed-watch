'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in data:', { email, password });
    // Handle authentication here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center luxury-font">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-600 transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-amber-600 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
