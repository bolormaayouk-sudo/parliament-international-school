import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const departments = [
  {
    key: 'stem',
    icon: 'science',
    color: 'blue',
    label: 'STEM',
    title: 'Science, Technology, Engineering & Mathematics',
    desc: 'Our STEM department is the flagship of Parliament International School. With a dedicated robotics lab, 3D printing studio, and AI elective in Grade 12, students graduate ready for the most in-demand careers of the future.',
    subjects: ['Advanced Mathematics', 'Further Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Robotics & AI', 'Data Science'],
    highlight: 'National Science Olympiad Champions — 3 consecutive years',
  },
  {
    key: 'arts',
    icon: 'palette',
    color: 'rose',
    label: 'Arts & Humanities',
    title: 'Arts, Languages & Humanities',
    desc: 'Creative intelligence is as vital as analytical thinking. Our Arts and Humanities curriculum develops storytellers, thinkers, diplomats, and communicators through a rich blend of subjects.',
    subjects: ['Literature in English', 'Fine Art', 'Music', 'Drama & Theatre', 'History', 'Government', 'French', 'Mandarin Chinese'],
    highlight: 'Over 40 students placed in top Law & Arts programs annually',
  },
  {
    key: 'business',
    icon: 'trending_up',
    color: 'emerald',
    label: 'Business & Economics',
    title: 'Business, Finance & Social Sciences',
    desc: 'We prepare tomorrow\'s entrepreneurs and economists. Students engage in real-world business simulations, stock market challenges, and economics debates that bring the curriculum to life.',
    subjects: ['Economics', 'Commerce', 'Accounting', 'Business Studies', 'Entrepreneurship', 'Financial Literacy', 'Geography', 'Sociology'],
    highlight: 'Annual Business Plan Competition with ₦500,000 prize pool',
  },
  {
    key: 'sports',
    icon: 'sports_soccer',
    color: 'amber',
    label: 'Sports & PE',
    title: 'Physical Education & Athletics',
    desc: 'Sport builds character. Our world-class sports facilities and experienced coaching staff develop discipline, teamwork, and resilience in every student.',
    subjects: ['Athletics', 'Football', 'Basketball', 'Swimming', 'Tennis', 'Volleyball', 'Table Tennis', 'Gymnastics'],
    highlight: 'State Champions in Football, Athletics & Swimming',
  },
];

const stages = [
  { stage: 'Pre-School', grades: 'Ages 3–5', icon: 'child_care', desc: 'Play-based learning that builds curiosity, social skills, and early literacy.' },
  { stage: 'Primary School', grades: 'Grades 1–6 · Ages 6–11', icon: 'menu_book', desc: 'Strong foundations in literacy, numeracy, science, and creative arts.' },
  { stage: 'Junior Secondary', grades: 'JSS 1–3 · Ages 11–14', icon: 'school', desc: 'Broad exploration of subjects preparing students for specialization.' },
  { stage: 'Senior Secondary', grades: 'SSS 1–3 · Ages 14–17', icon: 'workspace_premium', desc: 'Rigorous preparation for WAEC, NECO, SAT, and university entrance exams.' },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', active: 'bg-blue-600 text-white' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', active: 'bg-rose-500 text-white' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', active: 'bg-emerald-600 text-white' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', active: 'bg-amber-500 text-white' },
};

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState('stem');
  const active = departments.find(d => d.key === activeTab);
  const c = colorMap[active.color];

  return (
    <div className="bg-white font-display">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/picture2.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-primary/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-6">Academics</span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            A Curriculum Built for <span className="text-accent">Tomorrow</span>
          </h1>
          <p className="text-blue-100 text-xl font-light max-w-2xl mx-auto">
            Rigorous, dynamic, and deeply human. Our academic programme challenges every student to think bigger and reach higher.
          </p>
        </div>
      </section>

      {/* School Stages */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Learning at Every Stage</h2>
            <p className="text-slate-500 text-lg">From playful discovery to university preparation — we walk with your child every step.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{s.grades}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{s.stage}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Tabs */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Our Academic Departments</h2>
          <p className="text-slate-500 text-lg">Explore the breadth and depth of what we offer.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {departments.map(d => {
            const dc = colorMap[d.color];
            return (
              <button key={d.key} onClick={() => setActiveTab(d.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all
                  ${activeTab === d.key ? `${dc.active} border-transparent shadow-lg` : `${dc.bg} ${dc.text} ${dc.border} hover:shadow-md`}`}>
                <span className="material-symbols-outlined text-[18px]">{d.icon}</span>
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Active Department Content */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className={`p-10 ${c.bg}`}>
            <div className="flex items-start gap-6">
              <div className={`size-16 bg-white ${c.text} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
                <span className="material-symbols-outlined text-3xl">{active.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{active.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{active.desc}</p>
                <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white ${c.text} text-sm font-bold shadow-sm`}>
                  <span className="material-symbols-outlined text-[16px]">emoji_events</span>
                  {active.highlight}
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <h4 className="font-black text-slate-900 mb-6 text-lg">Subjects Offered</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {active.subjects.map((s, i) => (
                <div key={i} className={`${c.bg} ${c.text} rounded-xl px-4 py-3 text-sm font-semibold flex items-center gap-2`}>
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University Placement */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-5xl text-accent mb-4 block">workspace_premium</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">98% University Placement Rate</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Our graduates attend the world's finest universities. Our college counseling team starts early, works tirelessly, and delivers results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['University of Lagos', 'Covenant University', 'Oxford University', 'University of Toronto', 'MIT', 'Harvard', 'London School of Economics', 'UCL'].map(u => (
              <span key={u} className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full font-medium">{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-primary text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Curious About Our Full Curriculum?</h2>
        <p className="text-blue-100 mb-6">Download our academic prospectus or speak with our admissions team.</p>
        <Link to="/admissions" className="inline-flex items-center gap-2 h-14 px-8 bg-accent text-slate-900 rounded-xl font-black hover:bg-yellow-400 transition-all">
          Contact Admissions <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
