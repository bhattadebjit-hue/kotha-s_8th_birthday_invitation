import React, { useState } from 'react';
import { Sparkles, Wand2, RotateCcw, Heart } from 'lucide-react';
import { BirthdayCakeGraphic, SmilingStar } from './CuteIllustrations.tsx';
import { triggerConfetti, triggerStarConfetti } from '../utils/confetti.ts';

interface MakeAWishSectionProps {
  nickname: string;
  turningAge: number;
}

export const MakeAWishSection: React.FC<MakeAWishSectionProps> = ({ nickname, turningAge }) => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [wishBlown, setWishBlown] = useState<boolean>(false);

  const handleBlowCandles = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setWishBlown(true);
      triggerConfetti(0.5);
      setTimeout(() => {
        triggerStarConfetti();
      }, 350);
    } else {
      // Re-light candles
      setCandlesLit(true);
      setWishBlown(false);
    }
  };

  return (
    <div id="make-a-wish-section" className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-purple-50 via-pink-50 to-amber-50 p-6 sm:p-7 border-2 border-purple-100 shadow-sm text-center">
      {/* Kawaii Accents */}
      <div className="absolute -top-3 -right-3 opacity-70">
        <SmilingStar size={26} color="#FDE047" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-purple-200 text-purple-700 text-xs font-semibold mb-3 shadow-xs">
        <Wand2 className="w-3.5 h-3.5 text-purple-500" />
        Interactive Magic Corner
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-display">
        Make a Wish for {nickname}!
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto mt-1 mb-4">
        {candlesLit
          ? `Close your eyes, make a sweet birthday wish for little ${nickname}, and tap to blow out all ${turningAge} candles!`
          : `Yay! The candles are blown! May your sweet wish for ${nickname} come true!`}
      </p>

      {/* The Cake Graphic */}
      <div className="flex justify-center my-2">
        <BirthdayCakeGraphic
          candlesLit={candlesLit}
          ageNumber={turningAge}
          onCandleTap={handleBlowCandles}
          className="w-56 h-56 sm:w-64 sm:h-64 transition-transform active:scale-95 cursor-pointer"
        />
      </div>

      {/* Button to blow or relight */}
      <div className="mt-2 flex flex-col items-center gap-3">
        <button
          id="blow-candles-btn"
          onClick={handleBlowCandles}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base font-display shadow-md transition-all active:scale-95 cursor-pointer min-h-[48px] ${
            candlesLit
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-pink-200 ring-2 ring-pink-300 ring-offset-2'
              : 'bg-white text-purple-700 border-2 border-purple-300 hover:bg-purple-50'
          }`}
        >
          {candlesLit ? (
            <>
              <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
              Tap to Blow Out Candles
            </>
          ) : (
            <>
              <RotateCcw className="w-4 h-4 text-purple-600" />
              Light Candles Again
            </>
          )}
        </button>

        {wishBlown && (
          <div
            id="wish-celebration-banner"
            className="w-full max-w-sm mt-3 p-4 bg-white/90 backdrop-blur-xs rounded-2xl border-2 border-pink-200 shadow-xs animate-float-gentle text-center"
          >
            <div className="flex items-center justify-center gap-2 text-pink-600 font-bold text-xs uppercase tracking-wide">
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              Birthday Blessing for {nickname}
            </div>
            <p className="text-sm font-medium text-slate-700 mt-1 italic">
              &ldquo;May your {turningAge}th year be filled with fairy-tale magic, sweet giggles, laughter & sunshine!&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
