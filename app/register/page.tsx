'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Register with:', { name, email, password });
    alert('Registration submitted!');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center luxury-font">Register</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
        >
          Register
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/signin" className="text-amber-600 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
