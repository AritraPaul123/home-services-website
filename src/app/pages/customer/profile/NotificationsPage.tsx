import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Bell, CheckCircle2, Ticket, CalendarClock, MessageCircle } from 'lucide-react';
import { format, subHours, subDays } from 'date-fns';

export const NotificationsPage = () => {
  const notifications = [
    {
      id: 'notif-1',
      type: 'booking_success',
      title: 'Booking Confirmed!',
      message: 'Your deep home cleaning service has been confirmed for tomorrow at 10:00 AM.',
      time: subHours(new Date(), 2),
      read: false,
      icon: CheckCircle2,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 'notif-2',
      type: 'offer',
      title: 'Special Offer Unlocked 🎁',
      message: 'You have received a 20% discount coupon for your next AC repair booking.',
      time: subHours(new Date(), 5),
      read: false,
      icon: Ticket,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 'notif-3',
      type: 'reminder',
      title: 'Upcoming Service Reminder',
      message: 'Your plumber is arriving in 1 hour. Please ensure someone is at home.',
      time: subDays(new Date(), 2),
      read: true,
      icon: CalendarClock,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      id: 'notif-4',
      type: 'support',
      title: 'Support Ticket Updated',
      message: 'Our agent has replied to your query regarding the recent cleaning service.',
      time: subDays(new Date(), 4),
      read: true,
      icon: MessageCircle,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-gray-500">Stay updated with your bookings and offers.</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notif) => (
          <Card key={notif.id} className={`transition-colors ${notif.read ? 'bg-white' : 'bg-blue-50/30 border-blue-100'}`}>
            <CardContent className="p-4 sm:p-5">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.color}`}>
                  <notif.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className={`font-semibold ${notif.read ? 'text-slate-700' : 'text-slate-900'}`}>
                      {notif.title}
                    </h4>
                    <span className="text-xs text-slate-500 shrink-0 whitespace-nowrap">
                      {format(notif.time, 'MMM dd, h:mm a')}
                    </span>
                  </div>
                  <p className={`text-sm ${notif.read ? 'text-slate-500' : 'text-slate-700 font-medium'}`}>
                    {notif.message}
                  </p>
                </div>
                {!notif.read && (
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-2"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
