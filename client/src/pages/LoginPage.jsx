import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const roles = {
  student: { label: 'Student', icon: 'person', color: 'blue', email: 'student@parliament-intl.edu' },
  parent: { label: 'Parent', icon: 'family_restroom', color: 'purple', email: 'parent@parliament-intl.edu' },
  staff: { label: 'Staff', icon: 'work', color: 'emerald', email: 'staff@parliament-intl.edu' }
};

export default function LoginPage() {
  const { role: roleParam } = useParams();
  const [selectedRole, setSelectedRole] = useState(roleParam || 'student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/dashboard/${user.role}`);
  }, [user]);

  useEffect(() => {
    if (roleParam && roles[roleParam]) setSelectedRole(roleParam);
  }, [roleParam]);

  // Pre-fill demo credentials when role changes
  useEffect(() => {
    setEmail(roles[selectedRole].email);
    setPassword('demo1234');
  }, [selectedRole]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const loggedUser = await login(email, password);
      navigate(`/dashboard/${loggedUser.role}`);
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const roleConfig = roles[selectedRole];

  const colorMap = {
    blue: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', ring: 'focus:ring-blue-500' },
    purple: { bg: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', ring: 'focus:ring-purple-500' },
    emerald: { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', ring: 'focus:ring-emerald-500' }
  };
  const c = colorMap[roleConfig.color];

  return (
    <div className="min-h-screen bg-slate-50 font-display flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/90"></div>

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">school</span>
            </div>
            <span className="text-white font-black text-xl">Parliament International School <span className="text-accent">Academy</span></span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col gap-8">
          <div>
            <h1 className="text-white text-4xl font-black leading-tight mb-4">
              Welcome Back to<br/>Your Gateway to<br/><span className="text-accent">Excellence.</span>
            </h1>
            <p className="text-blue-100 text-lg font-light">Access your personalized portal and continue your journey toward greatness.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: '2,400+', label: 'Students' },
              { val: '98%', label: 'Uni. Placement' },
              { val: '8+', label: 'Years of Excellence' }
            ].map(s => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-white">{s.val}</div>
                <div className="text-xs text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-slate-400 text-sm">
          &copy; 2024 Parliament International School
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">school</span>
            </div>
            <span className="font-black text-slate-900">Parliament International School</span>
          </Link>

          <h2 className="text-3xl font-black text-slate-900 mb-1">Sign in to Portal</h2>
          <p className="text-slate-500 mb-8">Select your role and enter your credentials.</p>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {Object.entries(roles).map(([key, r]) => (
              <button key={key} onClick={() => setSelectedRole(key)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all font-semibold text-sm
                  ${selectedRole === key
                    ? `border-${r.color === 'blue' ? 'blue-600' : r.color === 'purple' ? 'purple-600' : 'emerald-600'} ${c.light} ${c.text}`
                    : 'border-slate-200 text-slate-500 hover:border-slate-300'
                  }`}>
                <span className="material-symbols-outlined text-2xl">{r.icon}</span>
                {r.label}
              </button>
            ))}
          </div>

          {/* Demo credentials hint */}
          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
            <span className="material-symbols-outlined text-amber-600 text-[20px] mt-0.5">info</span>
            <div className="text-sm">
              <p className="font-bold text-amber-800">Demo Mode</p>
              <p className="text-amber-700">Credentials pre-filled. Just click <strong>Sign In</strong>.</p>
              <p className="text-amber-600 mt-1">Make sure you've run the seed endpoint first.</p>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
              <span className="material-symbols-outlined text-red-500">error</span>
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 bg-white transition-all"
                  placeholder="you@parliament-intl.edu" required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
                <input
                  type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 bg-white transition-all"
                  placeholder="Enter your password" required
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <span className="material-symbols-outlined text-[20px]">{showPass ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full h-14 bg-primary text-white rounded-xl font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2">
              {loading ? (
                <><div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Signing In...</>
              ) : (
                <><span className="material-symbols-outlined">login</span> Sign In</>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            Need help accessing your account?{' '}
            <a href="mailto:support@parliament-intl.edu" className="text-primary font-bold hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
