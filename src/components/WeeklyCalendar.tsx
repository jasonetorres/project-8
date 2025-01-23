import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  addWeeks, subWeeks, addMonths, subMonths, 
  format, eachDayOfInterval, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, eachDayOfInterval as eachDayOfMonthInterval 
} from 'date-fns';
import { useEvents } from '../hooks/useEvents';
import EventCard from './EventCard';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week');
  const { events } = useEvents();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd })
    .filter(day => [1, 2, 3, 4, 5].includes(day.getDay()));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfMonthInterval({ start: monthStart, end: monthEnd })
    .filter(day => [1, 2, 3, 4, 5].includes(day.getDay()));

  const nextPeriod = () => {
    if (viewMode === 'week') {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const prevPeriod = () => {
    if (viewMode === 'week') {
      setCurrentDate(subWeeks(currentDate, 1));
    } else {
      setCurrentDate(subMonths(currentDate, 1));
    }
  };

  const renderTitle = () => {
    return viewMode === 'week' 
      ? `Week of ${format(weekStart, 'MMM d, yyyy')}`
      : `${format(currentDate, 'MMMM yyyy')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
          {renderTitle()}
        </h2>
        <div className="flex items-center gap-4">
          <select 
            value={viewMode} 
            onChange={(e) => setViewMode(e.target.value)}
            className="mr-2 p-1 border rounded"
          >
            <option value="week">Week View</option>
            <option value="month">Month View</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={prevPeriod}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPeriod}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className={`grid ${viewMode === 'week' ? 'grid-cols-1 sm:grid-cols-5' : 'grid-cols-5'} gap-2`}>
        {(viewMode === 'week' ? weekDays : monthDays).map((day) => (
          <div 
            key={day.toString()} 
            className="bg-white border rounded-lg shadow-md mb-4 sm:mb-10"
          >
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
      <p>Events brought to you by <a href="https://guild.host/?utm_source=referral&utm_medium=chat&utm_campaign=general_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guild.host</a></p>
    </div>
  );
}