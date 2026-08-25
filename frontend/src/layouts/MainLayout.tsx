import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F7F2] dark:bg-slate-950 text-[#2D3748] dark:text-slate-100 transition-colors">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};