'use client';
import React, { useState } from 'react';

const ForgotPasswordPage: React.FC = () => {
  const [step, setStep] = useState<'email' | 'pin' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [generatedPin, setGeneratedPin] = useState('');

  // Step 1: submit email
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simulate sending PIN
    const newPin = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedPin(newPin);
    console.log('Sent PIN to email:', newPin);
    setStep('pin');
  };

  // Step 2: verify PIN
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === generatedPin) {
      setStep('reset');
    } else {
      alert('Enter valid PIN!');
    }
  };

  // Step 3: reset password
  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password reset successful!');
    setEmail('');
    setPin('');
    setStep('email');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center luxury-font">Forgot Password</h2>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-6 focus:ring-1 focus:ring-amber-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
            >
              Send Reset PIN
            </button>
          </form>
        )}

        {step === 'pin' && (
          <form onSubmit={handlePinSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center luxury-font">Enter PIN</h2>
            <input
              type="text"
              required
              placeholder="Enter the PIN sent to your email"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-6 focus:ring-1 focus:ring-amber-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all"
            >
              Verify PIN
            </button>
          </form>
        )}

        {step === 'reset' && (
          <form onSubmit={handleResetSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center luxury-font">Create New Password</h2>
            <input
              type="password"
              required
              placeholder="New password"
              className="w-full border px-4 py-2 rounded mb-4 focus:ring-1 focus:ring-amber-500 outline-none"
            />
            <input
              type="password"
              required
              placeholder="Confirm password"
              className="w-full border px-4 py-2 rounded mb-6 focus:ring-1 focus:ring-amber-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 font-bold uppercase tracking-widest hover:bg-amber-700 transition-all"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
