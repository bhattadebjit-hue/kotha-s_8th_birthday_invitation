/**
 * =====================================================================
 * BIRTHDAY INVITATION CONFIGURATION
 * =====================================================================
 * You can easily edit all details for Kotha's Birthday Celebration here!
 *
 * 1. Child's Name & Nickname
 * 2. Birthday Date & Target Countdown Time
 * 3. Venue Name
 * 4. Event Time
 * 5. Full Address & Map Link
 * 6. RSVP WhatsApp Number & Pre-filled message
 * 7. Memory Photos
 * 8. Background Music & Audio settings
 * =====================================================================
 */

// ============================================================================
// COUNTDOWN SECTION - CONTINUOUS HORIZONTAL IMAGE SLIDESHOW (6 SQUARE IMAGES)
// Optimized WebP format for instantaneous zero-delay loading with 95% reduced weight
// ============================================================================
export const IMAGE_1_URL = '/1.webp';
export const IMAGE_2_URL = '/2.webp';
export const IMAGE_3_URL = '/3.webp';
export const IMAGE_4_URL = '/4.webp';
export const IMAGE_5_URL = '/5.webp';
export const IMAGE_6_URL = '/6.webp';

export interface BirthdayPhoto {
  id: string;
  url: string; // Image URL (or cute placeholder if empty)
  caption: string;
  ageTag?: string;
}

export interface SlideshowImage {
  id: string;
  label: string; // e.g. "Image 1"
  url: string;   // Replace with your photo URL or image path
  alt: string;   // Descriptive alt text for accessibility
  caption?: string; // Optional caption
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName: 'party' | 'cake' | 'utensils' | 'music' | 'camera';
}

export interface InvitationConfig {
  // 1. Child Details
  childName: string;
  nickname: string;
  turningAge: number;

  // 2. Birthday Date & Countdown
  birthdayDateDisplay: string; // Text display on invitation
  targetDateISO: string; // Format: YYYY-MM-DDTHH:MM:SS for countdown logic (e.g., 2026-10-04T16:00:00)

  // 3, 4, 5. Event Location & Time
  venueName: string;
  eventTime: string;
  fullAddress: string;
  googleMapsUrl?: string; // Optional Google Maps link
  coordinates?: string;
  plusCode?: string;
  calendarTitle?: string;

  // 6. RSVP Details & Contact
  rsvpWhatsAppNumber: string; // Format with country code (e.g. "+919876543210" or "919876543210")
  rsvpContactPerson: string; // e.g. "Kotha's Parents"
  rsvpDeadlineText: string;
  contactPhones?: Array<{
    display: string;
    raw: string;
    label?: string;
  }>;

  // Messages
  invitationHeadline: string;
  invitationSubheadline: string;
  invitationMessagePart1: string;
  invitationMessagePart2: string;

  // 7. Memory Photos & Continuous Slideshow
  photos: BirthdayPhoto[];
  slideshowImages: SlideshowImage[];

  // 8. Music & Audio
  music: {
    title: string;
    artist: string;
    // If audioUrl is left empty or null, the built-in cute Web Audio music-box plays the Happy Birthday tune!
    audioUrl?: string;
  };

  // Highlights & Schedule
  schedule: ScheduleItem[];
  dressCodePrompt?: string;
}

export const INVITATION_DATA: InvitationConfig = {
  // 1. CHILD'S NAME & NICKNAME
  childName: 'Agnisnata Maity',
  nickname: 'Kotha',
  turningAge: 8,

  // 2. BIRTHDAY DATE & COUNTDOWN TARGET
  birthdayDateDisplay: '4th October, Sunday',
  targetDateISO: '2026-10-04T16:00:00', // 4th October 2026, 4:00 PM

  // 3. VENUE NAME
  venueName: 'Celebration Venue',

  // 4. TIME (Placeholder - edit as needed)
  eventTime: '4:00 PM onwards',

  // 5. FULL ADDRESS & GOOGLE MAPS LOCATION
  fullAddress: 'Google Map Location',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=22.525111,88.245028',

  // 6. RSVP WHATSAPP NUMBER & CONTACT PHONES
  rsvpWhatsAppNumber: '', // Example: '919876543210' (no plus or spaces needed for wa.me links)
  rsvpContactPerson: "Kotha's Parents",
  rsvpDeadlineText: 'Please kindly let us know by 1st October',
  contactPhones: [
    { display: '+91 9230302070', raw: '+919230302070', label: 'Call Contact 1' },
    { display: '+91 9830065842', raw: '+919830065842', label: 'Call Contact 2' },
  ],

  // INVITATION MESSAGE
  invitationHeadline: "Come join us as we celebrate our little Kotha turning 8!",
  invitationSubheadline: "We are so excited to celebrate this joyous milestone!",
  invitationMessagePart1: "Come join us as we celebrate our little Kotha turning 8!",
  invitationMessagePart2: "We would love to celebrate this special day with you, filled with laughter, fun, cake and lots of happy memories.",

  // 7. PHOTO GALLERY / MEMORIES
  // Add direct image URLs or leave blank to display cute animated character polaroids
  photos: [
    {
      id: 'photo-1',
      url: IMAGE_1_URL,
      caption: 'Pure Sunshine & Sweet Smiles',
      ageTag: 'Year 1',
    },
    {
      id: 'photo-2',
      url: IMAGE_2_URL,
      caption: 'Little Explorer & Greenery',
      ageTag: 'Year 3',
    },
    {
      id: 'photo-3',
      url: IMAGE_3_URL,
      caption: 'Little Princess in Royal Red',
      ageTag: 'Year 5',
    },
    {
      id: 'photo-4',
      url: IMAGE_4_URL,
      caption: 'Ready for the Big 8th Birthday!',
      ageTag: 'Year 8',
    },
  ],

  // ==========================================================================
  // CONTINUOUS HORIZONTAL IMAGE SLIDESHOW (6 SQUARE 1:1 IMAGES, LEFT -> RIGHT)
  // Directions: You can change IMAGE_1_URL through IMAGE_6_URL at the top of
  // this file or replace the URLs below directly.
  // ==========================================================================
  slideshowImages: [
    {
      id: 'slideshow-img-1',
      label: 'Photo 1',
      url: IMAGE_1_URL,
      alt: 'Baby Kotha in traditional floral garland and floral headdress smiling',
      caption: 'Baby Kotha (Year 1) 🌸',
    },
    {
      id: 'slideshow-img-2',
      label: 'Photo 2',
      url: IMAGE_2_URL,
      alt: 'Kotha in yellow and red traditional attire peeking through greenery',
      caption: 'Little Explorer 🌿',
    },
    {
      id: 'slideshow-img-3',
      label: 'Photo 3',
      url: IMAGE_3_URL,
      alt: 'Kotha smiling gracefully in her beautiful red formal princess dress',
      caption: 'Little Princess in Red 👑',
    },
    {
      id: 'slideshow-img-4',
      label: 'Photo 4',
      url: IMAGE_4_URL,
      alt: 'Kotha in sweet pink dress with bow making a peace sign',
      caption: 'Peace & Big Smiles ✌️',
    },
    {
      id: 'slideshow-img-5',
      label: 'Photo 5',
      url: IMAGE_5_URL,
      alt: 'Kotha sitting gracefully on the lawn in traditional festive outfit',
      caption: 'Festive Twirls & Grace 🌼',
    },
    {
      id: 'slideshow-img-6',
      label: 'Photo 6',
      url: IMAGE_6_URL,
      alt: 'Kotha dancing and twirling in her festive outfit under celebration lights',
      caption: 'Celebrating 8 Wonderful Years! 🎉',
    },
  ],

  // 8. BACKGROUND MUSIC
  // Default uses a sweet, built-in harmonic music box synthesizer (no external file needed)
  // Or provide an MP3 URL below:
  music: {
    title: 'Happy Birthday Music Box',
    artist: 'Cute Chime Melody',
    audioUrl: '', // Optional: 'https://example.com/birthday-song.mp3'
  },

  // SCHEDULE HIGHLIGHTS
  schedule: [
    {
      time: '[Time]',
      title: 'Welcome & Friendly Hugs',
      description: 'Arrival, party hats & welcome refreshments',
      iconName: 'party',
    },
    {
      time: '[Time]',
      title: 'Fun & Magic Games',
      description: 'Lively games, giggles, and children activities',
      iconName: 'music',
    },
    {
      time: '[Time]',
      title: 'Candle Blowing & Cake Cutting',
      description: "Singing Happy Birthday for our little Kotha!",
      iconName: 'cake',
    },
    {
      time: '[Time]',
      title: 'Delicious Treats & Feast',
      description: 'Yummy snacks, birthday cake, and dinner treats',
      iconName: 'utensils',
    },
  ],

  dressCodePrompt: 'Cute pastel or party-bright clothes are welcome!',
};
