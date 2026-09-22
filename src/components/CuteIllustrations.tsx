import React from 'react';

/**
 * Cute, child-friendly original cartoon illustrations
 * Soft pastels: pink, lavender, sky blue, sunny yellow, peach, warm cream
 */

// 1. ADORABLE ORIGINAL BUNNY
export const CuteBunny: React.FC<{ className?: string; withHat?: boolean; balloonColor?: string }> = ({
  className = 'w-24 h-28',
  withHat = true,
  balloonColor = '#FFB7B2',
}) => {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Balloon on a string if requested */}
      {balloonColor && (
        <g className="animate-float-gentle" style={{ transformOrigin: '20px 40px' }}>
          <path d="M 22 45 Q 26 70 34 95" stroke="#D8B4E2" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <ellipse cx="20" cy="30" rx="14" ry="18" fill={balloonColor} />
          <ellipse cx="16" cy="24" rx="4" ry="7" fill="white" opacity="0.6" />
          <polygon points="18,48 22,48 20,52" fill={balloonColor} />
        </g>
      )}

      {/* Left Ear */}
      <ellipse cx="46" cy="38" rx="9" ry="24" transform="rotate(-12 46 38)" fill="#FFF5F8" stroke="#FBCFE8" strokeWidth="2" />
      <ellipse cx="46" cy="38" rx="5" ry="16" transform="rotate(-12 46 38)" fill="#FCE7F3" />

      {/* Right Ear */}
      <ellipse cx="74" cy="38" rx="9" ry="24" transform="rotate(12 74 38)" fill="#FFF5F8" stroke="#FBCFE8" strokeWidth="2" />
      <ellipse cx="74" cy="38" rx="5" ry="16" transform="rotate(12 74 38)" fill="#FCE7F3" />

      {/* Party Hat */}
      {withHat && (
        <g>
          <polygon points="60,20 48,46 72,46" fill="#FDE047" stroke="#F59E0B" strokeWidth="1" />
          <path d="M 50 40 Q 60 42 70 40" stroke="#FF80BF" strokeWidth="3" />
          <circle cx="60" cy="18" r="4" fill="#FF80BF" />
        </g>
      )}

      {/* Bunny Head */}
      <ellipse cx="60" cy="74" rx="30" ry="26" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="2" />

      {/* Rosy Cheeks */}
      <ellipse cx="42" cy="80" rx="6" ry="4" fill="#FBCFE8" opacity="0.8" />
      <ellipse cx="78" cy="80" rx="6" ry="4" fill="#FBCFE8" opacity="0.8" />

      {/* Eyes with cute sparkles */}
      <ellipse cx="48" cy="71" rx="3.5" ry="4.5" fill="#334155" />
      <circle cx="46.5" cy="69" r="1.5" fill="white" />
      <ellipse cx="72" cy="71" rx="3.5" ry="4.5" fill="#334155" />
      <circle cx="70.5" cy="69" r="1.5" fill="white" />

      {/* Heart Nose */}
      <polygon points="60,76 57,73 63,73" fill="#F472B6" />

      {/* Smiling Mouth */}
      <path d="M 56 79 Q 60 83 64 79" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Whiskers */}
      <path d="M 36 75 L 26 74 M 36 78 L 27 80" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 84 75 L 94 74 M 84 78 L 93 80" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

      {/* Bunny Body */}
      <path d="M 40 96 C 36 120 84 120 80 96 Z" fill="#FFF5F8" stroke="#FCE7F3" strokeWidth="2" />

      {/* Hands holding gift or party wave */}
      <ellipse cx="42" cy="102" rx="6" ry="8" transform="rotate(20 42 102)" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="1.5" />
      <ellipse cx="78" cy="102" rx="6" ry="8" transform="rotate(-20 78 102)" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="1.5" />

      {/* Cute Bow tie */}
      <polygon points="54,95 66,95 60,98" fill="#BAE6FD" />
      <polygon points="54,101 66,101 60,98" fill="#BAE6FD" />
      <circle cx="60" cy="98" r="2.5" fill="#38BDF8" />
    </svg>
  );
};

// 2. ADORABLE ORIGINAL TEDDY BEAR
export const CuteTeddyBear: React.FC<{ className?: string; withPartyHat?: boolean }> = ({
  className = 'w-24 h-28',
  withPartyHat = true,
}) => {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ears */}
      <circle cx="38" cy="46" r="14" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1.5" />
      <circle cx="38" cy="46" r="8" fill="#FCE7D6" />

      <circle cx="82" cy="46" r="14" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1.5" />
      <circle cx="82" cy="46" r="8" fill="#FCE7D6" />

      {/* Party Hat */}
      {withPartyHat && (
        <g>
          <polygon points="60,22 48,46 72,46" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="1" />
          <circle cx="60" cy="20" r="4" fill="#FDE047" />
          <circle cx="56" cy="38" r="2" fill="#F472B6" />
          <circle cx="64" cy="42" r="2" fill="#38BDF8" />
        </g>
      )}

      {/* Teddy Head */}
      <ellipse cx="60" cy="72" rx="30" ry="26" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1.5" />

      {/* Snout Muzzle */}
      <ellipse cx="60" cy="78" rx="14" ry="11" fill="#FFF2E2" />

      {/* Rosy Cheeks */}
      <ellipse cx="40" cy="77" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.8" />
      <ellipse cx="80" cy="77" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.8" />

      {/* Eyes */}
      <circle cx="48" cy="68" r="3.5" fill="#334155" />
      <circle cx="47" cy="67" r="1.2" fill="white" />
      <circle cx="72" cy="68" r="3.5" fill="#334155" />
      <circle cx="71" cy="67" r="1.2" fill="white" />

      {/* Nose */}
      <ellipse cx="60" cy="74" rx="4.5" ry="3" fill="#6B4E3D" />
      <path d="M 60 77 L 60 82 M 56 82 Q 60 85 64 82" stroke="#6B4E3D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Teddy Body */}
      <path d="M 38 94 C 34 122 86 122 82 94 Z" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1.5" />
      <ellipse cx="60" cy="108" rx="14" ry="11" fill="#FFF2E2" />

      {/* Paws */}
      <circle cx="36" cy="100" r="7" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1" />
      <circle cx="84" cy="100" r="7" fill="#F6D5B8" stroke="#E2BA96" strokeWidth="1" />

      {/* Party Ribbon Bow */}
      <polygon points="53,94 67,94 60,98" fill="#F472B6" />
      <polygon points="53,102 67,102 60,98" fill="#F472B6" />
      <circle cx="60" cy="98" r="3" fill="#FB7185" />
    </svg>
  );
};

// 3. CUTE BIRTHDAY CAKE WITH CANDLES
export const BirthdayCakeGraphic: React.FC<{
  className?: string;
  candlesLit?: boolean;
  onCandleTap?: () => void;
  ageNumber?: number;
}> = ({ className = 'w-64 h-64', candlesLit = true, onCandleTap, ageNumber = 8 }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Cake Stand / Plate */}
        <ellipse cx="120" cy="198" rx="95" ry="14" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="3" />
        <path d="M 100 198 L 96 214 L 144 214 L 140 198 Z" fill="#E2E8F0" />
        <ellipse cx="120" cy="214" rx="26" ry="4" fill="#CBD5E1" />

        {/* BOTTOM TIER (Pastel Pink & Cream) */}
        <rect x="45" y="130" width="150" height="58" rx="14" fill="#FFE4E9" stroke="#FDA4AF" strokeWidth="2" />
        {/* Frosting drips */}
        <path
          d="M 45 142 Q 52 152 60 142 Q 70 156 80 142 Q 92 155 105 142 Q 120 158 135 142 Q 150 156 162 142 Q 174 154 185 142 Q 192 150 195 142 L 195 130 L 45 130 Z"
          fill="#FFF0F5"
        />
        {/* Strawberry decorations */}
        <circle cx="68" cy="165" r="4.5" fill="#FB7185" />
        <circle cx="95" cy="170" r="4" fill="#F472B6" />
        <circle cx="120" cy="166" r="5" fill="#FB7185" />
        <circle cx="145" cy="170" r="4" fill="#F472B6" />
        <circle cx="172" cy="165" r="4.5" fill="#FB7185" />

        {/* TOP TIER (Pastel Lavender & Mint) */}
        <rect x="68" y="86" width="104" height="48" rx="10" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="2" />
        {/* Frosting Swirl on Top Tier */}
        <path
          d="M 68 96 Q 78 106 88 96 Q 98 107 108 96 Q 118 108 128 96 Q 140 107 150 96 Q 160 105 172 96 L 172 86 L 68 86 Z"
          fill="#F5F3FF"
        />
        {/* Pastel Sprinkles */}
        <rect x="80" y="112" width="6" height="2.5" rx="1" transform="rotate(25 80 112)" fill="#F472B6" />
        <rect x="100" y="118" width="6" height="2.5" rx="1" transform="rotate(-15 100 118)" fill="#38BDF8" />
        <rect x="122" y="114" width="6" height="2.5" rx="1" transform="rotate(30 122 114)" fill="#FACC15" />
        <rect x="142" y="116" width="6" height="2.5" rx="1" transform="rotate(-20 142 116)" fill="#4ADE80" />
        <rect x="156" y="112" width="6" height="2.5" rx="1" transform="rotate(10 156 112)" fill="#FB923C" />

        {/* 8 BIRTHDAY CANDLES */}
        {[
          { x: 76, color: '#F472B6' },
          { x: 88, color: '#38BDF8' },
          { x: 100, color: '#FACC15' },
          { x: 112, color: '#C084FC' },
          { x: 128, color: '#4ADE80' },
          { x: 140, color: '#FB923C' },
          { x: 152, color: '#F472B6' },
          { x: 164, color: '#38BDF8' },
        ].map((candle, idx) => (
          <g key={idx} onClick={onCandleTap} className="cursor-pointer">
            {/* Candle Stick */}
            <rect x={candle.x - 2.5} y="62" width="5" height="26" rx="2.5" fill={candle.color} />
            {/* Candle Stripes */}
            <line x1={candle.x - 2} y1="68" x2={candle.x + 2} y2="66" stroke="white" strokeWidth="1.5" />
            <line x1={candle.x - 2} y1="76" x2={candle.x + 2} y2="74" stroke="white" strokeWidth="1.5" />
            {/* Wick */}
            <line x1={candle.x} y1="62" x2={candle.x} y2="57" stroke="#475569" strokeWidth="1.2" />

            {/* Glowing Flame */}
            {candlesLit ? (
              <g className="animate-pulse-glow" style={{ transformOrigin: `${candle.x}px 50px` }}>
                {/* Outer Glow */}
                <ellipse cx={candle.x} cy="49" rx="7" ry="10" fill="#FEF08A" opacity="0.6" />
                {/* Main Flame */}
                <path
                  d={`M ${candle.x} 40 Q ${candle.x + 4.5} 48 ${candle.x} 55 Q ${candle.x - 4.5} 48 ${candle.x} 40 Z`}
                  fill="#F59E0B"
                />
                {/* Inner Core */}
                <ellipse cx={candle.x} cy="50" rx="2" ry="4" fill="#FEF9C3" />
              </g>
            ) : (
              /* Sweet Little Smoke Puff when blown out */
              <g className="animate-float-slow">
                <circle cx={candle.x + 2} cy="52" r="2.5" fill="#CBD5E1" opacity="0.7" />
                <circle cx={candle.x - 1} cy="45" r="3.5" fill="#E2E8F0" opacity="0.6" />
              </g>
            )}
          </g>
        ))}

        {/* Big Age Badge in Center */}
        <g>
          <circle cx="120" cy="155" r="16" fill="#FEF08A" stroke="#F59E0B" strokeWidth="2" />
          <text
            x="120"
            y="161"
            textAnchor="middle"
            fill="#B45309"
            fontSize="18"
            fontWeight="bold"
            fontFamily="'Fredoka', sans-serif"
          >
            {ageNumber}
          </text>
        </g>
      </svg>
    </div>
  );
};

// 4. FLOATING PASTEL BALLOONS BUNCH
export const BalloonsCluster: React.FC<{ className?: string }> = ({ className = 'w-28 h-36' }) => {
  return (
    <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Balloon Strings converging */}
      <path d="M 40 55 Q 50 90 60 140" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      <path d="M 60 45 Q 60 90 60 140" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      <path d="M 80 55 Q 70 90 60 140" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      <circle cx="60" cy="140" r="3" fill="#F472B6" />

      {/* Left Pastel Pink Balloon */}
      <g>
        <ellipse cx="40" cy="40" rx="18" ry="24" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1.5" />
        <ellipse cx="34" cy="32" rx="4" ry="9" fill="white" opacity="0.6" />
        <polygon points="38,64 42,64 40,68" fill="#F472B6" />
      </g>

      {/* Right Pastel Sky-Blue Balloon */}
      <g>
        <ellipse cx="80" cy="42" rx="18" ry="24" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5" />
        <ellipse cx="74" cy="34" rx="4" ry="9" fill="white" opacity="0.6" />
        <polygon points="78,66 82,66 80,70" fill="#38BDF8" />
      </g>

      {/* Center Sunny Yellow Balloon */}
      <g>
        <ellipse cx="60" cy="28" rx="20" ry="26" fill="#FEF08A" stroke="#FACC15" strokeWidth="1.5" />
        <ellipse cx="54" cy="20" rx="5" ry="10" fill="white" opacity="0.7" />
        <polygon points="58,54 62,54 60,58" fill="#FACC15" />
      </g>
    </svg>
  );
};

// 5. SMILING KAWAII STAR
export const SmilingStar: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#FDE047',
}) => {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon
        points="30,5 37,21 54,22 41,33 46,50 30,40 14,50 19,33 6,22 23,21"
        fill={color}
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Cheeks */}
      <circle cx="23" cy="31" r="2.5" fill="#FDA4AF" />
      <circle cx="37" cy="31" r="2.5" fill="#FDA4AF" />
      {/* Eyes */}
      <circle cx="25" cy="26" r="1.8" fill="#1E293B" />
      <circle cx="35" cy="26" r="1.8" fill="#1E293B" />
      {/* Smile */}
      <path d="M 27 30 Q 30 34 33 30" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
};

// 6. FLUFFY PASTEL CLOUD
export const FluffyCloud: React.FC<{ className?: string }> = ({ className = 'w-24 h-14' }) => {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 20 45 C 10 45 6 36 12 28 C 12 18 24 14 34 18 C 42 8 60 8 68 18 C 76 14 88 18 88 28 C 94 36 90 45 80 45 Z"
        fill="#FFFFFF"
        stroke="#E0F2FE"
        strokeWidth="2"
        fillOpacity="0.9"
      />
      {/* Kawaii Face */}
      <circle cx="42" cy="31" r="1.8" fill="#64748B" />
      <circle cx="58" cy="31" r="1.8" fill="#64748B" />
      <ellipse cx="36" cy="34" rx="2.5" ry="1.5" fill="#FBCFE8" />
      <ellipse cx="64" cy="34" rx="2.5" ry="1.5" fill="#FBCFE8" />
      <path d="M 47 34 Q 50 37 53 34" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
};

// 7. CUTE GIFT BOX
export const CuteGiftBox: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Box base */}
      <rect x="16" y="32" width="48" height="40" rx="6" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="2" />
      {/* Vertical Ribbon */}
      <rect x="36" y="32" width="8" height="40" fill="#F472B6" />
      {/* Box Lid */}
      <rect x="12" y="24" width="56" height="12" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <rect x="36" y="24" width="8" height="12" fill="#F472B6" />
      {/* Bow */}
      <path d="M 40 24 C 32 14 26 22 40 24 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1" />
      <path d="M 40 24 C 48 14 54 22 40 24 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1" />
      <circle cx="40" cy="24" r="3" fill="#E11D48" />
    </svg>
  );
};
