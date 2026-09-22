import React from 'react';
import { Sparkles, Heart, MailOpen } from 'lucide-react';
import { InvitationConfig } from '../invitationConfig.ts';
import { CuteBunny, CuteTeddyBear, BirthdayCakeGraphic, BalloonsCluster, SmilingStar, FluffyCloud } from './CuteIllustrations.tsx';
import { CartoonConveyor } from './CartoonConveyor.tsx';
import { triggerConfetti } from '../utils/confetti.ts';

interface HeroSectionProps {
  config: InvitationConfig;
  onOpenInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onOpenInvitation }) => {
  const handleOpenClick = () => {
    triggerConfetti(0.5);
    onOpenInvitation();
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[100dvh] flex flex-col items-center justify-between px-3 sm:px-4 py-4 sm:py-6 overflow-x-hidden text-center select-none"
    >
      {/* Background Animated Clouds & Stars */}
      <div className="absolute -top-4 -left-6 opacity-60 animate-cloud-drift pointer-events-none">
        <FluffyCloud className="w-28 h-16 sm:w-36 sm:h-20" />
      </div>
      <div className="absolute top-12 -right-8 opacity-60 animate-cloud-drift pointer-events-none" style={{ animationDelay: '3s' }}>
        <FluffyCloud className="w-24 h-14 sm:w-32 sm:h-18" />
      </div>

      {/* Floating Kawaii Stars */}
      <div className="absolute top-16 left-5 animate-twinkle opacity-75 pointer-events-none">
        <SmilingStar size={22} color="#FDE047" />
      </div>
      <div className="absolute top-24 right-6 animate-twinkle opacity-75 pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <SmilingStar size={18} color="#F472B6" />
      </div>
      <div className="absolute bottom-20 left-6 animate-twinkle opacity-60 pointer-events-none" style={{ animationDelay: '2.5s' }}>
        <SmilingStar size={18} color="#38BDF8" />
      </div>

      {/* TOP INVITATION BADGE */}
      <div className="pt-1 z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border-2 border-pink-200 text-pink-600 text-xs font-bold uppercase tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
          <span>You&apos;re Invited!</span>
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
        </div>
      </div>

      {/* MAIN HEADINGS & CENTERPIECE */}
      <div className="my-auto z-10 max-w-sm sm:max-w-md w-full flex flex-col items-center py-2">
        {/* Child's Big Age & Nickname Announcement */}
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 tracking-tight leading-tight drop-shadow-xs">
          {config.nickname} Turns {config.turningAge}!
        </h1>

        {/* Full Formal Name */}
        <div className="mt-1.5 inline-block">
          <p className="text-base sm:text-xl font-bold text-slate-700 font-display flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 inline" />
            <span>{config.childName} ({config.nickname})</span>
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 inline" />
          </p>
        </div>

        {/* Date Display Pill */}
        <div className="mt-2">
          <span className="inline-block px-3.5 py-1 rounded-2xl bg-gradient-to-r from-amber-100 via-pink-100 to-purple-100 border border-pink-200 text-slate-800 text-xs sm:text-sm font-bold font-display shadow-2xs">
            🗓️ {config.birthdayDateDisplay}
          </span>
        </div>

        {/* CENTERPIECE: CUTE BIRTHDAY CAKE FLANKED BY BUNNY & TEDDY */}
        <div className="relative my-2 sm:my-3 flex items-center justify-center">
          {/* Left Character: Cute Bunny */}
          <div className="absolute -left-4 sm:-left-2 bottom-1 z-10 animate-float-slow">
            <CuteBunny className="w-14 h-18 sm:w-20 sm:h-24" withHat={true} balloonColor="#FF9AA2" />
          </div>

          {/* Center: Birthday Cake */}
          <div className="relative z-0">
            <BirthdayCakeGraphic
              className="w-36 h-36 sm:w-48 sm:h-48"
              candlesLit={true}
              ageNumber={config.turningAge}
            />
          </div>

          {/* Right Character: Cute Teddy Bear */}
          <div className="absolute -right-4 sm:-right-2 bottom-1 z-10 animate-float-gentle">
            <CuteTeddyBear className="w-14 h-18 sm:w-20 sm:h-24" withPartyHat={true} />
          </div>

          {/* Floating Balloons */}
          <div className="absolute -top-5 -right-2 pointer-events-none opacity-80 animate-float-slow">
            <BalloonsCluster className="w-14 h-18 sm:w-18 sm:h-22" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARTOON FRIENDS CELEBRATING WITH KOTHA ON FRONT COVER                     */}
        {/* Moveable Left-to-Right Conveyor, Bigger Image Badges, No Name Text        */}
        {/* ========================================================================= */}
        <CartoonConveyor />

        {/* PROMINENT ACTION BUTTON */}
        <div className="w-full max-w-xs mt-1">
          <button
            id="open-invitation-btn"
            onClick={handleOpenClick}
            className="w-full py-3.5 sm:py-4 px-6 sm:px-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-base sm:text-lg font-display shadow-xl shadow-pink-300 hover:from-pink-600 hover:to-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer ring-4 ring-pink-200"
          >
            <MailOpen className="w-5 h-5 animate-bounce" />
            <span>Open Invitation</span>
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-slate-500 mt-2 font-medium">
          Tap to view party details, memory gallery, and cute surprises! ✨
        </p>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="pb-1 z-10">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-pink-400/90 font-display">
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span>Tap &quot;Open Invitation&quot; to see celebration details</span>
          <Sparkles className="w-3 h-3 text-pink-400" />
        </div>
      </div>
    </section>
  );
};
