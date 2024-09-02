// components/Modal.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const Modal = ({ type, onClose }: { type: 'login' | 'signup'; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'login') {
      signIn("credentials", { email, password });
    } else {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        console.log('User created');
        onClose();
      } else {
        console.log('Error creating user');
      }
    }
  };

  return (
    <div className="modal ">
      <button onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
          </>
        )}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Modal;
