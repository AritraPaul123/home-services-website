import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";
import { Link, useLocation, Navigate } from "react-router";
import { format } from "date-fns";

export function BookingSuccessPage() {
  const location = useLocation();
  const state = location.state as { bookingId: string, total: number, date: Date, time: string };

  if (!state) {
    return <Navigate to="/checkout" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center">
        
        {/* Success Header */}
        <div className="bg-green-500 p-8 flex flex-col items-center justify-center text-white">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">Booking Confirmed!</h1>
          <p className="text-green-50 text-lg">Your service has been successfully scheduled.</p>
        </div>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Booking ID:</span>
              <span className="font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded">{state.bookingId}</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Total Paid:</span>
              <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded">${state.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Service Date</p>
                <p className="font-bold text-slate-900">{format(state.date, 'EEEE, MMMM do, yyyy')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Service Time</p>
                <p className="font-bold text-slate-900">{state.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Service Address</p>
                <p className="font-bold text-slate-900">Address selected in checkout</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-8">
            We've sent a confirmation email to your registered email address. 
            A professional will be assigned to your booking shortly.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/profile/bookings" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-md">
              View My Bookings
            </Link>
            <Link to="/" className="px-8 py-3 bg-white text-slate-700 border border-slate-300 font-bold rounded-xl hover:bg-slate-50 transition">
              Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
