import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const activities = [
  { icon: 'sports_soccer', color: 'blue', title: 'Sports & Athletics', desc: 'Football, basketball, swimming, tennis, athletics, and more across our world-class facilities.' },
  { icon: 'music_note', color: 'purple', title: 'Music & Performing Arts', desc: 'Choir, school orchestra, drama club, and annual productions on our 500-seat stage.' },
  { icon: 'diversity_3', color: 'emerald', title: 'Leadership & Debate', desc: 'Model UN, student council, public speaking, and inter-school debate competitions.' },
  { icon: 'volunteer_activism', color: 'rose', title: 'Community Service', desc: 'Mandatory community outreach programme building empathy and social responsibility.' },
  { icon: 'biotech', color: 'cyan', title: 'Science & Tech Clubs', desc: 'Robotics club, coding bootcamps, science fairs, and hackathons every semester.' },
  { icon: 'brush', color: 'amber', title: 'Arts & Crafts', desc: 'Painting, sculpture, photography, and digital design in our fully-equipped art studio.' },
];

const facilities = [
  { icon: 'science', title: 'Science Laboratories', desc: '6 fully-equipped labs for Physics, Chemistry, Biology, and Computer Science.', image: '/picture1.jpg' },
  { icon: 'sports_basketball', title: 'Sports Complex', desc: 'Olympic-size pool, 2 basketball courts, football pitch, and athletics track.', image: '/picture2.jpg' },
  { icon: 'menu_book', title: 'Smart Library', desc: '25,000+ titles, digital research terminals, and silent study pods open until 8PM.', image: '/picture3.jpg' },
  { icon: 'restaurant', title: 'Dining Hall', desc: 'Nutritionist-designed menus, 3 meals daily for boarders, halal & dietary options.', image: '/picture1.jpg' },
];

const boardingHighlights = [
  { icon: 'bed', text: 'Air-conditioned dormitories with 4–6 students per room' },
  { icon: 'local_hospital', text: '24/7 on-campus nurse and emergency medical protocol' },
  { icon: 'wifi', text: 'High-speed Wi-Fi in all boarding houses (study hours only)' },
  { icon: 'security', text: 'Biometric access, CCTV, and security personnel round the clock' },
  { icon: 'sports', text: 'Structured evening activities and weekend excursions' },
  { icon: 'supervisor_account', text: 'Dedicated House Parents and pastoral care team' },
];

const colorMap = {
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  rose: 'bg-rose-50 text-rose-500',
  cyan: 'bg-cyan-50 text-cyan-600',
  amber: 'bg-amber-50 text-amber-600',
};

export default function CampusLifePage() {
  return (
    <div className="bg-white font-display">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/picture3.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-6">Campus Life</span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            Life Beyond the <span className="text-accent">Classroom</span>
          </h1>
          <p className="text-blue-100 text-xl font-light max-w-2xl">
            School is not just about studying. At Parliament International School, every day is an opportunity to discover passions, build friendships, and grow into an extraordinary person.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">50+ Clubs & Co-curricular Activities</h2>
          <p className="text-slate-500 text-lg">Every student finds their place — whether on the field, the stage, or the lab bench.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className={`size-14 ${colorMap[a.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-3xl">{a.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">World-Class Facilities on 40 Acres</h2>
            <p className="text-slate-500 text-lg">Our campus was designed to inspire greatness in every corner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-shadow">
                <div className="h-52 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${f.image}')` }}></div>
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="size-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/30">
                      <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boarding */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Boarding School</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">A Home Away From Home</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our boarding programme is designed for holistic living. Students thrive in a structured, nurturing environment that builds independence, discipline, and lifelong friendships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boardingHighlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">{h.icon}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-96 bg-slate-200">
              <div className="absolute inset-0 bg-cover bg-center rounded-3xl" style={{ backgroundImage: "url('/picture2.jpg')" }}></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100">
              <div className="text-3xl font-black text-primary">320+</div>
              <div className="text-slate-500 text-sm mt-1">Boarding Students<br/>Currently Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery-style CTA */}
      <section className="relative py-20 px-6 bg-primary text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/picture1.jpg')" }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">See It For Yourself</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Words and photos don't do our campus justice. Book a personal tour and let your child experience the Parliament International School energy.</p>
          <Link to="/admissions" className="inline-flex items-center gap-2 h-14 px-8 bg-accent text-slate-900 rounded-xl font-black hover:bg-yellow-400 transition-all">
            Book a Campus Tour <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
