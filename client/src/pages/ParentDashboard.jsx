import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../components/DashboardLayout';

export default function ParentDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeChild, setActiveChild] = useState(0);

  useEffect(() => {
    axios.get('/api/dashboard/parent')
      .then(r => setData(r.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <DashboardLayout activeKey="overview">
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </DashboardLayout>
  );

  const childrenColors = ['blue', 'pink'];

  return (
    <DashboardLayout activeKey="overview">
      <div className="flex flex-col gap-8">
        {/* Children Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.children.map((child, i) => (
            <div key={i}
              onClick={() => setActiveChild(i)}
              className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all shadow-sm hover:-translate-y-0.5
                ${activeChild === i ? 'border-purple-500 shadow-purple-100 shadow-lg' : 'border-slate-100'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`size-14 rounded-2xl flex items-center justify-center text-white font-black text-xl
                  ${i === 0 ? 'bg-blue-500' : 'bg-pink-500'}`}>
                  {child.avatar}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">{child.name}</h3>
                  <p className="text-slate-500 text-sm">{child.grade} · ID: {child.studentId}</p>
                </div>
                {activeChild === i && (
                  <span className="ml-auto size-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-primary">{child.gpa}</div>
                  <div className="text-xs text-slate-500 mt-1">Current GPA</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-emerald-600">{child.attendance}</div>
                  <div className="text-xs text-slate-500 mt-1">Attendance</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grade Overview for Active Child */}
        {data?.children[activeChild] && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-black text-slate-900 mb-6">Academic Performance — {data.children[activeChild].name}</h3>
            <div className="flex flex-col gap-4">
              {(activeChild === 0 ? data.gradeOverview.ethan : data.gradeOverview.lily).map((g, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-sm font-semibold text-slate-700 w-20 flex-shrink-0">{g.subject}</div>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${g.score >= 90 ? 'bg-emerald-500' : g.score >= 75 ? 'bg-primary' : 'bg-amber-500'}`}
                      style={{ width: `${g.score}%` }}>
                    </div>
                  </div>
                  <div className="text-sm font-black text-slate-900 w-10 text-right">{g.score}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Fee Status */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-black text-slate-900">Fee Status</h3>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold w-fit
                ${data?.feeStatus.status === 'Partial' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                <span className="material-symbols-outlined text-[16px]">payments</span>
                {data?.feeStatus.status}
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Paid: {data?.feeStatus.paid}</span>
                  <span>Total: {data?.feeStatus.termFee}</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '44%' }}></div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="text-sm font-semibold text-red-700">Outstanding Balance</div>
                <div className="text-2xl font-black text-red-600">{data?.feeStatus.balance}</div>
                <div className="text-xs text-red-500 mt-1">Due: {data?.feeStatus.nextDue}</div>
              </div>
              <button className="w-full h-11 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">payment</span> Pay Now
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-black text-slate-900">Upcoming Events</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.upcomingEvents.map((e, i) => (
                <div key={i} className="px-6 py-4 flex items-start gap-3">
                  <div className={`size-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5
                    ${e.type === 'meeting' ? 'bg-blue-50 text-blue-600' : e.type === 'event' ? 'bg-purple-50 text-purple-600' : e.type === 'holiday' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                    <span className="material-symbols-outlined text-[16px]">
                      {e.type === 'meeting' ? 'groups' : e.type === 'holiday' ? 'beach_access' : 'event'}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{e.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{e.date} · {e.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-black text-slate-900">Messages</h3>
              <span className="size-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {data?.recentMessages.filter(m => !m.read).length}
              </span>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.recentMessages.map((m, i) => (
                <div key={i} className={`px-6 py-4 ${!m.read ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-bold text-slate-900 truncate">{m.from}</div>
                    {!m.read && <span className="size-2 bg-blue-500 rounded-full flex-shrink-0"></span>}
                  </div>
                  <div className="text-xs text-slate-600 line-clamp-2">{m.message}</div>
                  <div className="text-xs text-slate-400 mt-1">{m.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
