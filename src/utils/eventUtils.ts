import { format, parseISO, startOfDay } from 'date-fns';
import type { Event, DayEvents } from '../types/events';

export const formatEventDate = (date: Date): string => {
  return format(startOfDay(date), 'yyyy-MM-dd');
};

export const getEventDateKey = (dateStr: string): string => {
  return format(parseISO(dateStr), 'yyyy-MM-dd');
};

export const addEvent = (events: DayEvents, event: Event): DayEvents => {
  const dateKey = getEventDateKey(event.date);
  return {
    ...events,
    [dateKey]: [...(events[dateKey] || []), event],
  };
};

export const removeEvent = (events: DayEvents, eventId: string, date: string): DayEvents => {
  const dateKey = getEventDateKey(date);
  if (!events[dateKey]) return events;
  
  return {
    ...events,
    [dateKey]: events[dateKey].filter(event => event.id !== eventId),
  };
};