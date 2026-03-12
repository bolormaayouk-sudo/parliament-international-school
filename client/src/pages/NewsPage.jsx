import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { allNews, newsCategories, getSortedNews, getNewsByCategory, getNewsById } from '../data/newsData';

// ── Render article body text (simple markdown) ──────────────────────────────
function RenderBody({ text }) {
  const lines = text.split('\n');
  return (
    <div className="flex flex-col gap-1">
      {lines.map((line, i) => {
        if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
          return <p key={i} className="font-black text-slate-900 text-lg mt-6 mb-1">{line.slice(2,-2)}</p>;
        }
        if (line.startsWith('- ')) {
          return <li key={i} className="ml-6 text-slate-700 my-0.5 list-disc">{line.slice(2)}</li>;
        }
        if (/^\d+\./.test(line)) {
          return <li key={i} className="ml-6 text-slate-700 my-0.5 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
        }
        if (line.startsWith('---')) {
          return <hr key={i} className="border-slate-200 my-6" />;
        }
        if (line.trim() === '') return <div key={i} className="h-2" />;
        // Bold inline
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-slate-700 leading-relaxed">
            {parts.map((p, j) =>
              p.startsWith('**') && p.endsWith('**')
                ? <strong key={j} className="font-bold text-slate-900">{p.slice(2,-2)}</strong>
                : p
            )}
          </p>
        );
      })}
    </div>
  );
}

// ── Single Article View ──────────────────────────────────────────────────────
function ArticleView({ articleId, onBack }) {
  const article = getNewsById(articleId);
  const related = getSortedNews().filter(n => n.id !== articleId && n.category === article?.category).slice(0, 3);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [articleId]);

  if (!article) return (
    <div className="text-center py-32">
      <p className="text-slate-500 text-xl">Article not found.</p>
      <button onClick={() => onBack()} className="mt-4 text-primary font-bold hover:underline">← Back to News</button>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => onBack()}
        className="flex items-center gap-2 text-primary font-bold text-sm mb-8 hover:gap-3 transition-all">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to News & Blog
      </button>

      <div className="rounded-3xl overflow-hidden h-64 md:h-80 bg-slate-200 mb-8 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
        <div className="absolute bottom-5 left-6 flex items-center gap-2">
          <span className={`${article.tagColor} text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider`}>{article.tag}</span>
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">{article.categoryLabel}</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">{article.title}</h1>

      <div className="flex flex-wrap items-center gap-4 pb-6 mb-8 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className={`size-10 ${article.authorColor} rounded-xl flex items-center justify-center text-white font-black text-sm`}>
            {article.authorInitials}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">{article.author}</p>
            <p className="text-slate-500 text-xs">{article.authorRole}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400 ml-auto flex-wrap">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>{article.date}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>{article.readTime}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span>{article.views.toLocaleString()}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">favorite</span>{article.likes}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">comment</span>{article.comments}</span>
        </div>
      </div>

      <RenderBody text={article.body} />

      <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between flex-wrap gap-4">
        <p className="font-bold text-slate-700 text-sm">Found this helpful? Share it.</p>
        <div className="flex gap-2">
          {['WhatsApp', 'Twitter/X', 'Copy Link'].map(s => (
            <button key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-primary hover:text-primary transition-all">{s}</button>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h3 className="font-black text-slate-900 text-xl mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(r => (
              <button key={r.id} onClick={() => onBack(r.id)}
                className="text-left bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="h-28 bg-slate-200 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${r.image}')` }}></div>
                  <div className="absolute inset-0 bg-slate-900/30"></div>
                </div>
                <div className="p-4">
                  <span className={`${r.tagColor} text-white text-[10px] font-black px-2 py-0.5 rounded-full`}>{r.tag}</span>
                  <p className="font-bold text-slate-900 text-sm mt-2 line-clamp-2 leading-snug">{r.title}</p>
                  <p className="text-slate-400 text-xs mt-2">{r.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── News Card ────────────────────────────────────────────────────────────────
function NewsCard({ article, onRead, featured }) {
  const engScore = article.views + article.likes * 2 + article.comments * 3;
  const isHot = engScore > 3000;

  if (featured) {
    return (
      <div onClick={() => onRead(article.id)}
        className="group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${article.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent"></div>
        <div className="relative z-10 p-8 flex flex-col justify-end min-h-[380px]">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className={`${article.tagColor} text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider`}>{article.tag}</span>
            {isHot && <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">local_fire_department</span>TRENDING</span>}
          </div>
          <h2 className="text-white text-2xl font-black leading-snug mb-3 group-hover:text-accent transition-colors">{article.title}</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className={`size-8 ${article.authorColor} rounded-lg flex items-center justify-center text-white font-black text-xs`}>{article.authorInitials}</div>
              <div>
                <p className="text-white font-semibold text-xs">{article.author}</p>
                <p className="text-slate-400 text-[11px]">{article.date} · {article.readTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span>{(article.views/1000).toFixed(1)}k</span>
              <span className="flex items-center gap-1 text-white bg-white/10 px-3 py-1.5 rounded-lg font-bold group-hover:bg-primary transition-colors">
                Read <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => onRead(article.id)}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
      <div className="h-44 bg-slate-200 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${article.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className={`${article.tagColor} text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider`}>{article.tag}</span>
          {isHot && <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full">🔥</span>}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{article.categoryLabel}</p>
        <h3 className="font-black text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">{article.excerpt}</p>
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`size-7 ${article.authorColor} rounded-lg flex items-center justify-center text-white font-black text-[10px]`}>{article.authorInitials}</div>
            <div>
              <p className="text-xs font-semibold text-slate-700 leading-none">{article.author}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{article.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">visibility</span>{article.views >= 1000 ? `${(article.views/1000).toFixed(1)}k` : article.views}</span>
            <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">favorite</span>{article.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function NewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeArticleId = id ? parseInt(id) : null;

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const handleRead = (articleId) => { navigate(`/news/${articleId}`); };
  const handleBack = (goToId) => {
    if (goToId && typeof goToId === 'number') {
      navigate(`/news/${goToId}`);
    } else {
      navigate('/news');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const allSorted = getNewsByCategory(activeCategory).filter(n =>
    !searchQuery ||
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredList = allSorted.filter(n => n.featured);
  const regularList = allSorted.filter(n => !n.featured);

  return (
    <div className="bg-slate-50 min-h-screen font-display">
      <Navbar />

      {/* Hero banner */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/picture1.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-slate-950/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-5">News & Blog</span>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
            Stories from the Heart of <span className="text-accent">Parliament International School</span>
          </h1>
          <p className="text-blue-100 text-lg font-light max-w-2xl mx-auto">
            Exam updates, sports victories, teacher spotlights, student voices, and messages from our leadership — all in one place.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {activeArticleId ? (
          <ArticleView articleId={activeArticleId} onBack={handleBack} />
        ) : (
          <>
            {/* Search + sort info */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search articles, authors..."
                  className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-slate-900 text-sm transition-all" />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-[16px]">sort</span>
                <span className="font-semibold">Sorted by: <span className="text-primary">Engagement + Recency</span></span>
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
              {newsCategories.map(cat => (
                <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap flex-shrink-0 transition-all
                    ${activeCategory === cat.key ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'}`}>
                  <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {allSorted.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-4 block">search_off</span>
                <p className="text-slate-500 text-lg">No articles found.</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="mt-4 text-primary font-bold hover:underline">Clear filters</button>
              </div>
            ) : (
              <>
                {/* Featured */}
                {activeCategory === 'all' && !searchQuery && featuredList.length > 0 && (
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="material-symbols-outlined text-accent text-[22px]">star</span>
                      <h2 className="font-black text-slate-900 text-xl">Featured & Trending</h2>
                      <span className="flex items-center gap-1 text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-[14px]">local_fire_department</span>Most Read
                      </span>
                    </div>
                    <div className={`grid gap-6 ${featuredList.length >= 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-2xl'}`}>
                      {featuredList.map(a => <NewsCard key={a.id} article={a} onRead={handleRead} featured={true} />)}
                    </div>
                  </div>
                )}

                {/* All / filtered articles */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="font-black text-slate-900 text-xl">
                      {activeCategory === 'all' && !searchQuery ? 'Latest Articles' : newsCategories.find(c => c.key === activeCategory)?.label || 'Results'}
                    </h2>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {activeCategory === 'all' && !searchQuery ? regularList.length : allSorted.length} articles
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {(activeCategory === 'all' && !searchQuery ? regularList : allSorted).map(a => (
                      <NewsCard key={a.id} article={a} onRead={handleRead} featured={false} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
