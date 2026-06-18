import { Users, CalendarCheck, DollarSign, Clock } from "lucide-react";

export function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$45,231", icon: <DollarSign className="w-6 h-6 text-green-600" />, bg: "bg-green-100" },
    { title: "Active Bookings", value: "128", icon: <CalendarCheck className="w-6 h-6 text-blue-600" />, bg: "bg-blue-100" },
    { title: "Total Customers", value: "2,405", icon: <Users className="w-6 h-6 text-purple-600" />, bg: "bg-purple-100" },
    { title: "Pending Approvals", value: "14", icon: <Clock className="w-6 h-6 text-orange-600" />, bg: "bg-orange-100" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`${stat.bg} w-14 h-14 rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-sm">
                <th className="pb-3 font-medium">Booking ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-100">
                <td className="py-4 font-medium text-slate-800">#BKG-8492</td>
                <td className="py-4 text-slate-600">John Doe</td>
                <td className="py-4 text-slate-600">AC Deep Cleaning</td>
                <td className="py-4 text-slate-600">Oct 24, 10:00 AM</td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Assigned</span>
                </td>
                <td className="py-4 font-medium text-slate-800">$45.00</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-slate-800">#BKG-8493</td>
                <td className="py-4 text-slate-600">Sarah Smith</td>
                <td className="py-4 text-slate-600">Plumbing Repair</td>
                <td className="py-4 text-slate-600">Oct 24, 02:30 PM</td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Pending</span>
                </td>
                <td className="py-4 font-medium text-slate-800">$85.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
