import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { value: '98%', label: 'University Placement Rate', icon: 'school' },
  { value: '8+', label: 'Years of Excellence', icon: 'history_edu' },
  { value: '2,400+', label: 'Current Students', icon: 'groups' },
  { value: '39+', label: 'Expert Faculty Members', icon: 'psychology' },
];

const reasons = [
  {
    icon: 'psychology',
    color: 'blue',
    title: 'Future-Proof Curriculum',
    desc: 'Our dynamic syllabi are reviewed annually by industry leaders and academics. We focus on critical thinking, AI-literacy, financial intelligence, and emotional resilience — skills that outlast any technology shift.',
  },
  {
    icon: 'public',
    color: 'amber',
    title: 'Global Perspective',
    desc: 'Through international exchange programs in 12 countries, MUN conferences, and foreign language immersion tracks, students graduate as culturally fluent global citizens ready for the world stage.',
  },
  {
    icon: 'verified',
    color: 'emerald',
    title: 'Elite University Placement',
    desc: 'Our dedicated college counseling team begins working with students from Grade 9. With personalized roadmaps, essay coaching, and alumni networks, 98% of graduates enter top-tier universities worldwide.',
  },
  {
    icon: 'self_improvement',
    color: 'purple',
    title: 'Holistic Development',
    desc: 'We believe excellence is not just academic. Our structured co-curricular program ensures every student develops leadership, empathy, physical fitness, and creative expression alongside their studies.',
  },
  {
    icon: 'devices',
    color: 'cyan',
    title: 'State-of-the-Art Technology',
    desc: 'Every classroom is a smart classroom. Students have access to 3D printers, a robotics lab, a dedicated coding suite, and high-speed internet throughout a fully connected 40-acre campus.',
  },
  {
    icon: 'security',
    color: 'rose',
    title: 'Safe & Nurturing Environment',
    desc: 'Campus security runs 24/7 with CCTV, biometric access, and a dedicated student welfare team. We maintain a strict zero-tolerance policy on bullying and prioritize every student\'s mental health.',
  },
];

const testimonials = [
  {
    name: 'Mrs. Adaeze Okafor',
    role: 'Parent of a Grade 11 Student',
    quote: 'Parliament International School transformed my daughter from a shy, uncertain girl into a confident young leader. The teachers genuinely care about each child as an individual.',
    initials: 'AO',
    color: 'bg-purple-500',
  },
  {
    name: 'Chukwuemeka Eze',
    role: 'Alumni — Now at MIT',
    quote: "The critical thinking skills I developed at Parliament International School made university feel manageable. I was more prepared than most of my peers from day one.",
    initials: 'CE',
    color: 'bg-primary',
  },
  {
    name: 'Mr. Babatunde Fashola',
    role: 'Parent of Two Students',
    quote: "Both my children attend Parliament International School and the difference in their confidence, discipline, and academic performance has been remarkable. Worth every kobo.",
    initials: 'BF',
    color: 'bg-emerald-500',
  },
];

const colorMap = {
  blue: 'bg-blue-50 text-blue-600',
  amber: 'bg-amber-50 text-amber-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  rose: 'bg-rose-50 text-rose-500',
};

export default function WhyUsPage() {
  return (
    <div className="bg-white font-display">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/picture1.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-slate-950/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-6">Why Choose Us</span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            Parliament International School <span className="text-accent">Difference</span>
          </h1>
          <p className="text-blue-100 text-xl font-light max-w-2xl mx-auto">
            Not every school is equal. Discover what separates a good education from a life-changing one.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="material-symbols-outlined text-accent text-3xl mb-2 block">{s.icon}</span>
              <div className="text-white text-4xl font-black">{s.value}</div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Six Reasons Parents Choose Parliament International School</h2>
          <p className="text-slate-500 text-lg">Our pillars of excellence, built over 8+ years of shaping future leaders.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100/80 hover:-translate-y-2 transition-transform duration-300">
              <div className={`size-14 ${colorMap[r.color]} rounded-xl flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined text-3xl">{r.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">What Our Community Says</h2>
            <p className="text-slate-500 text-lg">Real words from parents, students, and alumni.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
                <span className="material-symbols-outlined text-4xl text-slate-200">format_quote</span>
                <p className="text-slate-700 leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className={`size-12 ${t.color} rounded-full flex items-center justify-center text-white font-black`}>{t.initials}</div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Experience the Difference?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Schedule a campus tour and see firsthand why thousands of families trust Parliament International School.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/admissions" className="h-14 px-8 bg-accent text-slate-900 rounded-xl font-black hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
            Apply Now <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link to="/admissions" className="h-14 px-8 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center">
            Book a School Tour
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
