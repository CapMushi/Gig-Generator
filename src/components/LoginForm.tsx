'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = ({ onLoginSuccess }: { onLoginSuccess?: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });

    // Simulate successful login
    if (onLoginSuccess) {
      onLoginSuccess(); // uses parent-defined navigation
    } else {
      router.push('/'); // fallback navigation
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <div className="flex items-center border-b border-gray-300 py-2">
        <Image src="/icons/person.svg" alt="Email Icon" width={20} height={20} className="mr-3" />
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

      <div className="flex justify-between items-center text-sm text-blue-500">
        <a href="#" className="hover:underline">Forgot Password?</a>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
