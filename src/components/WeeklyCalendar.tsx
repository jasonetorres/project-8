import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  addWeeks, subWeeks,
  format, startOfWeek,
  isToday
} from 'date-fns';
import { useEvents } from '../hooks/useEvents';
import EventCard from './EventCard';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { events } = useEvents();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = [0, 1, 2, 3, 4].map(days => {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + days);
    return day;
  });

  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
          Week of {format(weekDays[0], 'MMM d, yyyy')}
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

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {weekDays.map((day) => (
          <div
            key={day.toString()}
            className={`bg-white border rounded-lg shadow-md mb-4 sm:mb-10 ${isToday(day) ? 'ring-2 ring-blue-500' : ''}`}
          >
            <div className={`text-center p-2 ${isToday(day) ? 'bg-blue-100' : 'bg-gray-50'} rounded-t-lg`}>
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
      <p>Events brought to you by
        <a
          href="https://guild.host/?utm_source=referral&utm_medium=chat&utm_campaign=general_link"
          target="_blank" rel="noopener noreferrer"
          className="text-blue-600 hover:underline"> Guild.host
        </a>
      </p>
    </div>
  );
}