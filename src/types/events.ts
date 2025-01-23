export interface Event {
  id: string;
  title: string;
  description: string;
  time: string;
  thumbnail: string;
  images: string[];
  link: string;
  date: string; // ISO date string (YYYY-MM-DD)
}

export interface DayEvents {
  [key: string]: Event[];
}export interface GuildEvent {
  id: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  timeZone: string;
  uploadedSocialCard: {
    url: string;
  };
  prettyUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  thumbnail: string;
  link: string;
}