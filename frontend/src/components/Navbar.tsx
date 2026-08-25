import { useState, useEffect } from 'react';
import { Search, Bell, User, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="h-16 bg-[#F8F7F2]/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-[#ECEAE2] dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-20 transition-colors">
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-[#F1EFEA] dark:bg-slate-800 border border-[#E4E1D7] dark:border-slate-700 rounded-xl px-3 py-1.5 w-72 focus-within:border-[#1E4D40] dark:focus-within:border-emerald-400 transition">
        <Search size={16} className="text-[#8C9AA8] dark:text-slate-400" />
        <input
          type="text"
          placeholder="Search algorithms, topics..."
          className="bg-transparent text-xs text-[#2D3748] dark:text-slate-200 placeholder-[#8C9AA8] dark:placeholder-slate-400 focus:outline-none w-full"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Dark / Light Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          title={isDark ? "Switch to Warm Light Mode" : "Switch to Dark Mode"}
          className="p-2 text-[#64748B] dark:text-slate-300 hover:text-[#1E293B] hover:bg-[#EFECE1] dark:hover:bg-slate-800 rounded-xl transition flex items-center justify-center"
        >
          {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <button
          title="Notifications"
          className="p-2 text-[#64748B] dark:text-slate-300 hover:text-[#1E293B] hover:bg-[#EFECE1] dark:hover:bg-slate-800 rounded-xl transition"
        >
          <Bell size={18} />
        </button>

        {/* Sign In Link */}
        <Link
          to="/auth"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1E4D40] dark:bg-emerald-600 hover:bg-[#163930] dark:hover:bg-emerald-500 text-white text-xs font-bold transition shadow-xs"
        >
          <User size={15} />
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
};