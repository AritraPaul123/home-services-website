import { Users, CalendarCheck, PhoneCall, AlertTriangle } from "lucide-react";

export function StaffDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Welcome back, Emma</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Pending Approvals</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">5</h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <CalendarCheck className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Active Pros</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">142</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Calls Today</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">24</h3>
            </div>
            <div className="bg-teal-100 p-3 rounded-xl">
              <PhoneCall className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Open Complaints</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">3</h3>
            </div>
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Urgent Actions Required</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 text-red-800 rounded-lg border border-red-100">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="font-medium">Customer complaint #CMP-923: "Professional didn't show up"</span>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700">Resolve</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-orange-50 text-orange-800 rounded-lg border border-orange-100">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Unassigned Booking #BKG-8494 starting in 2 hours</span>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-white rounded text-sm font-medium hover:bg-orange-700">Assign Pro</button>
          </div>
        </div>
      </div>
    </div>
  );
}
