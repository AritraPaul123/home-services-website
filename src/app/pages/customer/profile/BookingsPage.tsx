import React, { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardContent } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Button } from '../../../components/ui/button';
import { CalendarDays, MapPin, Clock, ChevronRight } from 'lucide-react';
import { format, addDays, subDays } from 'date-fns';
import { ReviewModal } from '../../../components/customer/ReviewModal';
import { toast } from 'sonner';

import { useBookings, BookingStatus, Booking } from '../../../context/BookingsContext';

export const BookingsPage = () => {
  const { bookings, cancelBooking, rebookService } = useBookings();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'Confirmed': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center p-5 gap-6">
          <div className="w-full md:w-auto flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
                <h3 className="font-bold text-lg text-slate-900">{booking.serviceName}</h3>
                <p className="text-sm text-slate-500 font-mono">#{booking.id}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${booking.amount.toFixed(2)}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-slate-400" />
                {format(booking.date, 'MMM dd, yyyy')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                {booking.time}
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{booking.address}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-48 flex flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 border-slate-100">
            <Button asChild variant="outline" className="w-full justify-between">
              <Link to={`/profile/bookings/${booking.id}`}>
                View Details <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            
            {booking.status === 'Completed' && (
              <Button 
                variant="default" 
                className="w-full bg-slate-900"
                onClick={() => {
                  setSelectedBooking(booking);
                  setReviewModalOpen(true);
                }}
              >
                Rate & Review
              </Button>
            )}
            
            {booking.status === 'Confirmed' && (
              <Button 
                variant="outline" 
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => cancelBooking(booking.id)}
              >
                Cancel
              </Button>
            )}
            
            {(booking.status === 'Completed' || booking.status === 'Cancelled') && (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => rebookService(booking)}
              >
                Rebook
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const upcoming = bookings.filter(b => ['Confirmed', 'In Progress'].includes(b.status));
  const completed = bookings.filter(b => b.status === 'Completed');
  const cancelled = bookings.filter(b => b.status === 'Cancelled');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Bookings</h2>
        <p className="text-gray-500">Track, manage, and review your service history.</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="upcoming">Upcoming ({upcoming.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completed.length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({cancelled.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {upcoming.length > 0 ? (
            upcoming.map(booking => <BookingCard key={booking.id} booking={booking} />)
          ) : (
            <div className="text-center py-12 text-slate-500">No upcoming bookings.</div>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completed.length > 0 ? (
            completed.map(booking => <BookingCard key={booking.id} booking={booking} />)
          ) : (
            <div className="text-center py-12 text-slate-500">No completed bookings yet.</div>
          )}
        </TabsContent>
        
        <TabsContent value="cancelled" className="space-y-4">
          {cancelled.length > 0 ? (
            cancelled.map(booking => <BookingCard key={booking.id} booking={booking} />)
          ) : (
            <div className="text-center py-12 text-slate-500">No cancelled bookings.</div>
          )}
        </TabsContent>
      </Tabs>

      {selectedBooking && (
        <ReviewModal
          isOpen={reviewModalOpen}
          onClose={() => { setReviewModalOpen(false); setSelectedBooking(null); }}
          bookingId={selectedBooking.id}
          serviceName={selectedBooking.serviceName}
        />
      )}
    </div>
  );
};
