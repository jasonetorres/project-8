import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Event } from '../types/events';
import { formatTo12Hour } from '../utils/timeUtils';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [showModal, setShowModal] = useState(false);
  const formattedTime = formatTo12Hour(event.time);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700"
      >
        <div className="aspect-[16/9] w-full">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-800 dark:text-gray-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{formattedTime}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
            <div className="relative">
            <img 
              src={event.thumbnail} 
              alt={event.title}
              className="rounded-t-lg"
            />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <p>Date: {event.date}</p>
                <p>Time: {formattedTime}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-block px-4 py-2 bg-slate-500 dark:bg-slate-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                View Event Details
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}