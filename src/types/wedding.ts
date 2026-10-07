export interface WeddingEvent {
  id: string;
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  attire: string;
  attireDescription: string;
  accentColor: string;
  image?: string;
  calendarGoogleUrl: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface RSVPData {
  fullName: string;
  guestsCount: number;
  attending: 'yes' | 'no';
  eventsAttending: string[];
  dietaryPreferences: string;
  blessingMessage: string;
}
