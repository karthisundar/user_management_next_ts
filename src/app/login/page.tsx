// app/login/page.tsx
'use client'; 

import { useState } from 'react';
import mysql2 from 'mysql2';
console.log('mysql2 loaded:', !!mysql2);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with actual auth logic
    console.log({ email, password } );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <br />
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
