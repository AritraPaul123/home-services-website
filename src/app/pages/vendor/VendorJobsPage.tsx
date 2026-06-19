import { useState } from "react";
import { CheckCircle, XCircle, MapPin, PhoneCall, Clock } from "lucide-react";

const INITIAL_JOBS = [
  { id: "JOB-8492", service: "Deep AC Cleaning", customer: "John Doe", phone: "+1 555-1234", address: "123 Main St, Apt 4B, New York", date: "Today", time: "2:30 PM", status: "Pending", amount: 45 },
  { id: "JOB-8493", service: "AC Gas Top-up", customer: "Sarah Smith", phone: "+1 555-5678", address: "456 Park Ave, Floor 2, New York", date: "Tomorrow", time: "10:00 AM", status: "Pending", amount: 65 },
  { id: "JOB-8480", service: "AC Deep Cleaning", customer: "Mike Johnson", phone: "+1 555-9012", address: "789 Broadway, NY", date: "Yesterday", time: "01:00 PM", status: "Completed", amount: 45 },
];

export function VendorJobsPage() {
  const [jobs, setJobs] = useState(INITIAL_JOBS);

  const handleAction = (id: string, newStatus: string) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Job Management</h1>
          <p className="text-slate-500 text-sm mt-1">Accept, reject, and manage your assigned services.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Pending Jobs (To Accept/Reject) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 border-b pb-2">New Job Requests</h2>

          {jobs.filter(j => j.status === 'Pending').length === 0 && (
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500">
              No new job requests at the moment.
            </div>
          )}

          {jobs.filter(j => j.status === 'Pending').map(job => (
            <div key={job.id} className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-md flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold uppercase">{job.date}, {job.time}</span>
                  <span className="text-slate-500 text-sm font-medium">#{job.id}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{job.service}</h3>

                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm border border-slate-100 mt-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-semibold">{job.customer}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                    <span>{job.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4 w-full sm:w-auto">
                <div className="text-right">
                  <p className="text-sm text-slate-500 font-medium">Estimated Earnings</p>
                  <p className="text-2xl font-bold text-green-600">${job.amount}.00</p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto mt-auto">
                  <button onClick={() => handleAction(job.id, 'Rejected')} className="flex-1 sm:flex-none px-4 py-2 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition flex items-center justify-center gap-2">
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                  <button onClick={() => handleAction(job.id, 'Accepted')} className="flex-1 sm:flex-none px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                    <CheckCircle className="w-4 h-4" /> Accept Job
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Accepted Jobs */}
          <h2 className="text-lg font-bold text-slate-800 border-b pb-2 mt-8 pt-4">Upcoming Accepted Jobs</h2>
          {jobs.filter(j => j.status === 'Accepted').length === 0 && (
            <div className="bg-slate-50 rounded-xl p-6 text-center text-slate-500 text-sm">
              No upcoming accepted jobs.
            </div>
          )}
          {jobs.filter(j => j.status === 'Accepted').map(job => (
            <div key={job.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-900">{job.service}</h4>
                <p className="text-sm text-slate-500">{job.date}, {job.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100" title="Call Customer">
                  <PhoneCall className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-black">
                  Start Job
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar / Stats */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">85%</h3>
            <p className="text-slate-500 text-sm font-medium">Acceptance Rate</p>
            <p className="text-xs text-slate-400 mt-2">Maintain above 90% to receive more priority bookings.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
