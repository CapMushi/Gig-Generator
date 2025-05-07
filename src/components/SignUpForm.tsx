'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SignUpFormProps {
  onSubmit?: () => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ name, email, password });
    if (onSubmit) {
      onSubmit(); // trigger confirmation message in parent
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <div className="flex items-center border-b border-gray-300 py-2">
        <Image src="/icons/person.svg" alt="Name Icon" width={20} height={20} className="mr-3" />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent focus:outline-none w-full"
          required
        />
      </div>

      <div className="flex items-center border-b border-gray-300 py-2">
        <Image src="/icons/email.svg" alt="Email Icon" width={20} height={20} className="mr-3" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent focus:outline-none w-full"
          required
        />
      </div>

      <div className="flex items-center border-b border-gray-300 py-2">
        <Image src="/icons/lock.svg" alt="Password Icon" width={20} height={20} className="mr-3" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent focus:outline-none w-full"
          required
        />
      </div>

      <div className="flex items-center border-b border-gray-300 py-2">
        <Image src="/icons/lock.svg" alt="Confirm Password Icon" width={20} height={20} className="mr-3" />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-transparent focus:outline-none w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
