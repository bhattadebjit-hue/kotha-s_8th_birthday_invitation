import React, { useState } from 'react';
import { Calendar, Clock, MapPin, PartyPopper, Cake, Copy, Check, CalendarPlus, Navigation, ExternalLink, Phone, PhoneCall } from 'lucide-react';
import { InvitationConfig } from '../invitationConfig.ts';
import { CuteGiftBox } from './CuteIllustrations.tsx';

interface EventDetailsProps {
  config: InvitationConfig;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ config }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const googleMapsLink =
    config.googleMapsUrl ||
    'https://www.google.com/maps/search/?api=1&query=22.525111,88.245028';

  const handleCopyMapLink = () => {
    navigator.clipboard?.writeText(googleMapsLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    // Format: 20261004T160000 / 20261004T200000
    const title = encodeURIComponent(`${config.nickname}'s ${config.turningAge}th Birthday Celebration! 🎂`);
    const details = encodeURIComponent(
      `Celebrating ${config.childName} (${config.nickname}) turning ${config.turningAge} years old! ${config.invitationHeadline} Google Maps: ${googleMapsLink}`
    );
    const location = encodeURIComponent(`Google Maps Location: ${googleMapsLink}`);
    // Start date 20261004T160000Z to 20261004T200000Z
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261004T160000/20261004T200000&details=${details}&location=${location}`;

    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="event-details-container" className="space-y-4">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-100 rounded-full text-pink-700 text-xs font-semibold mb-2">
          <PartyPopper className="w-3.5 h-3.5" />
          Celebration Information
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display">
          Event Details
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Everything you need to know to celebrate with us
        </p>
      </div>

      {/* Grid of Key Info Cards (Optimized for 1-hand mobile reading) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* 1. Date Card */}
        <div
          id="detail-card-date"
          className="bg-gradient-to-br from-pink-50 to-white p-4 rounded-2xl border-2 border-pink-200 shadow-xs flex items-center gap-3.5"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-500 text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
            <Calendar className="w-5 h-5 mb-0.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">OCT</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-pink-600 uppercase tracking-wide">
              Birthday Date
            </span>
            <h4 className="text-base font-bold text-slate-800 font-display">
              {config.birthdayDateDisplay}
            </h4>
            <p className="text-xs text-slate-500">Save the Sunday!</p>
          </div>
        </div>

        {/* 2. Age & Celebration */}
        <div
          id="detail-card-age"
          className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-2xl border-2 border-purple-200 shadow-xs flex items-center gap-3.5"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
            <Cake className="w-5 h-5 mb-0.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">8 YEARS</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-purple-600 uppercase tracking-wide">
              Celebration
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-800 font-display leading-snug">
              Join Us in Celebrating Her 8th Birthday!
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">Happy Birthday Kotha!</p>
          </div>
        </div>

        {/* 3. Time */}
        <div
          id="detail-card-time"
          className="bg-gradient-to-br from-sky-50 to-white p-4 rounded-2xl border-2 border-sky-200 shadow-xs flex items-center gap-3.5"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
              Time
            </span>
            <h4 className="text-base font-bold text-slate-800 font-display">
              {config.eventTime}
            </h4>
            <p className="text-xs text-slate-500">Exciting hours of celebration</p>
          </div>
        </div>
      </div>

      {/* Venue & Location Card with Clickable Google Maps Location */}
      <div
        id="detail-card-venue"
        className="bg-white p-5 rounded-3xl border-2 border-pink-100 shadow-sm relative overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                Venue Location
              </span>
              <h3 className="text-lg font-bold text-slate-800 font-display mt-0.5">
                Google Map Location
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Tap below for directions & live navigation
              </p>
            </div>
          </div>

          <div className="hidden sm:block shrink-0">
            <CuteGiftBox className="w-12 h-12" />
          </div>
        </div>

        {/* Clickable Google Maps interactive banner */}
        <a
          id="open-google-maps-card"
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border-2 border-emerald-200/80 hover:border-emerald-400 hover:shadow-md active:scale-[0.99] transition-all group cursor-pointer"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-emerald-900 font-display">
                    Open in Google Maps
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">
                  Tap to view location & start directions
                </p>
              </div>
            </div>

            <span className="shrink-0 px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold font-display shadow-xs group-hover:bg-emerald-700 transition-colors flex items-center gap-1">
              <span>Directions</span>
            </span>
          </div>
        </a>

        {/* Action buttons on mobile */}
        <div className="mt-3.5 pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <a
            id="google-maps-action-btn"
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-xs transition-all cursor-pointer font-display"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Maps</span>
          </a>

          <button
            id="copy-map-link-btn"
            onClick={handleCopyMapLink}
            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Copy Map Link</span>
              </>
            )}
          </button>

          <button
            id="add-to-calendar-btn"
            onClick={handleAddToCalendar}
            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 active:scale-95 transition-all cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4 text-pink-500" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>

      {/* Contact Details Card with Direct Call Actions */}
      <div
        id="detail-card-contact"
        className="bg-white p-5 rounded-3xl border-2 border-pink-100 shadow-sm relative overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="w-11 h-11 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-pink-700 uppercase tracking-wide">
                Contact Details
              </span>
              <h3 className="text-lg font-bold text-slate-800 font-display mt-0.5">
                Have Any Questions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Tap either number below to call us directly:
              </p>
            </div>
          </div>
        </div>

        {/* Direct Call Action Buttons */}
        <div className="mt-3.5 pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <a
            id="call-contact-1-btn"
            href="tel:+919230302070"
            className="min-h-[48px] flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-white border-2 border-pink-200/90 hover:border-pink-400 active:scale-[0.98] transition-all group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-pink-600 uppercase tracking-wider block">
                  Contact Number
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800 font-display">
                  +91 9230302070
                </span>
              </div>
            </div>

            <span className="shrink-0 px-3 py-1.5 rounded-xl bg-pink-500 text-white text-xs font-bold font-display shadow-xs group-hover:bg-pink-600 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </span>
          </a>

          <a
            id="call-contact-2-btn"
            href="tel:+919830065842"
            className="min-h-[48px] flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-white border-2 border-purple-200/90 hover:border-purple-400 active:scale-[0.98] transition-all group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block">
                  Contact Number
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800 font-display">
                  +91 9830065842
                </span>
              </div>
            </div>

            <span className="shrink-0 px-3 py-1.5 rounded-xl bg-purple-500 text-white text-xs font-bold font-display shadow-xs group-hover:bg-purple-600 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
