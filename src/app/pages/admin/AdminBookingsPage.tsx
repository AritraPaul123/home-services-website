import { useState } from "react";
import { Search, Filter, Eye, UserCheck, CheckCircle, XCircle } from "lucide-react";

const INITIAL_BOOKINGS = [
  { id: "BKG-8492", customer: "John Doe", service: "AC Deep Cleaning", date: "Oct 24, 2026", time: "10:00 AM", status: "Assigned", professional: "Mike Smith", amount: 45 },
  { id: "BKG-8493", customer: "Sarah Smith", service: "Plumbing Repair", date: "Oct 24, 2026", time: "02:30 PM", status: "Pending", professional: null, amount: 85 },
  { id: "BKG-8494", customer: "Robert Chen", service: "Home Painting", date: "Oct 25, 2026", time: "09:00 AM", status: "Pending", professional: null, amount: 250 },
  { id: "BKG-8495", customer: "Emily Davis", service: "Sofa Cleaning", date: "Oct 26, 2026", time: "11:00 AM", status: "Completed", professional: "Jane Doe", amount: 65 },
];

export function AdminBookingsPage() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending": return <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Pending</span>;
      case "Assigned": return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Assigned</span>;
      case "Completed": return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Completed</span>;
      case "Cancelled": return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Cancelled</span>;
      default: return <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  const handleAssign = (id: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: "Assigned", professional: "Auto Assigned Pro" } : b));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Booking Management</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search bookings..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50">
            <Filter className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Service Info</th>
                <th className="p-4 font-medium">Professional</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Amount</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{booking.id}</td>
                  <td className="p-4 text-slate-600">{booking.customer}</td>
                  <td className="p-4">
                    <p className="font-medium text-slate-800">{booking.service}</p>
                    <p className="text-xs text-slate-500">{booking.date} at {booking.time}</p>
                  </td>
                  <td className="p-4">
                    {booking.professional ? (
                      <span className="text-slate-700 font-medium">{booking.professional}</span>
                    ) : (
                      <span className="text-slate-400 italic">Unassigned</span>
                    )}
                  </td>
                  <td className="p-4">
                    {getStatusBadge(booking.status)}
                  </td>
                  <td className="p-4 text-right font-medium text-slate-800">${booking.amount}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      {booking.status === "Pending" && (
                        <button 
                          onClick={() => handleAssign(booking.id)}
                          className="p-1.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded" 
                          title="Assign Professional"
                        >
                          <UserCheck className="w-4 h-4" />
                        </button>
                      )}
                      {booking.status === "Assigned" && (
                        <button className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded" title="Mark Completed">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}
                      {(booking.status === "Pending" || booking.status === "Assigned") && (
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded" title="Cancel Booking">
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
