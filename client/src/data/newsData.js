// Central news & blog data — sorted by engagement score + recency
// engagement = views + (comments * 3) + (likes * 2)

export const newsCategories = [
  { key: 'all', label: 'All', icon: 'apps' },
  { key: 'announcements', label: 'Announcements', icon: 'campaign' },
  { key: 'exams', label: 'Exams & WAEC', icon: 'quiz' },
  { key: 'sports', label: 'Sports', icon: 'sports_soccer' },
  { key: 'awards', label: 'Awards', icon: 'emoji_events' },
  { key: 'principal', label: "Principal's Desk", icon: 'record_voice_over' },
  { key: 'student-voice', label: 'Student Voice', icon: 'person' },
  { key: 'vision', label: 'Vision & Mission', icon: 'stars' },
];

export const allNews = [
  // ── HIGH ENGAGEMENT ────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'exams',
    categoryLabel: 'Exams & WAEC',
    tag: 'URGENT',
    tagColor: 'bg-red-500',
    title: 'WAEC 2024/2025 Registration: Dates, Requirements & How to Register',
    excerpt: 'The West African Examinations Council has released the official timetable and registration window for the 2024/2025 WASSCE. All SS3 students must complete registration by the deadline or risk disqualification.',
    body: `The West African Examinations Council (WAEC) has officially opened the registration portal for the 2024/2025 WASSCE. This is a critical announcement for all SS3 students and their parents.

**Key Dates:**
- Registration Opens: January 15, 2025
- Registration Closes: February 28, 2025 *(No extensions will be granted)*
- Examination Period: May – June 2025
- Results Expected: August 2025

**Requirements for Registration:**
All students must submit the following to the Exams Office (Room 002) before February 20, 2025:
1. Completed WAEC registration form (collected from the Exams Office)
2. 4 recent passport photographs (white background)
3. Photocopy of birth certificate
4. Evidence of payment of registration fee — ₦22,500 per candidate
5. Photocopy of JSS3 result (BECE certificate)

**Subjects:**
Students are required to register for a minimum of 8 subjects and a maximum of 9. Your subject teacher will confirm your subject combination.

**Payment:**
Payment should be made directly to the school's Exams Account at the Bursary. Receipt must be submitted alongside registration documents.

**Important Notice:**
Late registration attracts a penalty fee of ₦5,000. Students who fail to register by the deadline will not be allowed to sit the examination. Parents are urged to take note.

For enquiries, contact the Exams Coordinator, Mr. Chukwuemeka Obi, at exams@parliament-intl.edu or visit the Exams Office between 8AM–2PM on weekdays.`,
    author: 'Mr. Chukwuemeka Obi',
    authorRole: 'Exams Coordinator',
    authorInitials: 'CO',
    authorColor: 'bg-red-500',
    date: 'Dec 12, 2024',
    readTime: '4 min read',
    views: 3420,
    likes: 187,
    comments: 43,
    image: '/picture2.jpg',
    featured: true,
  },
  {
    id: 2,
    category: 'sports',
    categoryLabel: 'Sports',
    tag: 'JUST IN',
    tagColor: 'bg-emerald-500',
    title: 'Inter-House Sports 2024: Red House Clinches Championship Title in Thrilling Final Day',
    excerpt: 'After four days of fierce competition across 18 athletic disciplines, Red House (Mandela) emerged champions of the 2024 Inter-House Sports Competition with 847 points, edging out Blue House by just 12 points.',
    body: `The 2024 Parliament International School Inter-House Sports Competition concluded on Friday, December 6th in what commentators are calling the most competitive edition in the school's 45-year history.

**Final Standings:**
1. 🔴 Red House (Mandela) — **847 points** 🏆 *Champions*
2. 🔵 Blue House (Soyinka) — 835 points
3. 🟢 Green House (Achebe) — 791 points
4. 🟡 Yellow House (Abiola) — 754 points

**Highlights of the Competition:**

*Athletics Track Events:*
Chisom Okafor (SS2, Red House) shattered the school record in the 100m sprint with a time of 10.94 seconds, breaking the previous record that had stood since 2018. She also won gold in the 200m and long jump.

*Field Events:*
The shot put competition saw a remarkable performance from Emeka Nwosu (SS3, Blue House) who threw 14.2m, a new school record.

*Swimming:*
Red House dominated the pool events, winning 7 of 10 gold medals. Tolu Adeyemi completed a stunning sweep of all three freestyle distances.

*Team Sports:*
Football: Blue House 2–1 Red House
Basketball: Red House 68–55 Green House
Volleyball: Yellow House def. Green House 3–1

**Best Athlete Award:**
Chisom Okafor (Red House) was named Best Female Athlete. Emeka Nwosu (Blue House) took Best Male Athlete.

**Principal's Comment:**
"The spirit, sportsmanship, and sheer talent on display this week filled me with immense pride. Every student who competed represented Parliament International School with honour." — Dr. Adaeze Nwosu, Principal.

Congratulations to all participants. The full results booklet is available from the Sports Department.`,
    author: 'Coach Biodun Salami',
    authorRole: 'Head of Sports',
    authorInitials: 'BS',
    authorColor: 'bg-emerald-600',
    date: 'Dec 8, 2024',
    readTime: '5 min read',
    views: 2890,
    likes: 312,
    comments: 67,
    image: '/picture3.jpg',
    featured: true,
  },
  {
    id: 3,
    category: 'awards',
    categoryLabel: 'Awards',
    tag: 'MONTHLY',
    tagColor: 'bg-amber-500',
    title: 'Teacher of the Month — November 2024: Mrs. Funke Adeleke, Mathematics Department',
    excerpt: 'Nominated by over 340 students and 12 colleagues, Mrs. Funke Adeleke is celebrated for her transformative teaching style, patience, and her record of achieving 100% distinction rate in her class.',
    body: `Parliament International School is proud to announce Mrs. Funke Adeleke of the Mathematics Department as our Teacher of the Month for November 2024.

**About Mrs. Adeleke:**
Mrs. Adeleke joined Parliament International School in 2016 and has since become one of the most beloved and respected educators on our campus. She currently teaches Further Mathematics and Additional Mathematics to SS2 and SS3 students.

**Why She Was Nominated:**
The nomination process involves anonymous submissions from students, parents, and colleagues. Mrs. Adeleke received 340 student nominations — the highest ever recorded in this programme's 8-year history.

Some notable comments from students:
- *"Mrs. Adeleke made me fall in love with mathematics. I went from a D student to an A student in one term."* — SS2 Student
- *"She stays after school for free tutorials without ever being asked. She truly cares."* — SS3 Student
- *"Her explanations are so clear. She doesn't move on until everyone understands."* — JSS3 Student

**Her Achievements (2024):**
- 100% pass rate in WAEC Further Mathematics for her class (2023/2024)
- 87% of her students scored A1 or B2
- Developed a peer-tutoring programme now adopted school-wide
- Organised 3 free Mathematics bootcamps during school holidays

**Mrs. Adeleke's Acceptance Speech:**
*"I teach because I believe every child is capable of brilliance — they just need someone to believe in them first. This award belongs to my students, whose hard work makes my job a joy."*

Mrs. Adeleke will receive a cash award, a certificate of excellence, and a dedicated parking space for the month of December.

Nominations for December Teacher of the Month are now open. Submit via the Parent/Student Portal.`,
    author: 'Academic Affairs Office',
    authorRole: 'Parliament International School',
    authorInitials: 'AA',
    authorColor: 'bg-amber-500',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
    views: 2100,
    likes: 245,
    comments: 38,
    image: '/picture1.jpg',
    featured: true,
  },
  {
    id: 4,
    category: 'principal',
    categoryLabel: "Principal's Desk",
    tag: "PRINCIPAL'S DESK",
    tagColor: 'bg-primary',
    title: "From the Principal's Desk: Reflections on a Remarkable First Term",
    excerpt: 'As we approach the end of another transformative term, I want to take a moment to reflect on what we have achieved together — and to look ahead with excitement at the journey still before us.',
    body: `Dear Parliament International School Family,

As the first term of the 2024/2025 academic year draws to a close, I find myself overwhelmed — in the best possible way — by the growth, resilience, and brilliance I have witnessed in our students, staff, and wider school community.

**Academic Excellence:**
This term, our students sat a combined 1,247 internal assessments and class tests. The average score across all subjects was 78.4% — a 4.2% improvement over the same period last year. Twelve students achieved perfect scores in at least one subject, and our SS3 class is performing at a level that gives me tremendous confidence ahead of the forthcoming WAEC examinations.

**Beyond the Classroom:**
I am equally proud of what our students have achieved outside academic work. Our Inter-House Sports Competition was a spectacle that reminded us all why we invest so heavily in physical development. Our Debate team reached the regional finals. Our Art students won two national awards. These are not small things — they are evidence of a complete education.

**A Note on Character:**
At Parliament International School, we believe that results are the consequence of character, not the other way around. I have seen extraordinary acts of kindness, integrity, and leadership from students this term — from the senior students who voluntarily mentored their juniors, to the student who returned a lost wallet to its owner without hesitation. These are the moments that make me most proud.

**Looking Ahead:**
Second term begins on January 13, 2025. I urge all students to rest well during the holidays, stay curious, and return ready to build on the solid foundation we have laid.

To our parents: thank you for your partnership, your trust, and your constant support. Parliament International School is not just a school — it is a community, and you are its heart.

With pride and gratitude,

**Dr. Adaeze Nwosu**
*Principal, Parliament International School*`,
    author: 'Dr. Adaeze Nwosu',
    authorRole: 'Principal, Parliament International School',
    authorInitials: 'AN',
    authorColor: 'bg-primary',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    views: 1870,
    likes: 198,
    comments: 29,
    image: '/picture1.jpg',
    featured: false,
  },
  {
    id: 5,
    category: 'student-voice',
    categoryLabel: 'Student Voice',
    tag: 'HEAD BOY',
    tagColor: 'bg-blue-600',
    title: "Head Boy's Address: Why This Generation Must Lead With Empathy",
    excerpt: 'In his end-of-term address to the school, Head Boy Tobechukwu Eze reflects on the leadership lessons he has learned this year and issues a passionate call to his generation to lead differently.',
    body: `*Delivered at the First Term Closing Assembly, Parliament International School, December 13, 2024.*

---

Good morning, Parliament International School.

When I was appointed Head Boy at the beginning of this term, I made myself one promise: that I would lead with honesty. So let me be honest with you today.

Leadership is harder than I thought it would be.

Not because of the responsibilities — though they are many. Not because of the early mornings and the late meetings. But because good leadership requires something that nobody tells you about: **it requires you to put other people's needs before your own ego.**

This term, I watched our school community navigate real challenges. Students who were struggling silently. Teachers carrying loads that nobody could see. Junior students who were afraid to ask for help. And I realised something important — the greatest thing a leader can do is not to have all the answers, but to create a space where people feel safe enough to ask questions.

**On Empathy:**
My generation is sometimes described as the most connected in history. We have social media, we have technology, we have information at our fingertips. But connection and empathy are not the same thing. You can have a thousand followers and still not truly see the person sitting next to you in class.

I want to challenge every student in this hall today — especially my fellow seniors — to lead with empathy. Not just in the big, visible moments, but in the small ones. Check on a classmate who seems withdrawn. Speak up when you see someone being treated unfairly. Celebrate other people's wins as loudly as you celebrate your own.

**Gratitude:**
I want to thank our principal, Dr. Nwosu, for her guidance and her belief in student leadership. I want to thank the teaching staff for their tireless dedication. And I want to thank every single student in this school for making it the extraordinary place that it is.

Have a restful holiday. Come back ready to be great.

Thank you.

**Tobechukwu Eze**
*Head Boy, Parliament International School 2024/2025*`,
    author: 'Tobechukwu Eze',
    authorRole: 'Head Boy, SS3',
    authorInitials: 'TE',
    authorColor: 'bg-blue-600',
    date: 'Dec 13, 2024',
    readTime: '5 min read',
    views: 1650,
    likes: 221,
    comments: 54,
    image: '/picture2.jpg',
    featured: false,
  },
  {
    id: 6,
    category: 'student-voice',
    categoryLabel: 'Student Voice',
    tag: 'HEAD GIRL',
    tagColor: 'bg-pink-500',
    title: "Head Girl's Message: On Finding Your Voice in a World That Wants You Silent",
    excerpt: 'Head Girl Adaeze Okonkwo writes a deeply personal reflection on the journey to self-confidence, and why she believes every girl in Nigeria deserves to take up space — in the classroom, in the boardroom, and everywhere in between.',
    body: `*A personal essay by Head Girl Adaeze Okonkwo, published in honour of the school's Annual Girls' Empowerment Week.*

---

When I was in JSS1, I once knew the answer to a question in class. My hand went up halfway — and then came back down. A boy answered instead. He was wrong. I had been right. And I said nothing.

I tell this story not because it is unique, but because almost every girl I have spoken to has a version of it. We have been taught, in a thousand small and large ways, to shrink. To wait our turn. To be agreeable. To be quiet.

I am here to tell you: **that ends now.**

**What This Year Taught Me:**
Being Head Girl has been the most challenging and rewarding experience of my life. I have chaired meetings with adults three times my age. I have advocated for students in spaces where I was the youngest person in the room. I have made decisions that affected people I care about. And through every single moment of it, I have had to fight the voice in my head that whispered: *"Who do you think you are?"*

Here is what I have learned: that voice is not wisdom. It is fear. And fear — when examined closely — is almost never as powerful as it first appears.

**To Every Girl at Parliament International School:**
You belong here. In the front row. In the science lab. In the debate hall. In the leadership positions. In the difficult conversations. Your intelligence is not a threat. Your ambition is not arrogance. Your presence is not too much.

Take up space. Ask the question. Put your hand all the way up.

The world needs your voice — not the quiet, edited version of it. The full, unfiltered, magnificent thing.

**With love and solidarity,**

**Adaeze Okonkwo**
*Head Girl, Parliament International School 2024/2025*`,
    author: 'Adaeze Okonkwo',
    authorRole: 'Head Girl, SS3',
    authorInitials: 'AO',
    authorColor: 'bg-pink-500',
    date: 'Dec 11, 2024',
    readTime: '5 min read',
    views: 1580,
    likes: 267,
    comments: 61,
    image: '/picture3.jpg',
    featured: false,
  },
  {
    id: 7,
    category: 'vision',
    categoryLabel: 'Vision & Mission',
    tag: "FOUNDER'S MESSAGE",
    tagColor: 'bg-slate-700',
    title: "A Message from Our Founder: Why We Built Parliament International School — and Where We Are Going",
    excerpt: 'On the occasion of our 45th anniversary, founder and chairman Chief Emmanuel Blackwood shares the vision that drove him to build Parliament International School in 1979, the values that have never changed, and his bold vision for the next decade.',
    body: `*A message from Chief Emmanuel Blackwood, Founder & Chairman, Parliament International School Group.*

---

Forty-five years ago, I stood on a plot of undeveloped land in what would become our Innovation District campus, and I made a promise.

I promised that I would build a school where every child — regardless of their background, their tribe, their religion, or their family's wealth — would have access to the kind of education that produces not just graduates, but leaders. Not just employees, but innovators. Not just Nigerians, but global citizens.

I did not know then how hard that promise would be to keep. I did not know the sleepless nights, the financial crises, the moments of near-collapse. But I also did not know the extraordinary joy of watching 45 graduating classes walk off this stage and into the world — doctors, engineers, artists, entrepreneurs, presidents of companies, parents raising the next generation.

**Why We Built Parliament International School:**
I grew up in a home where education was treated as the most sacred investment a family could make. My father sold land to pay my school fees. My mother walked four miles to the market every day so that I could have textbooks. I understood from a very young age that education is not a privilege — it is a right. And when it is done well, it is a superpower.

When I founded Parliament International School, I wanted to build that superpower at scale. I wanted to create an institution that took Nigeria's greatest resource — her children — and invested in them with the seriousness they deserved.

**Our Vision:**
*To be Africa's most transformative educational institution — producing graduates of exceptional academic ability, strong moral character, and the courage to change the world.*

**Our Mission:**
*To provide a world-class, holistic education in a nurturing environment that develops the intellect, character, and global perspective of every student, empowering them to lead with excellence and serve with compassion.*

**Our Core Values:**
- **Excellence** — We set the highest standards and pursue them relentlessly
- **Integrity** — We do the right thing, even when no one is watching
- **Compassion** — We see and serve the full humanity of every person
- **Innovation** — We embrace change and teach students to shape it
- **Community** — We believe we are stronger together than apart

**Looking to the Next Decade:**
We are currently in the planning stages of our most ambitious expansion in the school's history — three new campuses, a Centre of Excellence for STEM, a fully-funded scholarship programme for 500 students from underprivileged backgrounds, and a digital infrastructure programme that will connect our students to resources and mentors worldwide.

Parliament International School began as a promise. Forty-five years later, it is a legacy. And the best chapter is still to come.

With pride and gratitude,

**Chief Emmanuel Blackwood, OFR**
*Founder & Chairman, Parliament International School Group*`,
    author: 'Chief Emmanuel Blackwood',
    authorRole: 'Founder & Chairman',
    authorInitials: 'EB',
    authorColor: 'bg-slate-700',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    views: 1420,
    likes: 189,
    comments: 22,
    image: '/chairman.jpg',
    featured: false,
  },
  {
    id: 8,
    category: 'exams',
    categoryLabel: 'Exams & WAEC',
    tag: 'NOTICE',
    tagColor: 'bg-orange-500',
    title: 'End of Term Examinations: Full Timetable Released — Dec 16–20, 2024',
    excerpt: 'The Academic Affairs Office has released the complete timetable for First Term Examinations. All students from JSS1 to SS3 should note their schedules carefully. No deferrals will be granted except on medical grounds.',
    body: `The Academic Affairs Office hereby publishes the official timetable for the First Term 2024/2025 Examinations, scheduled from Monday, December 16 to Friday, December 20, 2024.

**General Instructions:**
- Examinations begin at 8:00 AM daily. Students must be seated by 7:45 AM.
- All students must present their student ID card to enter the examination hall.
- Mobile phones and electronic devices are strictly prohibited.
- Students who arrive more than 15 minutes late will not be admitted.
- Results will be published on the Student Portal by January 8, 2025.

**Timetable (All Classes):**

Monday, Dec 16:
- 8:00AM – Mathematics
- 11:30AM – Agricultural Science / Music / Fine Art (electives)

Tuesday, Dec 17:
- 8:00AM – English Language / Literature in English (SS classes)
- 11:30AM – Biology / Computer Science

Wednesday, Dec 18:
- 8:00AM – Physics / Basic Science (JSS)
- 11:30AM – Economics / Social Studies

Thursday, Dec 19:
- 8:00AM – Chemistry / Basic Technology
- 11:30AM – Government / Civic Education / History

Friday, Dec 20:
- 8:00AM – Further Mathematics (SS only) / Quantitative Reasoning (JSS)
- 10:30AM – French / Mandarin / Yoruba
- 12:30PM — Closing Ceremony (Parents welcome)

**Medical Deferrals:**
Any student unable to sit an examination due to illness must present a medical certificate from a registered hospital. Applications must be submitted to the Exams Office no later than the morning of the affected exam.

For timetable enquiries: exams@parliament-intl.edu`,
    author: 'Academic Affairs Office',
    authorRole: 'Parliament International School',
    authorInitials: 'AA',
    authorColor: 'bg-orange-500',
    date: 'Dec 9, 2024',
    readTime: '3 min read',
    views: 1980,
    likes: 134,
    comments: 18,
    image: '/picture2.jpg',
    featured: false,
  },
];

// Sort by engagement score: views + likes*2 + comments*3
export const getSortedNews = () => {
  return [...allNews].sort((a, b) => {
    const scoreA = a.views + a.likes * 2 + a.comments * 3;
    const scoreB = b.views + b.likes * 2 + b.comments * 3;
    return scoreB - scoreA;
  });
};

export const getTopNews = (count = 4) => getSortedNews().slice(0, count);

export const getNewsByCategory = (category) => {
  if (category === 'all') return getSortedNews();
  return getSortedNews().filter(n => n.category === category);
};

export const getNewsById = (id) => allNews.find(n => n.id === parseInt(id));
