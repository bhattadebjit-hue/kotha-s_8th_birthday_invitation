import React, { useRef, useEffect, useState } from 'react';
import { PartyPopper } from 'lucide-react';

export interface CartoonCharacter {
  id: string;
  imgUrl: string;
  altText: string;
  borderColor: string;
  bgColor: string;
}

const CARTOON_ITEMS: CartoonCharacter[] = [
  {
    id: 'tom-jerry',
    imgUrl: '/cartoons/tom_and_jerry.webp',
    altText: 'Tom and Jerry',
    borderColor: 'border-amber-400 shadow-amber-200/60',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'motu-patlu',
    imgUrl: '/cartoons/motu_patlu.webp',
    altText: 'Motu Patlu',
    borderColor: 'border-red-400 shadow-red-200/60',
    bgColor: 'bg-red-50',
  },
  {
    id: 'oggy-cockroaches',
    imgUrl: '/cartoons/oggy_cockroaches.webp',
    altText: 'Oggy and Cockroaches',
    borderColor: 'border-sky-400 shadow-sky-200/60',
    bgColor: 'bg-sky-50',
  },
  {
    id: 'gopal-bhar',
    imgUrl: '/cartoons/gopal_bhar.webp',
    altText: 'Gopal Bhar',
    borderColor: 'border-emerald-400 shadow-emerald-200/60',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'nonte-fonte',
    imgUrl: '/cartoons/nonte_fonte.webp',
    altText: 'Nonte Fonte',
    borderColor: 'border-purple-400 shadow-purple-200/60',
    bgColor: 'bg-purple-50',
  },
];

// Duplicate items 4 times to ensure seamless infinite looping in both directions
const MULTIPLIED_ITEMS = [
  ...CARTOON_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set1-${idx}` })),
  ...CARTOON_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set2-${idx}` })),
  ...CARTOON_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set3-${idx}` })),
  ...CARTOON_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set4-${idx}` })),
];

export const CartoonConveyor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const interactionTimeoutRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftStartRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Measure single set width when mounted / on resize
    let singleSetWidth = 0;
    const calculateSetWidth = () => {
      // 5 items in a single set
      const firstSetElements = container.querySelectorAll<HTMLElement>('[data-set="set1"]');
      if (firstSetElements.length > 0) {
        let total = 0;
        firstSetElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const computed = window.getComputedStyle(el);
          const marginRight = parseFloat(computed.marginRight) || 0;
          total += rect.width + marginRight;
        });
        if (total > 0) {
          singleSetWidth = total;
        }
      }
    };

    calculateSetWidth();
    window.addEventListener('resize', calculateSetWidth);

    // Position in middle set initially
    if (singleSetWidth > 0) {
      container.scrollLeft = singleSetWidth * 2;
    } else {
      container.scrollLeft = 500;
    }

    let animationFrameId: number;
    const autoScrollSpeed = 0.65; // Smooth movement speed from left to right

    const step = () => {
      if (!isInteractingRef.current && container) {
        // Move Left to Right: decrease scrollLeft so elements travel towards the right (→)
        container.scrollLeft -= autoScrollSpeed;

        if (singleSetWidth > 0) {
          // If we reach towards the left end, wrap forward by one set width
          if (container.scrollLeft <= singleSetWidth) {
            container.scrollLeft += singleSetWidth;
          }
          // If user scrolled far right, wrap backward by one set width
          else if (container.scrollLeft >= singleSetWidth * 3) {
            container.scrollLeft -= singleSetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', calculateSetWidth);
      if (interactionTimeoutRef.current) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const markInteracting = () => {
    isInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    // Resume auto-movement 1.2s after interaction ceases
    interactionTimeoutRef.current = window.setTimeout(() => {
      isInteractingRef.current = false;
    }, 1200);
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    isInteractingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    container.scrollLeft = scrollLeftStartRef.current - walk;
    markInteracting();
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      markInteracting();
    }
  };

  return (
    <div id="cartoon-conveyor-section" className="w-full my-2.5 relative select-none">
      {/* Section Tag */}
      <div className="flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/90 border border-pink-200 text-pink-600 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
          <PartyPopper className="w-3.5 h-3.5 text-pink-500" />
          <span>Cartoon Friends Celebrating with Kotha!</span>
        </div>
      </div>

      {/* Outer Wrapper with soft gradient fade edges for elegant entry and exit */}
      <div className="relative w-full max-w-lg mx-auto overflow-hidden">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-[#FFF0F5] to-transparent z-10 pointer-events-none" />

        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-[#FFF0F5] to-transparent z-10 pointer-events-none" />

        {/* Moveable Conveyor Scroll Track */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={markInteracting}
          onTouchMove={markInteracting}
          onTouchEnd={markInteracting}
          onWheel={markInteracting}
          className={`flex items-center overflow-x-auto py-2 px-4 cursor-grab ${
            isDragging ? 'cursor-grabbing select-none' : ''
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {MULTIPLIED_ITEMS.map((item, idx) => {
            const setGroup = item.uniqueKey.split('-')[0];
            return (
              <div
                key={item.uniqueKey}
                data-set={setGroup}
                className="shrink-0 mr-3 sm:mr-4.5 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                {/* Bigger Image Card (No name/text, clean square presentation) */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-2.5 sm:border-3 p-1 shadow-md bg-white ${item.borderColor} ${item.bgColor}`}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.altText}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith('.webp')) {
                        target.src = target.src.replace('.webp', '.png');
                      }
                    }}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl block select-none pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
