import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../components/DashboardLayout';

const priorityColors = {
  urgent: 'bg-red-100 text-red-700 border border-red-200',
  high: 'bg-amber-100 text-amber-700 border border-amber-200',
  medium: 'bg-blue-100 text-blue-700 border border-blue-200'
};

export default function StaffDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/dashboard/staff')
      .then(r => setData(r.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <DashboardLayout activeKey="overview">
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </DashboardLayout>
  );

  return (
    <DashboardLayout activeKey="overview">
      <div className="flex flex-col gap-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.stats.map((s, i) => {
            const colorClasses = [
              'bg-blue-50 text-blue-600', 'bg-emerald-50 text-emerald-600',
              'bg-amber-50 text-amber-600', 'bg-purple-50 text-purple-600'
            ];
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`size-12 ${colorClasses[i]} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-3xl font-black text-slate-900">{s.value}</div>
                <div className="text-sm font-semibold text-slate-700 mt-1">{s.label}</div>
                <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
              </div>
            );
          })}
        </div>

        {/* My Classes */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-black text-slate-900">My Classes</h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">{data?.myClasses.length} active</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Class</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Students</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Next Class</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Room</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Avg Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data?.myClasses.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{c.name}</div>
                      <div className="text-xs text-slate-500">{c.grade}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-slate-400">group</span>
                        <span className="font-semibold text-slate-700">{c.students}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${c.nextClass.startsWith('Today') ? 'text-primary' : 'text-slate-600'}`}>
                        {c.nextClass}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{c.room}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${c.avgScore >= 85 ? 'bg-emerald-500' : c.avgScore >= 75 ? 'bg-primary' : 'bg-amber-500'}`}
                            style={{ width: `${c.avgScore}%` }}></div>
                        </div>
                        <span className="font-bold text-slate-900">{c.avgScore}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pending Tasks */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-black text-slate-900">Pending Tasks</h3>
              <span className="text-xs font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full">{data?.pendingTasks.length} tasks</span>
            </div>
            <div className="divide-y divide-slate-50">
              {data?.pendingTasks.map((t, i) => (
                <div key={i} className="px-6 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm">{t.task}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{t.class} · {t.count} items</div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${priorityColors[t.priority]}`}>
                      {t.priority}
                    </span>
                    <span className="text-xs text-slate-400">Due {t.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity + Announcements */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="font-black text-slate-900">Recent Activity</h3>
              </div>
              <div className="divide-y divide-slate-50">
                {data?.recentActivity.map((a, i) => (
                  <div key={i} className="px-6 py-4 flex items-start gap-3">
                    <div className="size-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{a.action}</div>
                      <div className="text-xs text-slate-500">{a.detail}</div>
                      <div className="text-xs text-slate-400 mt-1">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="font-black text-slate-900">Announcements</h3>
              </div>
              <div className="divide-y divide-slate-50">
                {data?.announcements.map((a, i) => (
                  <div key={i} className="px-6 py-4">
                    <div className="font-semibold text-slate-900 text-sm">{a.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{a.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
