// app/login/page.tsx
'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),  
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      alert(data.error || 'Login failed');
    } else {
      alert('Login successful!');
      // Redirect or store session here
    }
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-black border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>  
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
             className="w-full px-4 py-2 text-black border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
