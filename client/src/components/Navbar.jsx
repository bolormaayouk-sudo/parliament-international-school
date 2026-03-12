import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { label: 'Why Us?', to: '/why-us', icon: 'verified' },
  { label: 'Academics', to: '/academics', icon: 'menu_book' },
  { label: 'Campus Life', to: '/campus-life', icon: 'sports_soccer' },
  { label: 'News & Blog', to: '/news', icon: 'newspaper' },
  { label: 'Admissions', to: '/admissions', icon: 'how_to_reg' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLogout = () => { logout(); navigate('/'); };
  const roleColors = { student: 'bg-blue-600', parent: 'bg-purple-600', staff: 'bg-emerald-600' };
  const initials = user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <>
      <header className={`flex items-center justify-between bg-white/95 backdrop-blur-md px-5 md:px-10 py-3.5 sticky top-0 z-50 border-b border-slate-200 transition-shadow duration-300 font-display ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <img src="/logo.png" alt="Parliament International School Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          <div className="size-10 hidden items-center justify-center bg-primary text-white rounded-xl shadow-md group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all
                ${location.pathname === l.to
                  ? 'text-primary bg-blue-50'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}>
              {l.label}
              {location.pathname === l.to && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex gap-3 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <button onClick={() => navigate(`/dashboard/${user.role}`)}
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                Dashboard
              </button>
              <div onClick={() => navigate(`/dashboard/${user.role}`)}
                className={`size-9 ${roleColors[user.role] || 'bg-primary'} rounded-xl flex items-center justify-center text-white text-xs font-black cursor-pointer hover:opacity-90 transition-opacity`}>
                {initials}
              </div>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">login</span>
              Portal Login
            </Link>
          )}
          <Link to="/admissions"
            className="h-9 px-5 bg-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5 transition-all flex items-center gap-1.5">
            Apply Now
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex lg:hidden items-center gap-2">
          {user && (
            <div onClick={() => navigate(`/dashboard/${user.role}`)}
              className={`size-8 ${roleColors[user.role] || 'bg-primary'} rounded-lg flex items-center justify-center text-white text-xs font-black cursor-pointer`}>
              {initials}
            </div>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="size-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Toggle navigation menu">
            <span className="material-symbols-outlined text-[22px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      </div>

      {/* Slide-in Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col lg:hidden
        transition-transform duration-300 ease-in-out font-display
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
          
          <button onClick={() => setMenuOpen(false)}
            className="size-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Logged-in user banner */}
        {user && (
          <div className="mx-4 mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3 flex-shrink-0">
            <div className={`size-10 ${roleColors[user.role] || 'bg-primary'} rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
              {initials}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-slate-900 text-sm truncate">{user.name}</p>
              <p className="text-slate-500 text-xs capitalize">{user.role} Account</p>
            </div>
          </div>
        )}

        {/* Scrollable nav area */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 mt-1">Menu</p>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all
                ${location.pathname === l.to
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                }`}>
              <span className="material-symbols-outlined text-[20px]">{l.icon}</span>
              <span className="flex-1">{l.label}</span>
              {location.pathname !== l.to && (
                <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
              )}
            </Link>
          ))}

          <div className="my-3 border-t border-slate-100"></div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Login Portals</p>

          {[
            { label: 'Student Portal', to: '/login/student', icon: 'person', color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Parent Portal', to: '/login/parent', icon: 'family_restroom', color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Staff Gateway', to: '/login/staff', icon: 'work', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          ].map(p => (
            <Link key={p.to} to={p.to}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-all">
              <div className={`size-8 ${p.bg} ${p.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-[17px]">{p.icon}</span>
              </div>
              <span className="flex-1">{p.label}</span>
              <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
            </Link>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="px-4 pb-8 pt-3 border-t border-slate-100 flex flex-col gap-2 flex-shrink-0">
          {user ? (
            <>
              <button onClick={() => { navigate(`/dashboard/${user.role}`); setMenuOpen(false); }}
                className="w-full h-11 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-md shadow-primary/20">
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                Go to My Dashboard
              </button>
              <button onClick={handleLogout}
                className="w-full h-11 bg-red-50 text-red-600 border border-red-100 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
                <span className="material-symbols-outlined text-[18px]">logout</span>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/admissions" onClick={() => setMenuOpen(false)}
                className="w-full h-12 bg-primary text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                Apply Now
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}
                className="w-full h-11 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-[18px]">login</span>
                Portal Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
