import React, { useState } from 'react';
import { Mail, Sparkles, Heart, ArrowDown } from 'lucide-react';
import { CuteBunny, SmilingStar } from './CuteIllustrations.tsx';
import { triggerConfetti, triggerStarConfetti } from '../utils/confetti.ts';

interface EnvelopeModalProps {
  isOpen: boolean;
  onClose: () => void;
  childName: string;
  nickname: string;
  turningAge: number;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onClose,
  childName,
  nickname,
  turningAge,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpen) return null;

  const handleOpenSeal = () => {
    setIsOpened(true);
    triggerConfetti(0.5);
    setTimeout(() => {
      triggerStarConfetti();
    }, 400);

    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-pink-50 via-white to-purple-50 rounded-3xl p-6 border-2 border-pink-200 shadow-2xl text-center">
        {/* Decorative Top Star */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <SmilingStar size={32} color="#FDE047" className="animate-twinkle" />
        </div>

        <div className="mt-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Special Delivery
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-display mt-2">
            A Special Invitation for You!
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            From {childName} ({nickname}) for her {turningAge}th Birthday!
          </p>
        </div>

        {/* The Animated Envelope */}
        <div className="my-6 relative flex justify-center">
          <div
            onClick={handleOpenSeal}
            className="group relative w-48 h-36 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl shadow-lg border-2 border-pink-300 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            {/* Envelope flap */}
            <div
              className={`absolute top-0 left-0 right-0 h-16 bg-pink-300 rounded-t-2xl border-b-2 border-pink-400 origin-top transition-transform duration-700 ${
                isOpened ? '-rotate-180 opacity-40' : ''
              }`}
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              }}
            />

            {/* Seal Sticker */}
            <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 border-2 border-white shadow-md flex items-center justify-center animate-pulse">
              <Heart className="w-6 h-6 fill-pink-600 text-pink-600" />
            </div>

            {/* Letter peek when opened */}
            {isOpened && (
              <div className="absolute -top-8 w-40 bg-white rounded-xl p-2.5 shadow-md border border-pink-200 text-center animate-float-slow">
                <span className="text-xs font-bold text-purple-700 font-display">
                  Welcome to Kotha&apos;s Party!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tap to Unseal Action Button */}
        <button
          id="break-seal-btn"
          onClick={handleOpenSeal}
          className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold font-display text-base shadow-md hover:from-pink-600 hover:to-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>{isOpened ? 'Opening Invitation...' : 'Tap to Break Seal & Open'}</span>
        </button>

        <button
          onClick={onClose}
          className="mt-3 text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
        >
          Skip to Invitation
        </button>
      </div>
    </div>
  );
};
