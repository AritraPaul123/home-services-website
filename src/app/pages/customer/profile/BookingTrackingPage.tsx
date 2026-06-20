import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Phone, MessageCircle, MapPin, Calendar, Clock, FileText, CheckCircle2, ChevronLeft, Star } from 'lucide-react';
import { format, addDays } from 'date-fns';

export const BookingTrackingPage = () => {
  const { id } = useParams();

  // Mock data for the specific booking
  const booking = {
    id: id || 'BKG-10492',
    serviceName: 'Deep Home Cleaning',
    date: addDays(new Date(), 2),
    time: '10:00 AM - 12:00 PM',
    status: 'In Progress' as const,
    amount: 149.00,
    address: '123 Main St, Apt 4B, New York, NY 10001',
    professional: {
      name: 'Michael Chen',
      rating: 4.8,
      jobs: 342,
      phone: '+1 234 567 8900',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    timeline: [
      { status: 'Booking Confirmed', time: 'Oct 23, 09:30 AM', completed: true },
      { status: 'Professional Assigned', time: 'Oct 23, 11:15 AM', completed: true },
      { status: 'Professional on the way', time: 'Oct 25, 09:15 AM', completed: true },
      { status: 'Service in progress', time: 'Oct 25, 10:05 AM', completed: true },
      { status: 'Service Completed', time: null, completed: false },
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild className="shrink-0">
          <Link to="/profile/bookings">
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Booking Details</h2>
          <p className="text-gray-500 font-mono">#{booking.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Service & Pro Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tracking Timeline (Feature 71, 72) */}
          <Card>
            <CardHeader>
              <CardTitle>Service Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {booking.timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ${item.completed ? 'bg-blue-600' : 'bg-slate-200'}`}>
                      {item.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                      <h4 className={`font-bold ${item.completed ? 'text-slate-900' : 'text-slate-400'}`}>{item.status}</h4>
                      {item.time && <span className="text-sm text-slate-500">{item.time}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Details (Feature 73, 74, 75) */}
          <Card>
            <CardHeader>
              <CardTitle>Assigned Professional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img src={booking.professional.image} alt={booking.professional.name} className="w-24 h-24 rounded-full object-cover border-4 border-slate-100" />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">{booking.professional.name}</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-sm text-slate-600">
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {booking.professional.rating} Rating</span>
                    <span>•</span>
                    <span>{booking.professional.jobs} Jobs completed</span>
                  </div>
                </div>
                <div className="flex sm:flex-col gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                  <Button className="flex-1 gap-2 bg-green-600 hover:bg-green-700">
                    <Phone className="w-4 h-4" /> Call
                  </Button>
                  <Button className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20b858] text-white">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Details */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">{format(booking.date, 'EEEE, MMMM do, yyyy')}</p>
                  <p className="text-sm text-slate-500">Service Date</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">{booking.time}</p>
                  <p className="text-sm text-slate-500">Arrival Window</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">{booking.address}</p>
                  <p className="text-sm text-slate-500">Service Location</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Column - Payment & Actions */}
        <div className="space-y-6">
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 pb-4 border-b">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{booking.serviceName}</span>
                  <span>${booking.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Taxes & Fees</span>
                  <span>$12.50</span>
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center mb-6">
                <span className="font-bold text-slate-900">Total Paid</span>
                <span className="font-bold text-xl text-slate-900">${(booking.amount + 12.50).toFixed(2)}</span>
              </div>
              
              <Button variant="outline" className="w-full gap-2">
                <FileText className="w-4 h-4" /> Download Invoice
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <Button variant="outline" className="w-full justify-start text-slate-700">
                Reschedule Booking
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                Cancel Booking
              </Button>
              <Button variant="link" className="w-full text-blue-600">
                Need help? Raise a complaint
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};
