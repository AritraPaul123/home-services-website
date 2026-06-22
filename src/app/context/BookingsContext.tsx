import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';
import { addDays, subDays } from 'date-fns';

export type BookingStatus = 'Confirmed' | 'In Progress' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  serviceName: string;
  date: Date;
  time: string;
  status: BookingStatus;
  amount: number;
  address: string;
  professional?: {
    name: string;
    rating: number;
    jobs: number;
    phone: string;
    image: string;
  };
  timeline?: { status: string; time: string | null; completed: boolean }[];
}

interface BookingsContextType {
  bookings: Booking[];
  cancelBooking: (id: string) => void;
  rescheduleBooking: (id: string, newDate: Date, newTime: string) => void;
  rebookService: (booking: Booking) => void;
  getBookingById: (id: string) => Booking | undefined;
}

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BKG-10492',
    serviceName: 'Deep Home Cleaning',
    date: addDays(new Date(), 2),
    time: '10:00 AM - 12:00 PM',
    status: 'Confirmed',
    amount: 149.00,
    address: '123 Main St, Apt 4B, New York',
    professional: {
      name: 'Michael Chen',
      rating: 4.8,
      jobs: 342,
      phone: '+1 234 567 8900',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    timeline: [
      { status: 'Booking Confirmed', time: '09:30 AM', completed: true },
      { status: 'Professional Assigned', time: null, completed: false },
      { status: 'Professional on the way', time: null, completed: false },
      { status: 'Service in progress', time: null, completed: false },
      { status: 'Service Completed', time: null, completed: false },
    ]
  },
  {
    id: 'BKG-98231',
    serviceName: 'AC Repair & Service',
    date: subDays(new Date(), 5),
    time: '02:00 PM - 04:00 PM',
    status: 'Completed',
    amount: 85.50,
    address: '123 Main St, Apt 4B, New York'
  },
  {
    id: 'BKG-87321',
    serviceName: 'Plumbing Checkup',
    date: subDays(new Date(), 10),
    time: '11:00 AM - 12:00 PM',
    status: 'Cancelled',
    amount: 45.00,
    address: '123 Main St, Apt 4B, New York'
  }
];

const BookingsContext = createContext<BookingsContextType | undefined>(undefined);

export const BookingsProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);

  const cancelBooking = (id: string) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === id ? { ...booking, status: 'Cancelled' as BookingStatus } : booking
      )
    );
    toast.success('Booking cancelled successfully');
  };

  const rescheduleBooking = (id: string, newDate: Date, newTime: string) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === id ? { ...booking, date: newDate, time: newTime } : booking
      )
    );
    toast.success('Booking rescheduled successfully');
  };

  const rebookService = (booking: Booking) => {
    const newBooking: Booking = {
      ...booking,
      id: `BKG-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'Confirmed',
      date: addDays(new Date(), 1), // Defaults to tomorrow
      time: '10:00 AM - 12:00 PM',
    };
    setBookings((current) => [newBooking, ...current]);
    toast.success(`Successfully rebooked ${booking.serviceName}`);
  };

  const getBookingById = (id: string) => {
    return bookings.find((b) => b.id === id);
  };

  return (
    <BookingsContext.Provider value={{ bookings, cancelBooking, rescheduleBooking, rebookService, getBookingById }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => {
  const context = useContext(BookingsContext);
  if (context === undefined) {
    throw new Error('useBookings must be used within a BookingsProvider');
  }
  return context;
};
