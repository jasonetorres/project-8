import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { addWeeks, subWeeks, format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import { useEvents } from '../hooks/useEvents';
import EventCard from './EventCard';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { events } = useEvents();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd }).slice(0, 5);

  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Week of {format(weekStart, 'MMM d, yyyy')}
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={prevWeek}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextWeek}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {days.map((day) => (
          <div key={day.toString()} className="min-h-[600px]">
            <div className="text-center p-2 bg-gray-50 rounded-t-lg">
              <p className="font-semibold text-gray-700">{format(day, 'EEEE')}</p>
              <p className="text-sm text-gray-500">{format(day, 'MMM d')}</p>
            </div>
            <div className="space-y-4 p-2">
              {events[format(day, 'yyyy-MM-dd')]?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}