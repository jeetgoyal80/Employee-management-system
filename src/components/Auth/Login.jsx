import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = ({ userhandle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    userhandle(email, password);
    toast.success("LogIn Successfully");
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1c1c1c] to-[#2e2e2e] px-4">
      <form
        onSubmit={submithandler}
        className="bg-[#2a2a2a] p-10 md:p-14 rounded-2xl shadow-xl w-full max-w-md text-white space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-400">Welcome Back</h2>
        <p className="text-sm text-center text-gray-400">Please login to your account</p>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Password</label>
          <input
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-2 rounded-full shadow-md"
        >
          Login
        </button>

        {/* <p className="text-sm text-center text-gray-500">Don't have an account? <span className="text-blue-400 cursor-pointer hover:underline">Sign up</span></p> */}
      </form>
    </div>
  );
};

export default Login;
