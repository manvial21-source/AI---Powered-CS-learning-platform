import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end state handler: Later connected to FastAPI /auth/login or /auth/register
    console.log({ isLogin, name, email, password });
    navigate('/');
  };

  return (
    <div className=" min-h-[calc(100vh-8rem)] flex items-center justify-center py-6 px-4 ">
      <div className="w-full max-w-md bg-[#EBF5F0] dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 rounded-3xl p-8 shadow-xs space-y-6 transition-colors">
        {/* Brand & Tab Toggle */}
        <div className="text-center space-y-2">
         
          <h2 className="font-handwriting text-3xl font-bold text-[#1E293B] dark:text-slate-100">
            {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
          </h2>
          <p className="text-xs text-[#64748B] dark:text-slate-400 font-medium">
            {isLogin
              ? 'Enter your credentials to continue learning and practicing.'
              : 'Create an account to track DSA progress and get personalized AI hints.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#F1EFEA] dark:bg-slate-800 p-1 rounded-2xl border border-[#E4E1D7] dark:border-slate-700">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              isLogin
                ? 'bg-white dark:bg-slate-900 text-[#1E4D40] dark:text-emerald-400 shadow-xs'
                : 'text-[#64748B] dark:text-slate-400 hover:text-[#1E293B] dark:hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              !isLogin
                ? 'bg-white dark:bg-slate-900 text-[#1E4D40] dark:text-emerald-400 shadow-xs'
                : 'text-[#64748B] dark:text-slate-400 hover:text-[#1E293B] dark:hover:text-slate-200'
            }`}
          >
            Register
          </button>
        </div>

        <div className="bg-[#FAF8F3] dark:bg-slate-800/60 border border-[#ECEAE0] dark:border-slate-700/80 rounded-2xl p-3.5 text-center">
  <p className="font-ROMAN text-base text-[#1E4D40] dark:text-emerald-300 font-bold">
    “Recursion: To understand recursion, you must first log in here.”
  </p>
</div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1E293B] dark:text-slate-300">
                Full Name
              </label>
              <div className="flex items-center gap-2 bg-[#FAF8F3] dark:bg-slate-800/60 border border-[#ECEAE0] dark:border-slate-700 rounded-xl px-3.5 py-2.5 focus-within:border-[#1E4D40] dark:focus-within:border-emerald-400 transition">
                <User size={16} className="text-[#8C9AA8] dark:text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Alex Johnson"
                  className="bg-transparent text-xs text-[#2D3748] dark:text-slate-200 placeholder-[#8C9AA8] dark:placeholder-slate-500 focus:outline-none w-full"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1E293B] dark:text-slate-300">
              Email Address
            </label>
            <div className="flex items-center gap-2 bg-[#FAF8F3] dark:bg-slate-800/60 border border-[#ECEAE0] dark:border-slate-700 rounded-xl px-3.5 py-2.5 focus-within:border-[#1E4D40] dark:focus-within:border-emerald-400 transition">
              <Mail size={16} className="text-[#8C9AA8] dark:text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                className="bg-transparent text-xs text-[#2D3748] dark:text-slate-200 placeholder-[#8C9AA8] dark:placeholder-slate-500 focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1E293B] dark:text-slate-300">
              Password
            </label>
            <div className="flex items-center gap-2 bg-[#FAF8F3] dark:bg-slate-800/60 border border-[#ECEAE0] dark:border-slate-700 rounded-xl px-3.5 py-2.5 focus-within:border-[#1E4D40] dark:focus-within:border-emerald-400 transition">
              <Lock size={16} className="text-[#8C9AA8] dark:text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent text-xs text-[#2D3748] dark:text-slate-200 placeholder-[#8C9AA8] dark:placeholder-slate-500 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full mt-2 py-3 bg-[#1E4D40] hover:bg-[#163930] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <span>{isLogin ? 'Sign In to Workspace' : 'Create Free Account'}</span>
            <ArrowRight size={15} />
          </button>
        </form>

      </div>
    </div>
  );
};