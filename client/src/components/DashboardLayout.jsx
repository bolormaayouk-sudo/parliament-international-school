import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = {
  student: [
    { label: 'Overview', icon: 'dashboard', key: 'overview' },
    { label: 'My Grades', icon: 'grade', key: 'grades' },
    { label: 'Assignments', icon: 'assignment', key: 'assignments' },
    { label: 'Schedule', icon: 'calendar_today', key: 'schedule' },
    { label: 'Library', icon: 'menu_book', key: 'library' },
  ],
  parent: [
    { label: 'Overview', icon: 'dashboard', key: 'overview' },
    { label: 'My Children', icon: 'family_restroom', key: 'children' },
    { label: 'Fee Payments', icon: 'payments', key: 'fees' },
    { label: 'Calendar', icon: 'event', key: 'calendar' },
    { label: 'Messages', icon: 'mail', key: 'messages' },
  ],
  staff: [
    { label: 'Overview', icon: 'dashboard', key: 'overview' },
    { label: 'My Classes', icon: 'class', key: 'classes' },
    { label: 'Attendance', icon: 'how_to_reg', key: 'attendance' },
    { label: 'Assignments', icon: 'assignment', key: 'assignments' },
    { label: 'Reports', icon: 'bar_chart', key: 'reports' },
  ]
};

const roleColors = {
  student: 'bg-blue-600',
  parent: 'bg-purple-600',
  staff: 'bg-emerald-600'
};

export default function DashboardLayout({ children, activeKey }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };
  const items = navItems[user?.role] || [];
  const roleColor = roleColors[user?.role] || 'bg-primary';
  const initials = user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 font-display flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">school</span>
            </div>
            <div>
              <div className="text-white font-black text-sm">Parliament International School</div>
              <div className="text-slate-400 text-xs capitalize">{user?.role} Portal</div>
            </div>
          </Link>
        </div>

        {/* User Profile */}
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60">
            <div className={`size-10 ${roleColor} rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm truncate">{user?.name}</p>
              <p className="text-slate-400 text-xs capitalize">{user?.role} · {user?.studentId || user?.employeeId || 'Parliament International School'}</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          {items.map(item => (
            <button key={item.key}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
                ${activeKey === item.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}>
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-slate-800">
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-900/20 transition-all">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-600">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h1 className="text-slate-900 font-black text-lg capitalize">{user?.role} Dashboard</h1>
              <p className="text-slate-500 text-xs">Welcome back, {user?.name?.split(' ')[0]}!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative size-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
            <div className={`size-10 ${roleColor} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
              {initials}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
