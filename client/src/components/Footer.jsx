import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 md:px-10 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Parliament International School Logo"
                className="h-12 w-auto object-contain"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
              <div className="size-10 hidden bg-primary rounded-lg items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">school</span>
              </div>
              <h2 className="text-xl font-black tracking-tight leading-tight">Parliament<br/><span className="text-primary text-base font-bold">International School</span></h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to fostering an environment where every student can achieve excellence and become a compassionate global leader.
            </p>
            <div className="flex gap-3">
              <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all text-slate-300 hover:text-white">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all text-slate-300 hover:text-white">
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><Link to="/why-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/academics" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/campus-life" className="hover:text-primary transition-colors">Campus Life</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">News & Blog</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100">Portals</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><Link to="/login/student" className="hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link to="/login/parent" className="hover:text-primary transition-colors">Parent Portal</Link></li>
              <li><Link to="/login/staff" className="hover:text-primary transition-colors">Staff Gateway</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">New Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <span>1 Parliament International School,<br/>Innovation District, Abuja</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <span>admissions@parliament-intl.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>&copy; 2024 Parliament International School. Forging Leaders.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(l => (
              <a key={l} href="#" className="hover:text-slate-300 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
