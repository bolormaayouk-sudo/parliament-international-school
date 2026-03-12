import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../components/DashboardLayout';

const priorityColors = { high: 'bg-red-100 text-red-700', medium: 'bg-amber-100 text-amber-700', low: 'bg-green-100 text-green-700' };
const statusColors = { pending: 'text-red-500', 'in-progress': 'text-amber-500', 'not-started': 'text-slate-400' };

export default function StudentDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/dashboard/student')
      .then(r => setData(r.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <DashboardLayout activeKey="overview">
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </DashboardLayout>
  );

  return (
    <DashboardLayout activeKey="overview">
      <div className="flex flex-col gap-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.stats.map((s, i) => {
            const colors = ['blue', 'green', 'amber', 'purple'];
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600', green: 'bg-emerald-50 text-emerald-600',
              amber: 'bg-amber-50 text-amber-600', purple: 'bg-purple-50 text-purple-600'
            };
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`size-12 ${colorClasses[colors[i]]} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-3xl font-black text-slate-900">{s.value}</div>
                <div className="text-sm font-semibold text-slate-700 mt-1">{s.label}</div>
                <div className="text-xs text-slate-400 mt-1">{s.trend}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-black text-slate-900">Today's Schedule</h3>
              <span className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">{data?.todaySchedule.length} classes</span>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.todaySchedule.map((s, i) => (
                <div key={i} className="px-6 py-4 flex items-start gap-4">
                  <div className="text-xs font-bold text-slate-400 w-12 pt-0.5 flex-shrink-0">{s.time}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm truncate">{s.subject}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.room} · {s.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-black text-slate-900">Upcoming Assignments</h3>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{data?.upcomingAssignments.length} pending</span>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.upcomingAssignments.map((a, i) => (
                <div key={i} className="px-6 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm">{a.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{a.subject} · Due {a.due}</div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${priorityColors[a.priority]}`}>
                    {a.priority}
                  </span>
                  <span className={`material-symbols-outlined text-sm ${statusColors[a.status]}`}>circle</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Grades */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-black text-slate-900">Recent Grades</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.recentGrades.map((g, i) => (
                <div key={i} className="px-6 py-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-sm">{g.subject}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{g.assessment} · {g.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-primary">{g.grade}</div>
                    <div className="text-xs text-slate-400">{g.score}/100</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-black text-slate-900">Announcements</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.announcements.map((a, i) => (
                <div key={i} className="px-6 py-4 flex items-start gap-4">
                  <div className={`size-8 rounded-lg flex items-center justify-center flex-shrink-0
                    ${a.type === 'academic' ? 'bg-blue-50 text-primary' : a.type === 'event' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                    <span className="material-symbols-outlined text-[16px]">
                      {a.type === 'academic' ? 'school' : a.type === 'event' ? 'event' : 'info'}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{a.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{a.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
