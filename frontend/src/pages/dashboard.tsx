import { Link } from 'react-router-dom';
import { 
  FileCheck2, 
  Trophy, 
  Target, 
  Flame, 
  ArrowRight, 
  Laptop, 
  Share2 
} from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    {
      title: 'Problems Solved',
      val: '0',
      change: '↑ 18% this week',
      icon: FileCheck2,
      bg: 'bg-[#EBF7F2]',
      iconColor: 'text-[#2C8562]'
    },
    {
      title: 'Contests Joined',
      val: '0',
      change: '↑ 7% this month',
      icon: Trophy,
      bg: 'bg-[#FEF6E9]',
      iconColor: 'text-[#D9822B]'
    },
    {
      title: 'Accuracy',
      val: '0%',
      change: '↑ 6% this week',
      icon: Target,
      bg: 'bg-[#EFF6FF]',
      iconColor: 'text-[#3182CE]'
    },
    {
      title: 'Current Streak',
      val: '0 days',
      change: 'Keep it up! 🔥',
      icon: Flame,
      bg: 'bg-[#F5F0FF]',
      iconColor: 'text-[#7C3AED]'
    },
  ];

  const topics = [
    {
      name: 'Arrays & Strings',
      level: 'DSA Basics',
      progress: 0,
      barColor: 'bg-[#2E7D62]',
      cardBg: 'bg-[#F2FAF6]',
      borderColor: 'border-[#DCEDE5]'
    },
    {
      name: 'Linked Lists',
      level: 'DSA Basics',
      progress: 0,
      barColor: 'bg-[#DF9734]',
      cardBg: 'bg-[#FFFBF2]',
      borderColor: 'border-[#F8ECCF]'
    },
    {
      name: 'Recursion',
      level: 'Advanced',
      progress: 0,
      barColor: 'bg-[#3B82F6]',
      cardBg: 'bg-[#F4F9FF]',
      borderColor: 'border-[#E0EEFD]'
    },
    {
      name: 'Trees',
      level: 'Advanced',
      progress: 0,
      barColor: 'bg-[#8B5CF6]',
      cardBg: 'bg-[#FAF7FF]',
      borderColor: 'border-[#EDE5FC]'
    },
  ];

  return (
    <div className="space-y-7 max-w-5xl">
      {/* Hero Banner with hand-drawn aesthetic */}
      <div className="bg-[#FAF8F3] border border-[#ECEAE0] rounded-3xl p-8 relative overflow-hidden shadow-xs">
        <div className="max-w-md space-y-4">
          <h1 className="font-handwriting text-4xl sm:text-5xl text-[#1E293B] font-bold tracking-tight leading-tight">
            Practice Problems. <br />
            <span className="relative inline-block">
              Master DSA.
              {/* Subtle underline sketch effect */}
              <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-[#F8D27C] rounded-full -rotate-1"></span>
            </span>
          </h1>
          <p className="text-[#64748B] text-sm font-medium">
            The all-in-one platform to crack interviews and build strong logic.
          </p>
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 bg-[#1E4D40] hover:bg-[#163930] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95"
          >
            Start Practicing <ArrowRight size={16} />
          </Link>
        </div>

        {/* Decorative Right Illustration Area */}
        <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="p-3 bg-white border border-[#E2DFD2] rounded-xl shadow-xs">
              <Share2 size={24} className="text-[#64748B]" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Visualize</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="p-5 bg-white border border-[#E2DFD2] rounded-2xl shadow-xs">
              <Laptop size={44} className="text-[#1E4D40]" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Practice</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="p-3 bg-white border border-[#E2DFD2] rounded-xl shadow-xs">
              <Target size={24} className="text-[#D9822B]" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Achieve</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white border border-[#ECEAE0] rounded-2xl p-4.5 shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.iconColor}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-[#64748B]">{stat.title}</span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-[#1E293B]">{stat.val}</div>
                <div className="text-[11px] font-semibold text-[#64748B]">{stat.change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Learning Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-handwriting text-2xl font-bold text-[#1E293B]">
            Continue Learning
          </h2>
          <Link to="/learn" className="text-xs font-bold text-[#1E4D40] hover:underline inline-flex items-center gap-1">
            View All <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((t, idx) => (
            <div
              key={idx}
              className={`${t.cardBg} border ${t.borderColor} rounded-2xl p-4.5 space-y-4 shadow-2xs hover:shadow-sm transition-all`}
            >
              {/* Concept Mini Diagram Preview */}
              <div className="h-14 flex items-center justify-center border-b border-black/5 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold opacity-60">
                  <span className="px-1.5 py-0.5 border border-current rounded">0</span>
                  <span>→</span>
                  <span className="px-1.5 py-0.5 border border-current rounded">1</span>
                  <span>→</span>
                  <span className="px-1.5 py-0.5 border border-current rounded">2</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-[#1E293B]">{t.name}</h3>
                <p className="text-[11px] font-semibold text-[#64748B]">{t.level}</p>
              </div>

              {/* Custom Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${t.barColor} h-full rounded-full transition-all`}
                    style={{ width: `${t.progress}%` }}
                  />
                </div>
                <div className="text-right text-[11px] font-bold text-[#64748B]">
                  {t.progress}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};