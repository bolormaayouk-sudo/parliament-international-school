import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steps = [
  { num: '01', icon: 'edit_note', title: 'Submit Application', desc: 'Complete the online application form with your child\'s details, previous academic records, and a personal statement.' },
  { num: '02', icon: 'description', title: 'Submit Documents', desc: 'Upload last 3 years\' report cards, birth certificate, passport photograph, and two reference letters.' },
  { num: '03', icon: 'quiz', title: 'Entrance Assessment', desc: 'Shortlisted candidates sit our entrance examination in English, Mathematics, and General Reasoning.' },
  { num: '04', icon: 'groups', title: 'Interview & Tour', desc: 'Successful candidates and their parents attend an interview with our admissions panel and campus tour.' },
  { num: '05', icon: 'mark_email_read', title: 'Offer Letter', desc: 'Accepted students receive a formal offer within 5 working days of their interview.' },
  { num: '06', icon: 'celebration', title: 'Enrolment', desc: 'Accept your offer, pay the acceptance fee, and your child officially becomes a Parliament International School student!' },
];

const fees = [
  {
    stage: 'Pre-School',
    grades: 'Nursery 1–2',
    tuition: '₦280,000',
    boarding: 'N/A',
    period: 'Per Term',
    color: 'blue',
  },
  {
    stage: 'Primary School',
    grades: 'Grade 1–6',
    tuition: '₦380,000',
    boarding: '₦180,000',
    period: 'Per Term',
    color: 'emerald',
  },
  {
    stage: 'Junior Secondary',
    grades: 'JSS 1–3',
    tuition: '₦480,000',
    boarding: '₦220,000',
    period: 'Per Term',
    color: 'purple',
  },
  {
    stage: 'Senior Secondary',
    grades: 'SSS 1–3',
    tuition: '₦580,000',
    boarding: '₦250,000',
    period: 'Per Term',
    color: 'amber',
  },
];

const scholarships = [
  { icon: 'emoji_events', title: 'Academic Excellence Award', desc: 'Up to 60% tuition waiver for students with outstanding entrance exam scores.', color: 'amber' },
  { icon: 'sports_soccer', title: 'Sports Scholarship', desc: 'Full or partial scholarship for nationally recognized athletes in any discipline.', color: 'blue' },
  { icon: 'volunteer_activism', title: 'Community Leaders Bursary', desc: '30% discount for children of public servants and nonprofit workers.', color: 'emerald' },
  { icon: 'family_restroom', title: 'Sibling Discount', desc: '15% tuition reduction for every additional child enrolled from the same family.', color: 'purple' },
];

const faqs = [
  { q: 'What is the student-to-teacher ratio?', a: 'We maintain a maximum of 25 students per class, and no more than 20 in practical/laboratory settings, ensuring each student receives individual attention.' },
  { q: 'Do you offer day and boarding options?', a: 'Yes. We offer day, weekly boarding, and full boarding options for Primary through Senior Secondary students. All boarding students have access to supervised study halls and structured evening programmes.' },
  { q: 'What curriculum does Parliament International School follow?', a: 'We follow the Nigerian national curriculum (NERDC) for the core programme, supplemented with Cambridge IGCSE-aligned modules from Grade 9 and preparation for WAEC, NECO, SAT, and A-levels.' },
  { q: 'When is the next admission intake?', a: 'We admit students at the beginning of each term. The main intake is for the first term (September). Applications for January and April intakes are considered on a space-available basis.' },
  { q: 'Is there a waiting list?', a: 'Yes. Demand for places is very high, especially for Senior Secondary. We strongly recommend applying at least one full term before your intended start date.' },
];

const colorMap = {
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  purple: 'border-purple-200 bg-purple-50 text-purple-700',
  amber: 'border-amber-200 bg-amber-50 text-amber-700',
};

const scholarshipColors = {
  amber: 'bg-amber-50 text-amber-600',
  blue: 'bg-blue-50 text-blue-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
};

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ parentName: '', childName: '', grade: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-display">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/picture1.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-950/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-6">Admissions 2024/2025</span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            Begin Your Child's <span className="text-accent">Journey Here.</span>
          </h1>
          <p className="text-blue-100 text-xl font-light max-w-2xl mx-auto mb-10">
            Spaces are strictly limited. Take the first step toward securing your child's place at the most prestigious academy in the region.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#apply" className="h-14 px-8 bg-accent text-slate-900 rounded-xl font-black hover:bg-yellow-400 transition-all flex items-center gap-2">
              Start Application <span className="material-symbols-outlined">edit_note</span>
            </a>
            <a href="#fees" className="h-14 px-8 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2">
              View Fees <span className="material-symbols-outlined">payments</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to Apply Steps */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How to Apply — 6 Simple Steps</h2>
          <p className="text-slate-500 text-lg">Our admissions process is straightforward, transparent, and supportive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="absolute top-6 right-6 text-5xl font-black text-slate-100">{s.num}</div>
              <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Tuition & Fees 2024/2025</h2>
            <p className="text-slate-500 text-lg">Transparent pricing. No hidden charges. Flexible payment plans available.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((f, i) => (
              <div key={i} className={`rounded-2xl p-6 border-2 ${colorMap[f.color]}`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">{f.grades}</div>
                <h3 className="text-xl font-black mb-4">{f.stage}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs opacity-60 mb-0.5">Tuition</div>
                    <div className="text-2xl font-black">{f.tuition}</div>
                  </div>
                  {f.boarding !== 'N/A' && (
                    <div>
                      <div className="text-xs opacity-60 mb-0.5">Boarding (add-on)</div>
                      <div className="text-xl font-bold">{f.boarding}</div>
                    </div>
                  )}
                  <div className="pt-2 border-t border-current/20 text-xs opacity-60">{f.period}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">* Fees include all textbooks, uniforms (2 sets), and extracurricular activities. Payment plans available.</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Scholarships & Bursaries</h2>
          <p className="text-slate-500 text-lg">We believe excellence should be accessible. Several scholarship tracks are available each year.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {scholarships.map((s, i) => (
            <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`size-14 ${scholarshipColors[s.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Everything you need to know before applying.</p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-slate-900 pr-4">{f.q}</span>
                  <span className={`material-symbols-outlined text-primary transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Start Your Application</h2>
            <p className="text-slate-500 text-lg">Fill in the form below and our admissions team will contact you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-12 text-center">
              <span className="material-symbols-outlined text-6xl text-emerald-500 mb-4 block">check_circle</span>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Application Received!</h3>
              <p className="text-slate-600">Thank you! Our admissions team will be in touch within 24 hours to guide you through the next steps.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-bold hover:underline">Submit another application</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Parent/Guardian Name *</label>
                  <input type="text" required value={form.parentName} onChange={e => setForm({...form, parentName: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all"
                    placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Child's Name *</label>
                  <input type="text" required value={form.childName} onChange={e => setForm({...form, childName: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all"
                    placeholder="Child's full name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Applying for Grade/Class *</label>
                <select required value={form.grade} onChange={e => setForm({...form, grade: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all bg-white">
                  <option value="">Select grade...</option>
                  {['Nursery 1', 'Nursery 2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
                    'JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3'].map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all"
                    placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all"
                    placeholder="parent@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Message (optional)</label>
                <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-900 transition-all resize-none"
                  placeholder="Any specific questions or information about your child..."></textarea>
              </div>
              <button type="submit"
                className="w-full h-14 bg-primary text-white rounded-xl font-black text-base shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                Submit Application <span className="material-symbols-outlined">send</span>
              </button>
              <p className="text-center text-xs text-slate-400">By submitting, you agree to our Privacy Policy. We'll never share your details with third parties.</p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
