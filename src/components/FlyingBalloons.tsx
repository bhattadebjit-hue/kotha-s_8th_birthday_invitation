import React from 'react';

interface BalloonItem {
  id: string;
  left: string; // percentage across screen width
  width: number;
  height: number;
  animName: 'balloonRise1' | 'balloonRise2' | 'balloonRise3';
  duration: string;
  delay: string;
  gradId: string;
  colorStart: string;
  colorEnd: string;
  opacity: number;
}

// 16 balloons distributed evenly across full screen width at a steady medium pace (9s - 11s)
const FULL_SCREEN_BALLOONS: BalloonItem[] = [
  {
    id: 'b1',
    left: '2%',
    width: 44,
    height: 60,
    animName: 'balloonRise1',
    duration: '9.8s',
    delay: '-4.2s',
    gradId: 'balloon-pink-1',
    colorStart: '#FF6584',
    colorEnd: '#FF8EA5',
    opacity: 0.82,
  },
  {
    id: 'b2',
    left: '8%',
    width: 36,
    height: 50,
    animName: 'balloonRise2',
    duration: '10.5s',
    delay: '-8.5s',
    gradId: 'balloon-gold-1',
    colorStart: '#F59E0B',
    colorEnd: '#FCD34D',
    opacity: 0.78,
  },
  {
    id: 'b3',
    left: '15%',
    width: 46,
    height: 64,
    animName: 'balloonRise3',
    duration: '9.2s',
    delay: '-1.5s',
    gradId: 'balloon-purple-1',
    colorStart: '#8B5CF6',
    colorEnd: '#C084FC',
    opacity: 0.82,
  },
  {
    id: 'b4',
    left: '22%',
    width: 38,
    height: 52,
    animName: 'balloonRise1',
    duration: '10.2s',
    delay: '-6.0s',
    gradId: 'balloon-sky-1',
    colorStart: '#0284C7',
    colorEnd: '#38BDF8',
    opacity: 0.75,
  },
  {
    id: 'b5',
    left: '29%',
    width: 48,
    height: 66,
    animName: 'balloonRise2',
    duration: '9.5s',
    delay: '-3.2s',
    gradId: 'balloon-rose-1',
    colorStart: '#E11D48',
    colorEnd: '#FB7185',
    opacity: 0.8,
  },
  {
    id: 'b6',
    left: '36%',
    width: 35,
    height: 48,
    animName: 'balloonRise3',
    duration: '10.8s',
    delay: '-7.8s',
    gradId: 'balloon-mint-1',
    colorStart: '#059669',
    colorEnd: '#34D399',
    opacity: 0.75,
  },
  {
    id: 'b7',
    left: '44%',
    width: 45,
    height: 62,
    animName: 'balloonRise1',
    duration: '9.4s',
    delay: '-5.0s',
    gradId: 'balloon-coral-1',
    colorStart: '#EA580C',
    colorEnd: '#FB923C',
    opacity: 0.8,
  },
  {
    id: 'b8',
    left: '51%',
    width: 38,
    height: 52,
    animName: 'balloonRise2',
    duration: '10.0s',
    delay: '-2.0s',
    gradId: 'balloon-lavender-1',
    colorStart: '#7C3AED',
    colorEnd: '#A78BFA',
    opacity: 0.76,
  },
  {
    id: 'b9',
    left: '58%',
    width: 44,
    height: 60,
    animName: 'balloonRise3',
    duration: '9.6s',
    delay: '-6.8s',
    gradId: 'balloon-pink-2',
    colorStart: '#EC4899',
    colorEnd: '#F472B6',
    opacity: 0.82,
  },
  {
    id: 'b10',
    left: '65%',
    width: 36,
    height: 50,
    animName: 'balloonRise1',
    duration: '10.4s',
    delay: '-0.8s',
    gradId: 'balloon-teal-1',
    colorStart: '#0D9488',
    colorEnd: '#2DD4BF',
    opacity: 0.75,
  },
  {
    id: 'b11',
    left: '72%',
    width: 48,
    height: 66,
    animName: 'balloonRise2',
    duration: '9.3s',
    delay: '-4.6s',
    gradId: 'balloon-amber-1',
    colorStart: '#D97706',
    colorEnd: '#FDE68A',
    opacity: 0.8,
  },
  {
    id: 'b12',
    left: '79%',
    width: 40,
    height: 55,
    animName: 'balloonRise3',
    duration: '10.1s',
    delay: '-8.0s',
    gradId: 'balloon-purple-2',
    colorStart: '#9333EA',
    colorEnd: '#C084FC',
    opacity: 0.78,
  },
  {
    id: 'b13',
    left: '86%',
    width: 46,
    height: 63,
    animName: 'balloonRise1',
    duration: '9.7s',
    delay: '-2.7s',
    gradId: 'balloon-rose-2',
    colorStart: '#E11D48',
    colorEnd: '#FDA4AF',
    opacity: 0.82,
  },
  {
    id: 'b14',
    left: '92%',
    width: 34,
    height: 48,
    animName: 'balloonRise2',
    duration: '10.6s',
    delay: '-6.2s',
    gradId: 'balloon-blue-2',
    colorStart: '#0284C7',
    colorEnd: '#7DD3FC',
    opacity: 0.74,
  },
  {
    id: 'b15',
    left: '96%',
    width: 42,
    height: 58,
    animName: 'balloonRise3',
    duration: '9.5s',
    delay: '-1.0s',
    gradId: 'balloon-orange-2',
    colorStart: '#EA580C',
    colorEnd: '#FDBA74',
    opacity: 0.78,
  },
  {
    id: 'b16',
    left: '48%',
    width: 50,
    height: 68,
    animName: 'balloonRise1',
    duration: '10.2s',
    delay: '-7.4s',
    gradId: 'balloon-pink-3',
    colorStart: '#F43F5E',
    colorEnd: '#FECDD3',
    opacity: 0.8,
  },
];

export const FlyingBalloons: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0"
    >
      {FULL_SCREEN_BALLOONS.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0"
          style={{
            left: b.left,
            animationName: b.animName,
            animationDuration: b.duration,
            animationDelay: b.delay,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            opacity: b.opacity,
            willChange: 'transform',
          }}
        >
          {/* Balloon SVG with balloon body, specular reflection highlight, knot, and dangling curvy string */}
          <svg
            width={b.width}
            height={b.height + 40}
            viewBox="0 0 50 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xs"
          >
            <defs>
              <linearGradient id={b.gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={b.colorEnd} />
                <stop offset="100%" stopColor={b.colorStart} />
              </linearGradient>
            </defs>

            {/* Balloon Body */}
            <path
              d="M25 5C37 5 46 16 46 30C46 45 34 52 26.5 54.5L25 55L23.5 54.5C16 52 4 45 4 30C4 16 13 5 25 5Z"
              fill={`url(#${b.gradId})`}
            />

            {/* Top-Left Specular Shine Highlight */}
            <ellipse
              cx="17"
              cy="18"
              rx="6"
              ry="10"
              transform="rotate(-25 17 18)"
              fill="white"
              fillOpacity="0.42"
            />
            {/* Secondary reflection sparkle */}
            <circle cx="12" cy="30" r="2" fill="white" fillOpacity="0.3" />

            {/* Balloon Knot */}
            <polygon
              points="22,54 28,54 26,58 24,58"
              fill={b.colorStart}
            />

            {/* Curvy Dangling String */}
            <path
              d="M25 58 C22 66, 29 74, 24 82 C21 86, 26 90, 24 94"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
