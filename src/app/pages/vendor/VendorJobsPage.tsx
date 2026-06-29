import { useState } from "react";
import { CheckCircle, XCircle, MapPin, PhoneCall, Clock, MessageSquare, Camera, CheckSquare } from "lucide-react";
import { toast } from "sonner";

const INITIAL_JOBS = [
  { id: "JOB-8492", service: "Deep AC Cleaning", customer: "John Doe", phone: "+1 555-1234", address: "123 Main St, Apt 4B, New York", date: "Today", time: "2:30 PM", status: "Pending", amount: 45 },
  { id: "JOB-8493", service: "AC Gas Top-up", customer: "Sarah Smith", phone: "+1 555-5678", address: "456 Park Ave, Floor 2, New York", date: "Tomorrow", time: "10:00 AM", status: "Pending", amount: 65 },
  { id: "JOB-8480", service: "AC Deep Cleaning", customer: "Mike Johnson", phone: "+1 555-9012", address: "789 Broadway, NY", date: "Yesterday", time: "01:00 PM", status: "Completed", amount: 45 },
];

export function VendorJobsPage() {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [activeModal, setActiveModal] = useState<'start' | 'complete' | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [otp, setOtp] = useState('');
  const [notes, setNotes] = useState('');

  const handleAction = (id: string, newStatus: string) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
    if (newStatus === 'Accepted') toast.success('Job Accepted!');
    if (newStatus === 'Rejected') toast.error('Job Rejected');
  };

  const openStartModal = (id: string) => {
    setSelectedJob(id);
    setActiveModal('start');
    setOtp('');
  };

  const openCompleteModal = (id: string) => {
    setSelectedJob(id);
    setActiveModal('complete');
    setOtp('');
    setNotes('');
  };

  const handleStartJob = () => {
    if (otp.length < 4) return toast.error('Enter a valid OTP');
    setJobs(jobs.map(job => job.id === selectedJob ? { ...job, status: 'In Progress' } : job));
    setActiveModal(null);
    toast.success('Job Started Successfully!');
  };

  const handleCompleteJob = () => {
    if (otp.length < 4) return toast.error('Enter a valid OTP');
    setJobs(jobs.map(job => job.id === selectedJob ? { ...job, status: 'Completed' } : job));
    setActiveModal(null);
    toast.success('Job Completed Successfully!');
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Job Management</h1>
          <p className="text-slate-500 text-sm mt-1">Accept, reject, and manage your assigned services.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Job Lists */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. New Requests */}
          <section>
            <h2 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">New Job Requests</h2>
            {jobs.filter(j => j.status === 'Pending').length === 0 && (
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500">
                No new job requests at the moment.
              </div>
            )}
            <div className="space-y-4">
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
                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(job.address)}`} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
                          {job.address}
                        </a>
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
            </div>
          </section>

          {/* 2. Active Jobs */}
          <section>
            <h2 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">Active & Upcoming Jobs</h2>
            {jobs.filter(j => ['Accepted', 'In Progress'].includes(j.status)).length === 0 && (
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500">
                No active jobs.
              </div>
            )}
            <div className="space-y-4">
              {jobs.filter(j => ['Accepted', 'In Progress'].includes(j.status)).map(job => (
                <div key={job.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex gap-2 items-center mb-1">
                      <span className={`px-2 py-1 text-xs font-bold rounded ${job.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {job.status}
                      </span>
                      <span className="text-sm text-slate-500">#{job.id}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">{job.service}</h4>
                    <p className="text-sm text-slate-600 flex items-center gap-1 mt-1"><Clock className="w-4 h-4"/> {job.date}, {job.time}</p>
                    <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                      <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(job.address)}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition">
                        <MapPin className="w-4 h-4"/> {job.address}
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <a href={`tel:${job.phone}`} className="p-3 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200" title="Call Customer">
                      <PhoneCall className="w-5 h-5" />
                    </a>
                    <a href={`https://wa.me/${job.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="WhatsApp">
                      <MessageSquare className="w-5 h-5" />
                    </a>
                    {job.status === 'Accepted' ? (
                      <button onClick={() => openStartModal(job.id)} className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-black transition">
                        Start Job
                      </button>
                    ) : (
                      <button onClick={() => openCompleteModal(job.id)} className="flex-1 md:flex-none px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
                        Complete Job
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Completed Jobs */}
          <section>
            <h2 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">Completed Jobs (Recent)</h2>
            <div className="space-y-4">
              {jobs.filter(j => j.status === 'Completed').map(job => (
                <div key={job.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex justify-between items-center opacity-80">
                  <div>
                    <h4 className="font-bold text-slate-700">{job.service}</h4>
                    <p className="text-sm text-slate-500">{job.date} • {job.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-700">${job.amount}.00</p>
                    <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-600">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Stats */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckSquare className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">85%</h3>
            <p className="text-slate-500 text-sm font-medium">Acceptance Rate</p>
            <p className="text-xs text-slate-400 mt-2">Maintain above 90% to receive more priority bookings.</p>
          </div>
        </div>
      </div>

      {/* Start Job Modal */}
      {activeModal === 'start' && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-2">Start Job</h3>
            <p className="text-sm text-slate-600 mb-6">Ask the customer for the Start OTP to begin the service.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Start OTP</label>
                <input type="text" maxLength={4} value={otp} onChange={e => setOtp(e.target.value)} className="w-full px-4 py-2 text-center tracking-widest text-xl border rounded-lg" placeholder="1234" />
              </div>
              <label className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition block">
                <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => { if(e.target.files?.length) toast.success('Before photo attached!'); }} />
                <Camera className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-medium text-slate-700">Upload "Before" Photo</p>
              </label>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setActiveModal(null)} className="flex-1 py-2 border rounded-lg font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
              <button onClick={handleStartJob} className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Start Service</button>
            </div>
          </div>
        </div>
      )}

      {/* Complete Job Modal */}
      {activeModal === 'complete' && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-2">Complete Job</h3>
            <p className="text-sm text-slate-600 mb-6">Ask the customer for the Completion OTP to finish the job.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Completion OTP</label>
                <input type="text" maxLength={4} value={otp} onChange={e => setOtp(e.target.value)} className="w-full px-4 py-2 text-center tracking-widest text-xl border rounded-lg" placeholder="1234" />
              </div>
              <label className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition block">
                <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => { if(e.target.files?.length) toast.success('After photo attached!'); }} />
                <Camera className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-medium text-slate-700">Upload "After" Photo</p>
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">Work Notes (Optional)</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full px-4 py-2 border rounded-lg h-24" placeholder="Any notes about the service..."></textarea>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setActiveModal(null)} className="flex-1 py-2 border rounded-lg font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
              <button onClick={handleCompleteJob} className="flex-1 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">Complete Service</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
