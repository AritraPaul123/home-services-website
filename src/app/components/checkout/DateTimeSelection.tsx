import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { format, addDays } from 'date-fns';

interface DateTimeSelectionProps {
  onSelect: (date: Date, time: string) => void;
}

export const DateTimeSelection = ({ onSelect }: DateTimeSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  const dates = Array.from({ length: 7 }).map((_, i) => addDays(new Date(), i));
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelect(date, selectedTime);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(selectedDate, time);
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          Select Date & Time
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h4 className="font-medium mb-3">Service Date</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((date, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleDateSelect(date)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-lg border-2 transition-all ${
                  date.toDateString() === selectedDate.toDateString()
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <span className="text-xs uppercase font-medium">{format(date, 'EEE')}</span>
                <span className="text-xl font-bold">{format(date, 'd')}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            Time Slot
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {timeSlots.map((time, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleTimeSelect(time)}
                className={`py-2 px-3 text-sm font-medium rounded-lg border-2 transition-all ${
                  time === selectedTime
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
