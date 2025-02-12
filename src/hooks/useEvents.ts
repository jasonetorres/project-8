import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import type { Event, GuildEvent } from '../types/events';

interface ApiResponse {
  events: {
    edges: { node: GuildEvent }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

export const useEvents = () => {
  const [events, setEvents] = useState<Record<string, Event[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllEvents = async () => {
      let allFormattedEvents: Record<string, Event[]> = {};
      let hasNextPage = true;
      let endCursor: string | null = null;

      try {
        setLoading(true);

        while (hasNextPage) {
          const url = endCursor 
            ? `https://guild.host/api/next/torc-dev/events/upcoming?first=50&after=${endCursor}`
            : 'https://guild.host/api/next/torc-dev/events/upcoming';

          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data: ApiResponse = await response.json();
          
          if (data?.events?.edges) {
            data.events.edges.forEach(({ node: event }) => {
              const date = format(parseISO(event.startAt), 'yyyy-MM-dd');
              
              const formattedEvent: Event = {
                id: event.id,
                title: event.name,
                description: event.description || '',
                date: format(parseISO(event.startAt), 'MMMM d, yyyy'),
                time: event.startAt,
                thumbnail: event.uploadedSocialCard?.url || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
                link: `https://guild.host/events/${event.prettyUrl}`,
                images: event.uploadedSocialCard?.url ? [event.uploadedSocialCard.url] : []
              };

              if (!allFormattedEvents[date]) {
                allFormattedEvents[date] = [];
              }
              allFormattedEvents[date].push(formattedEvent);
            });
          }

          hasNextPage = data.events.pageInfo.hasNextPage;
          endCursor = data.events.pageInfo.endCursor;
        }

        setEvents(allFormattedEvents);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('Failed to fetch events:', error);
        setEvents({});
      } finally {
        setLoading(false);
      }
    };

    fetchAllEvents();
  }, []);

  return { events, loading, error };
};