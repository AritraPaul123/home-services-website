import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Bell, Briefcase, Megaphone, CheckCircle2 } from 'lucide-react';

export function VendorNotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'job', title: 'New Job Request: Deep AC Cleaning', time: '10 mins ago', desc: 'A customer in your service area requested a Deep AC Cleaning for tomorrow.', isRead: false },
    { id: 2, type: 'announcement', title: 'Admin Announcement: Holiday Bonus', time: '2 hours ago', desc: 'Complete 10 jobs this week to get a $50 holiday bonus!', isRead: false },
    { id: 3, type: 'job', title: 'Job Completed successfully', time: 'Yesterday', desc: 'Payment of $45 for JOB-8480 has been added to your balance.', isRead: true },
    { id: 4, type: 'announcement', title: 'Policy Update: Cancellation Rules', time: 'Oct 10, 2023', desc: 'Please review the updated vendor cancellation policy in the Help Center.', isRead: true },
  ]);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Notifications</h1>
          <p className="text-slate-500 text-sm mt-1">Alerts, updates, and announcements.</p>
        </div>
        <button onClick={handleMarkAllRead} className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className={`p-4 rounded-xl border flex gap-4 transition-colors ${notif.isRead ? 'bg-white border-slate-200' : 'bg-blue-50 border-blue-200'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.type === 'job' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
              {notif.type === 'job' ? <Briefcase className="w-6 h-6" /> : <Megaphone className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className={`font-bold ${notif.isRead ? 'text-slate-700' : 'text-slate-900'}`}>{notif.title}</h3>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap ml-4">{notif.time}</span>
              </div>
              <p className={`text-sm mt-1 ${notif.isRead ? 'text-slate-500' : 'text-slate-700'}`}>{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
