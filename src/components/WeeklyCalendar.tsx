import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { addWeeks, subWeeks, format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import { useEvents } from '../hooks/useEvents';
import { useAuth } from '../hooks/useAuth';
import EventForm from './EventForm';
import AuthModal from './AuthModal';
import EventManagement from './EventManagement';
import EventCard from './EventCard';
import type { Event } from '../types/events';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authError, setAuthError] = useState<string>();
  const { events, addNewEvent } = useEvents();
  const { user, login, logout } = useAuth();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd }).slice(0, 5);

  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  const handleAddClick = () => {
    if (user) {
      setShowEventForm(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthSubmit = async (email: string, password: string) => {
    try {
      const success = await login(email, password);
      if (success) {
        setAuthError(undefined);
        setShowAuthModal(false);
        setShowEventForm(true);
      } else {
        setAuthError('Invalid credentials');
      }
    } catch (error) {
      setAuthError('Authentication failed');
    }
  };

  const handleAddEvent = async (event: Event) => {
    try {
      await addNewEvent(event);
      setShowEventForm(false);
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

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
          <button
            onClick={handleAddClick}
            className="flex items-center gap-2 px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Event
          </button>
          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          mode="login"
          onSubmit={handleAuthSubmit}
          onCancel={() => setShowAuthModal(false)}
          error={authError}
        />
      )}

      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full">
            <EventForm
              onSubmit={handleAddEvent}
              onCancel={() => setShowEventForm(false)}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-5 gap-4">
        {days.map((day) => (
          <div key={day.toString()} className="min-h-[400px]">
            <div className="text-center p-2 bg-gray-50 rounded-t-lg">
              <p className="font-semibold text-gray-700">{format(day, 'EEEE')}</p>
              <p className="text-sm text-gray-500">{format(day, 'MMM d')}</p>
            </div>
            <div className="space-y-2 p-2">
              {events[format(day, 'yyyy-MM-dd')]?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {user && <EventManagement />}
    </div>
  );
}