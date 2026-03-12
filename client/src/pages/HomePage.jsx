import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getTopNews } from '../data/newsData';

const slides = [
  {
    bg: '/picture1.jpg',
    badge: 'Admissions Open 2024',
    title: 'Give Your Child the Unfair Advantage.',
    titleHighlight: 'Unfair Advantage.',
    subtitle: "World-class academics, elite facilities, and a network of future innovators. We don't just teach; we forge tomorrow's global leaders.",
    cta: [
      { label: 'Secure Your Spot', icon: 'arrow_forward', variant: 'primary', to: '/admissions' },
      { label: 'Why Choose Us', variant: 'ghost', to: '/why-us' }
    ]
  },
  {
    bg: '/picture2.jpg',
    title: 'Cultivating Brilliance in Every Student.',
    subtitle: "Our award-winning STEM and Arts programs ensure your child discovers their true passion and masters it.",
    cta: [{ label: 'Explore Curriculum', variant: 'accent', to: '/academics' }]
  },
  {
    bg: '/picture3.jpg',
    title: 'A Legacy of Excellence.',
    subtitle: "Join a community where 98% of graduates are accepted into top-tier universities worldwide.",
    cta: [{ label: 'View Admissions', variant: 'primary', to: '/admissions' }, { label: 'Campus Life', variant: 'ghost', to: '/campus-life' }]
  }
];

const valueProps = [
  { icon: 'psychology', color: 'blue', title: 'Future-Proof Curriculum', desc: 'Our dynamic syllabi focus on critical thinking, AI-literacy, and emotional intelligence—skills immune to automation.', to: '/academics' },
  { icon: 'public', color: 'amber', title: 'Global Perspective', desc: 'With international exchange programs and foreign language immersion, your child will graduate as a true global citizen.', to: '/campus-life' },
  { icon: 'verified', color: 'emerald', title: 'Elite University Placement', desc: 'Our dedicated guidance counselors work 1-on-1 to craft applications that secure top university placements.', to: '/why-us' }
];

const portals = [
  { role: 'student', icon: 'person', colorClass: 'text-primary', borderHover: 'hover:border-primary', label: 'Student Portal', desc: 'Access assignments, grades, and library.' },
  { role: 'parent', icon: 'family_restroom', colorClass: 'text-purple-500', borderHover: 'hover:border-purple-500', label: 'Parent Portal', desc: 'Track progress, pay fees, and calendar.' },
  { role: 'staff', icon: 'work', colorClass: 'text-emerald-500', borderHover: 'hover:border-emerald-500', label: 'Staff Gateway', desc: 'Manage classes, attendance, and resources.' },
];

const partners = [
  {
    name: 'NAPPS',
    fullName: 'National Association of Proprietors of Private Schools',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/NAPPS_logo.png/200px-NAPPS_logo.png',
    fallbackLetter: 'N',
    fallbackColor: 'bg-green-700',
  },
  {
    name: 'NECO',
    fullName: 'National Examinations Council',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/National_Examinations_Council_%28NECO%29_logo.png/200px-National_Examinations_Council_%28NECO%29_logo.png',
    fallbackLetter: 'N',
    fallbackColor: 'bg-green-600',
  },
  {
    name: 'WAEC',
    fullName: 'West African Examinations Council',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/West_African_Examinations_Council_logo.png/200px-West_African_Examinations_Council_logo.png',
    fallbackLetter: 'W',
    fallbackColor: 'bg-blue-700',
  },
  {
    name: 'JAMB',
    fullName: 'Joint Admissions and Matriculation Board',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/JAMB_logo.png/200px-JAMB_logo.png',
    fallbackLetter: 'J',
    fallbackColor: 'bg-blue-800',
  },
  {
    name: 'NMC',
    fullName: 'Nigerian Medical Council',
    logo: null,
    fallbackLetter: 'N',
    fallbackColor: 'bg-red-700',
  },
  {
    name: 'STAN',
    fullName: 'Science Teachers Association of Nigeria',
    logo: null,
    fallbackLetter: 'S',
    fallbackColor: 'bg-purple-700',
  },
  {
    name: 'NUT',
    fullName: "Nigeria Union of Teachers",
    logo: null,
    fallbackLetter: 'N',
    fallbackColor: 'bg-orange-600',
  },
];

function PartnershipsCarousel() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;
  const maxIndex = partners.length - visibleCount;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">
            Our Academic And<br />Professional Partnerships
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          {/* Prev button */}
          <button onClick={prev} disabled={current === 0}
            className="flex-shrink-0 size-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          {/* Cards window */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current} * (25% + 4px)))` }}>
              {partners.map((p) => (
                <div key={p.name}
                  className="flex-shrink-0 w-[calc(25%-12px)] bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-6 gap-3 aspect-square">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="w-20 h-20 object-contain"
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : null}
                  <div className={`${p.fallbackColor} size-20 rounded-full flex items-center justify-center text-white font-black text-2xl ${p.logo ? 'hidden' : 'flex'}`}>
                    {p.fallbackLetter}
                  </div>
                  <div className="text-center">
                    <p className="font-black text-slate-900 text-sm">{p.name}</p>
                    <p className="text-slate-400 text-[10px] leading-tight mt-0.5">{p.fullName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button onClick={next} disabled={current >= maxIndex}
            className="flex-shrink-0 size-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`size-2 rounded-full transition-all ${i === current ? 'bg-primary w-5' : 'bg-slate-300 hover:bg-slate-400'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const topNews = getTopNews(4);
  const heroArticle = topNews[0];
  const sideArticles = topNews.slice(1, 4);

  const goTo = (i) => { setCurrent(i); resetInterval(); };
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
  };
  useEffect(() => { resetInterval(); return () => clearInterval(intervalRef.current); }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-display">
      <Navbar />

      {/* ── HERO SLIDER ── */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-slate-900 overflow-hidden">
        {slides.map((slide, i) => (
          <div key={i} className={`slide absolute inset-0 w-full h-full ${i === current ? 'active' : ''}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.bg}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
            <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10">
              <div className="slide-content max-w-2xl flex flex-col gap-6">
                {slide.badge && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm w-fit">
                    <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">{slide.badge}</span>
                  </div>
                )}
                <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-lg">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {slide.cta.map((btn, bi) => (
                    <Link key={bi} to={btn.to}
                      className={`h-14 px-8 rounded-xl font-bold transition-all flex items-center gap-2
                        ${btn.variant === 'primary' ? 'bg-primary text-white shadow-lg shadow-primary/40 hover:scale-[1.03]' : ''}
                        ${btn.variant === 'accent' ? 'bg-accent text-slate-900 shadow-lg shadow-accent/40 hover:scale-[1.03]' : ''}
                        ${btn.variant === 'ghost' ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30' : ''}
                      `}>
                      {btn.label} {btn.icon && <span className="material-symbols-outlined">{btn.icon}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${i === current ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'}`} />
          ))}
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-3">Why Choose Parliament International School?</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">An Education That Pays Dividends for a Lifetime</h3>
          <p className="mt-4 text-slate-600 text-lg">We don't just prepare students for exams; we prepare them for life.</p>
          <Link to="/why-us" className="inline-flex items-center gap-2 mt-6 text-primary font-bold text-sm hover:gap-3 transition-all">
            Discover the full story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((v, i) => (
            <Link key={i} to={v.to} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 block">
              <div className={`size-14 rounded-xl flex items-center justify-center mb-6
                ${v.color === 'blue' ? 'bg-blue-50 text-primary' : v.color === 'amber' ? 'bg-amber-50 text-amber-500' : 'bg-emerald-50 text-emerald-600'}`}>
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4">{v.desc}</p>
              <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PORTALS ── */}
      <section className="bg-slate-50 py-20 px-6 md:px-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Seamless Digital Experience</h2>
              <p className="text-slate-500 text-lg mt-1">Everything you need, centralized in one secure location.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portals.map((p) => (
              <Link key={p.role} to={`/login/${p.role}`}
                className={`group relative overflow-hidden flex flex-col p-6 rounded-2xl bg-white border-2 border-slate-200 ${p.borderHover} hover:shadow-2xl transition-all duration-300`}>
                <span className={`material-symbols-outlined text-4xl ${p.colorClass} mb-4`}>{p.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{p.label}</h3>
                <p className="text-sm text-slate-500 mb-6">{p.desc}</p>
                <span className={`mt-auto ${p.colorClass} text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Login <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </Link>
            ))}
            <Link to="/admissions"
              className="group relative overflow-hidden flex flex-col p-6 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl mb-4 text-accent">how_to_reg</span>
              <h3 className="text-lg font-bold mb-1">New Admissions</h3>
              <p className="text-sm text-blue-100 mb-6">Begin your child's journey with us today.</p>
              <span className="mt-auto text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWS & BLOG ── */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">News & Blog</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              What's Happening at <span className="text-primary">Parliament International School</span>
            </h3>
            <p className="mt-2 text-slate-500">Sorted by engagement — the stories our community cares about most.</p>
          </div>
          <Link to="/news" className="flex items-center gap-2 text-sm font-bold text-primary border-2 border-primary px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all flex-shrink-0">
            View All Articles <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {heroArticle && (
          <div className="flex flex-col gap-6">
            {/* Hero news card */}
            <Link to={`/news/${heroArticle.id}`}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${heroArticle.image}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent"></div>
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end min-h-[360px] md:min-h-[420px]">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className={`${heroArticle.tagColor} text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider`}>{heroArticle.tag}</span>
                  <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">local_fire_department</span>#1 TRENDING
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-3 group-hover:text-accent transition-colors max-w-3xl">{heroArticle.title}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">{heroArticle.excerpt}</p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`size-9 ${heroArticle.authorColor} rounded-xl flex items-center justify-center text-white font-black text-sm`}>{heroArticle.authorInitials}</div>
                    <div>
                      <p className="text-white font-bold text-sm">{heroArticle.author}</p>
                      <p className="text-slate-400 text-xs">{heroArticle.date} · {heroArticle.readTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">visibility</span>{(heroArticle.views/1000).toFixed(1)}k</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">favorite</span>{heroArticle.likes}</span>
                    <span className="bg-white/10 hover:bg-primary text-white px-4 py-2 rounded-xl font-bold text-sm transition-colors flex items-center gap-1.5">
                      Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* 3 smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sideArticles.map((article, idx) => (
                <Link key={article.id} to={`/news/${article.id}`}
                  className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-40 bg-slate-200 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-3 left-3 flex gap-1.5 items-center">
                      <span className="bg-slate-900/70 text-white text-xs font-black px-2 py-0.5 rounded-full backdrop-blur-sm">#{idx + 2}</span>
                      <span className={`${article.tagColor} text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase`}>{article.tag}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{article.categoryLabel}</p>
                    <h4 className="font-black text-slate-900 text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3 flex-1">{article.title}</h4>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className={`size-6 ${article.authorColor} rounded-md flex items-center justify-center text-white font-black text-[9px]`}>{article.authorInitials}</div>
                        <span className="text-xs text-slate-500 font-medium truncate max-w-[100px]">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">visibility</span>{article.views >= 1000 ? `${(article.views/1000).toFixed(1)}k` : article.views}</span>
                        <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">favorite</span>{article.likes}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick category links */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { label: 'WAEC Updates', to: '/news', color: 'bg-red-50 text-red-600 border-red-200' },
                { label: 'Sports News', to: '/news', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                { label: "Principal's Desk", to: '/news', color: 'bg-blue-50 text-primary border-blue-200' },
                { label: 'Student Voice', to: '/news', color: 'bg-purple-50 text-purple-700 border-purple-200' },
                { label: "Founder's Vision", to: '/news', color: 'bg-slate-100 text-slate-700 border-slate-300' },
              ].map(q => (
                <Link key={q.label} to={q.to}
                  className={`text-xs font-bold px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5 ${q.color}`}>
                  {q.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── PARTNERSHIPS ── */}
      <PartnershipsCarousel />

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/picture2.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/50 font-bold text-sm tracking-widest uppercase mb-6">Don't Leave Their Future to Chance</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">The First Step Toward a<br className="hidden md:block" /> Remarkable Future Begins Here.</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl font-light">Spaces for the upcoming academic year are strictly limited. Secure your child's position at the most prestigious academy in the region.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/admissions" className="h-16 px-10 bg-accent hover:bg-yellow-400 text-slate-900 rounded-xl font-black text-lg shadow-2xl shadow-accent/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Start Application <span className="material-symbols-outlined">description</span>
            </Link>
            <Link to="/admissions" className="h-16 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold text-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center">
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
