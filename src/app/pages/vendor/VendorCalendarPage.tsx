import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar as CalendarIcon, Clock, XCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function VendorCalendarPage() {
  const [markedOffDays, setMarkedOffDays] = useState<number[]>([15, 22]); // Just mock dates
  const [timeSlots, setTimeSlots] = useState({ morning: true, afternoon: true, evening: false });

  const handleMarkOffDay = (day: number) => {
    if (markedOffDays.includes(day)) {
      setMarkedOffDays(markedOffDays.filter(d => d !== day));
      toast.success(`Removed leave for Oct ${day}`);
    } else {
      setMarkedOffDays([...markedOffDays, day]);
      toast.success(`Marked Oct ${day} as Leave / Off Day`);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Availability Calendar</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your schedule and time slots.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Calendar View */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
            <CardTitle className="text-lg flex items-center gap-2"><CalendarIcon className="w-5 h-5"/> October 2023</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">&lt;</Button>
              <Button variant="outline" size="sm">&gt;</Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-bold text-slate-500">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {/* Padding for month start */}
              <div className="p-2"></div><div className="p-2"></div>
              
              {/* Days */}
              {Array.from({length: 31}, (_, i) => i + 1).map(day => {
                const isOffDay = markedOffDays.includes(day);
                const hasJobs = day === 16 || day === 18; // Mock jobs
                return (
                  <div 
                    key={day} 
                    onClick={() => handleMarkOffDay(day)}
                    className={`aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer border-2 transition-all relative
                      ${isOffDay ? 'bg-red-50 border-red-200 text-red-700' : 
                        hasJobs ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100 hover:border-slate-300'}`}
                  >
                    <span className="font-bold text-lg">{day}</span>
                    {isOffDay && <span className="text-[10px] font-bold uppercase mt-1">Off</span>}
                    {hasJobs && !isOffDay && <div className="absolute bottom-2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                  </div>
                )
              })}
            </div>

            <div className="flex gap-4 mt-8 pt-4 border-t text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white border-2 border-slate-200 rounded-sm"></div> Available</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-50 border-2 border-blue-200 rounded-sm"></div> Has Jobs</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-50 border-2 border-red-200 rounded-sm"></div> Leave / Off Day</div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule & Time Slots */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Schedule for Oct 16</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm font-bold text-blue-900">10:00 AM - 12:00 PM</p>
                <p className="text-xs text-blue-700">AC Gas Top-up • John Doe</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm font-bold text-blue-900">02:30 PM - 04:30 PM</p>
                <p className="text-xs text-blue-700">Deep AC Cleaning • Sarah Smith</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Manage Time Slots</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">Set your standard daily working hours.</p>
              <div className="space-y-3">
                <div onClick={() => setTimeSlots({...timeSlots, morning: !timeSlots.morning})} className={`flex items-center justify-between p-2 border rounded cursor-pointer transition ${timeSlots.morning ? 'bg-slate-50 border-green-200' : 'hover:bg-slate-50 opacity-50'}`}>
                  <span className={`text-sm font-medium ${!timeSlots.morning && 'text-slate-500'}`}>Morning (9AM - 1PM)</span>
                  {timeSlots.morning ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-slate-400" />}
                </div>
                <div onClick={() => setTimeSlots({...timeSlots, afternoon: !timeSlots.afternoon})} className={`flex items-center justify-between p-2 border rounded cursor-pointer transition ${timeSlots.afternoon ? 'bg-slate-50 border-green-200' : 'hover:bg-slate-50 opacity-50'}`}>
                  <span className={`text-sm font-medium ${!timeSlots.afternoon && 'text-slate-500'}`}>Afternoon (1PM - 5PM)</span>
                  {timeSlots.afternoon ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-slate-400" />}
                </div>
                <div onClick={() => setTimeSlots({...timeSlots, evening: !timeSlots.evening})} className={`flex items-center justify-between p-2 border rounded cursor-pointer transition ${timeSlots.evening ? 'bg-slate-50 border-green-200' : 'hover:bg-slate-50 opacity-50'}`}>
                  <span className={`text-sm font-medium ${!timeSlots.evening && 'text-slate-500'}`}>Evening (5PM - 9PM)</span>
                  {timeSlots.evening ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-slate-400" />}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
