import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import {
  SlideshowImage,
  IMAGE_1_URL,
  IMAGE_2_URL,
  IMAGE_3_URL,
  IMAGE_4_URL,
  IMAGE_5_URL,
  IMAGE_6_URL,
} from '../invitationConfig.ts';

interface HorizontalSlideshowProps {
  images?: SlideshowImage[];
  title?: string;
  subtitle?: string;
}

// All 6 uploaded celebration photos of Agnisnata Maity (Kotha)
const UPLOADED_SLIDESHOW_ITEMS: SlideshowImage[] = [
  {
    id: 'kotha-img-1',
    label: 'Photo 1',
    url: IMAGE_1_URL,
    alt: 'Agnisnata Maity (Kotha) in traditional floral garland and headdress smiling',
    caption: 'Baby Kotha 🌸',
  },
  {
    id: 'kotha-img-2',
    label: 'Photo 2',
    url: IMAGE_2_URL,
    alt: 'Agnisnata Maity (Kotha) in festive attire peeking through greenery',
    caption: 'Little Explorer 🌿',
  },
  {
    id: 'kotha-img-3',
    label: 'Photo 3',
    url: IMAGE_3_URL,
    alt: 'Agnisnata Maity (Kotha) smiling gracefully in royal red formal dress',
    caption: 'Princess in Red 👑',
  },
  {
    id: 'kotha-img-4',
    label: 'Photo 4',
    url: IMAGE_4_URL,
    alt: 'Agnisnata Maity (Kotha) in sweet pink dress with bow making a peace sign',
    caption: 'Peace & Big Smiles ✌️',
  },
  {
    id: 'kotha-img-5',
    label: 'Photo 5',
    url: IMAGE_5_URL,
    alt: 'Agnisnata Maity (Kotha) sitting gracefully on the lawn in traditional dress',
    caption: 'Festive Twirls & Grace 🌼',
  },
  {
    id: 'kotha-img-6',
    label: 'Photo 6',
    url: IMAGE_6_URL,
    alt: 'Agnisnata Maity (Kotha) dancing and twirling under celebration lights',
    caption: 'Happy 8th Birthday! 🎉',
  },
];

export const HorizontalSlideshow: React.FC<HorizontalSlideshowProps> = ({
  images,
}) => {
  const [failedIndices, setFailedIndices] = useState<Record<string, boolean>>({});

  // Ensure all 6 uploaded images are used
  const baseItems = (images && images.length === 6 ? images : UPLOADED_SLIDESHOW_ITEMS).slice(0, 6);

  // In Left-to-Right conveyor belt motion (positive X direction),
  // placing items in order [6, 5, 4, 3, 2, 1] ensures that Image 1 leads on the right,
  // followed by Image 2, Image 3, Image 4, Image 5, Image 6, and immediately followed
  // by Image 1 of the duplicated sequence forever.
  const conveyorSequence = [
    baseItems[5], // Image 6
    baseItems[4], // Image 5
    baseItems[3], // Image 4
    baseItems[2], // Image 3
    baseItems[1], // Image 2
    baseItems[0], // Image 1 (Front/Leading)
  ];

  // Handle image load error fallback safely (fall back to PNG first, then placeholder)
  const handleImageError = (imgId: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src.endsWith('.webp')) {
      target.src = target.src.replace('.webp', '.png');
    } else {
      setFailedIndices((prev) => ({ ...prev, [imgId]: true }));
    }
  };

  return (
    <section
      id="horizontal-slideshow-section"
      className="w-full relative overflow-hidden"
      aria-label="Continuous horizontal photo slideshow"
    >
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50/95 via-purple-50/40 to-pink-50/90 p-3 sm:p-5 border-2 border-pink-100/90 shadow-sm text-center">
        {/* ========================================================================= */}
        {/* SLIDESHOW VIEWPORT: overflow-hidden strictly prevents horizontal scroll   */}
        {/* ========================================================================= */}
        <div
          id="slideshow-viewport"
          className="w-full relative overflow-hidden rounded-2xl py-1 select-none flex items-center"
        >
          {/* ========================================================================= */}
          {/* CONTINUOUS TRACK: Single continuously moving track with 0 pause/reset     */}
          {/* ========================================================================= */}
          <div
            id="slideshow-track"
            className="flex w-max items-center animate-continuous-scroll pointer-events-none select-none"
            style={{ willChange: 'transform' }}
          >
            {/* SEQUENCE SET 1: Exactly 6 Images with uniform right-margin */}
            <div className="flex items-center shrink-0">
              {conveyorSequence.map((img, idx) => {
                const isFailed = failedIndices[`seq1-${img.id || idx}`];

                return (
                  <div
                    key={`seq1-img-${img.id || idx}`}
                    id={`slideshow-item-1-${idx + 1}`}
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 mr-3.5 sm:mr-5 md:mr-6 aspect-square relative rounded-2xl overflow-hidden shadow-sm border-2 border-white/95 bg-white shrink-0"
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    {!isFailed ? (
                      <img
                        src={img.url}
                        alt={img.alt || `Agnisnata Maity (Kotha) photo ${idx + 1}`}
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        draggable={false}
                        onError={(e) => handleImageError(`seq1-${img.id || idx}`, e)}
                        className="w-full h-full object-cover aspect-square block select-none"
                        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br from-pink-100/70 to-purple-100/70 text-pink-700 text-center">
                        <Heart className="w-6 h-6 mb-1 text-pink-400 fill-pink-300" />
                        <span className="text-xs font-bold leading-tight line-clamp-1">
                          {img.caption || `Photo ${idx + 1}`}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SEQUENCE SET 2: Duplicated Clone with identical right-margins for 100% seamless zero-pixel loop */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {conveyorSequence.map((img, idx) => {
                const isFailed = failedIndices[`seq2-${img.id || idx}`];

                return (
                  <div
                    key={`seq2-img-${img.id || idx}`}
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 mr-3.5 sm:mr-5 md:mr-6 aspect-square relative rounded-2xl overflow-hidden shadow-sm border-2 border-white/95 bg-white shrink-0"
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    {!isFailed ? (
                      <img
                        src={img.url}
                        alt=""
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        draggable={false}
                        onError={(e) => handleImageError(`seq2-${img.id || idx}`, e)}
                        className="w-full h-full object-cover aspect-square block select-none"
                        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br from-pink-100/70 to-purple-100/70 text-pink-700 text-center">
                        <Heart className="w-6 h-6 mb-1 text-pink-400 fill-pink-300" />
                        <span className="text-xs font-bold leading-tight line-clamp-1">
                          {img.caption || `Photo ${idx + 1}`}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section Footer Accent */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          <span>Eight years of laughter, smiles & wonderful memories</span>
        </div>
      </div>
    </section>
  );
};
