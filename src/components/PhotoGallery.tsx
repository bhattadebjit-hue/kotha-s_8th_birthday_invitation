import React from 'react';
import { Camera, Sparkles, Heart } from 'lucide-react';
import { BirthdayPhoto } from '../invitationConfig.ts';
import { CuteBunny, CuteTeddyBear, SmilingStar, BalloonsCluster } from './CuteIllustrations.tsx';

interface PhotoGalleryProps {
  photos: BirthdayPhoto[];
  nickname: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, nickname }) => {
  return (
    <div id="photo-gallery-section" className="space-y-4">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-xs font-semibold mb-2">
          <Camera className="w-3.5 h-3.5" />
          Sweet Moments
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display">
          {nickname}&apos;s Memories
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Capturing joy, smiles, and 8 wonderful years
        </p>
      </div>

      {/* Grid of Polaroid Memory Frames */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {photos.map((item, idx) => (
          <div
            key={item.id || idx}
            id={`memory-card-${idx}`}
            className="group relative bg-white p-2.5 sm:p-3 rounded-2xl shadow-xs border-2 border-pink-100/90 transition-transform duration-300 hover:rotate-1 hover:shadow-md"
          >
            {/* Cute Washi Tape sticker accent */}
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-4 rounded-xs opacity-75 shadow-2xs z-10 ${
                idx % 2 === 0
                  ? 'bg-gradient-to-r from-pink-200 to-pink-300 -rotate-2'
                  : 'bg-gradient-to-r from-purple-200 to-purple-300 rotate-2'
              }`}
            />

            {/* Photo / Cute Character Placeholder */}
            <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 overflow-hidden flex flex-col items-center justify-center p-2 border border-slate-100">
              {item.url && item.url.trim() !== '' ? (
                <img
                  src={item.url}
                  alt={item.caption || `${nickname}'s moment`}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.webp')) {
                      target.src = target.src.replace('.webp', '.png');
                    }
                  }}
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Cute Child-friendly Placeholder Illustration */
                <div className="flex flex-col items-center justify-center text-center p-2">
                  {idx === 0 && <CuteBunny className="w-20 h-24" withHat={true} />}
                  {idx === 1 && <CuteTeddyBear className="w-20 h-24" withPartyHat={true} />}
                  {idx === 2 && <BalloonsCluster className="w-20 h-24" />}
                  {idx === 3 && (
                    <div className="flex flex-col items-center">
                      <SmilingStar size={36} color="#FDE047" className="animate-twinkle" />
                      <span className="text-[10px] font-bold text-amber-700 mt-2 font-display bg-amber-100 px-2 py-0.5 rounded-full">
                        7 Years of Magic
                      </span>
                    </div>
                  )}
                  <span className="text-[10px] font-medium text-slate-400 mt-1">
                    Photo Placeholder
                  </span>
                </div>
              )}
            </div>

            {/* Polaroid Caption */}
            <div className="pt-2 text-center">
              {item.ageTag && (
                <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full mb-0.5">
                  {item.ageTag}
                </span>
              )}
              <p className="text-xs font-bold text-slate-800 font-display truncate">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
