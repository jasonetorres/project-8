import { format, parseISO } from 'date-fns';

export const formatTo12Hour = (time: string): string => {
  return format(parseISO(time), 'h:mm a');
};

export const formatEventTime = (startAt: string, endAt: string, timeZone: string): string => {
  const start = format(parseISO(startAt), 'h:mm a');
  const end = format(parseISO(endAt), 'h:mm a');
  return `${start} - ${end} ${timeZone}`;
};