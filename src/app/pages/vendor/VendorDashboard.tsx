import { CheckCircle, Clock, DollarSign, MapPin } from "lucide-react";

export function VendorDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Today's Earnings</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">$120.00</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Completed Jobs (This Week)</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">12</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Pending Jobs</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">3</h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Upcoming Jobs</h2>
        <div className="space-y-4">
          
          {/* Job Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold uppercase">Today, 2:30 PM</span>
                <span className="text-slate-500 text-sm font-medium">#JOB-8492</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Deep AC Cleaning</h3>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Main St, Apt 4B, New York</span>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
              <p className="text-xl font-bold text-slate-800">$45.00 <span className="text-sm font-normal text-slate-500">to be collected</span></p>
              <div className="flex gap-3 w-full md:w-auto">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("123 Main St, Apt 4B, New York")}`} target="_blank" rel="noreferrer" className="flex-1 md:flex-none px-6 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition text-center">Direction</a>
                <button className="flex-1 md:flex-none px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Start Job</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
