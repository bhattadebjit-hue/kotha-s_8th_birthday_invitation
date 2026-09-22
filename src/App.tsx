import React, { useState } from 'react';
import { INVITATION_DATA } from './invitationConfig.ts';
import { HeroSection } from './components/HeroSection.tsx';
import { InvitationMessage } from './components/InvitationMessage.tsx';
import { CountdownTimer } from './components/CountdownTimer.tsx';
import { HorizontalSlideshow } from './components/HorizontalSlideshow.tsx';
import { EventDetails } from './components/EventDetails.tsx';
import { MakeAWishSection } from './components/MakeAWishSection.tsx';
import { EnvelopeModal } from './components/EnvelopeModal.tsx';
import { FluffyCloud, BalloonsCluster, SmilingStar, CuteBunny, CuteTeddyBear } from './components/CuteIllustrations.tsx';
import { Heart, ArrowLeft, Mail } from 'lucide-react';
import { triggerConfetti } from './utils/confetti.ts';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState<boolean>(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    triggerConfetti(0.6);
    setIsInvitationOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCover = () => {
    setIsInvitationOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnvelopeClosed = () => {
    setIsEnvelopeOpen(false);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#FFF0F5] via-[#FDF2F8] to-[#F5F3FF] text-slate-800 relative selection:bg-pink-200 ${
      !isInvitationOpen ? 'min-h-[100dvh] overflow-x-hidden' : 'pb-10 overflow-x-hidden'
    }`}>
      {/* Background Animated Floating Elements for a Magical Atmosphere */}
      <div className="fixed top-20 -left-12 pointer-events-none opacity-30 z-0">
        <BalloonsCluster className="w-32 h-44" />
      </div>
      <div className="fixed top-1/3 -right-10 pointer-events-none opacity-25 z-0">
        <BalloonsCluster className="w-28 h-40" />
      </div>
      <div className="fixed bottom-24 -left-6 pointer-events-none opacity-25 z-0">
        <FluffyCloud className="w-36 h-20" />
      </div>

      {/* Envelope Modal */}
      <EnvelopeModal
        isOpen={isEnvelopeOpen}
        onClose={handleEnvelopeClosed}
        childName={INVITATION_DATA.childName}
        nickname={INVITATION_DATA.nickname}
        turningAge={INVITATION_DATA.turningAge}
      />

      {/* PAGE 1: ONLY FRONT COVER IS VISIBLE INITIALLY */}
      {!isInvitationOpen ? (
        <main className="w-full max-w-lg mx-auto relative z-10 min-h-[100dvh] flex flex-col justify-center">
          <HeroSection
            config={INVITATION_DATA}
            onOpenInvitation={handleOpenInvitation}
          />
        </main>
      ) : (
        /* PAGE 2: CELEBRATION INVITATION DETAILS PAGE (VISIBLE AFTER CLICKING OPEN INVITATION) */
        <main className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto relative z-10 animate-fade-in">
          {/* Top Navigation Bar with Back-to-Cover and Envelope buttons */}
          <header className="sticky top-0 z-30 bg-[#FFF0F5]/95 backdrop-blur-md px-4 py-2.5 border-b border-pink-200/70 flex items-center justify-between shadow-2xs">
            <button
              id="back-to-cover-btn"
              onClick={handleBackToCover}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-pink-600 font-bold text-xs font-display shadow-xs border border-pink-200 hover:bg-pink-50 active:scale-95 transition-all cursor-pointer min-h-[36px]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Front Cover</span>
            </button>

            <span className="text-xs font-extrabold text-slate-700 font-display">
              {INVITATION_DATA.nickname}&apos;s 8th Birthday 🎉
            </span>

            <button
              id="view-envelope-btn"
              onClick={() => setIsEnvelopeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xs font-display shadow-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer min-h-[36px]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Envelope</span>
            </button>
          </header>

          {/* 1. LIVE COUNTDOWN TIMER */}
          <div className="px-4 pt-4 pb-2">
            <CountdownTimer
              targetDateISO={INVITATION_DATA.targetDateISO}
              nickname={INVITATION_DATA.nickname}
              turningAge={INVITATION_DATA.turningAge}
            />
          </div>

          {/* 2. CONTINUOUS HORIZONTAL IMAGE SLIDESHOW (LEFT -> RIGHT) */}
          <div className="px-4 py-2">
            <HorizontalSlideshow images={INVITATION_DATA.slideshowImages} />
          </div>

          {/* 3. INVITATION MESSAGE */}
          <section id="invitation-section" className="px-4 py-4 scroll-mt-16">
            <InvitationMessage config={INVITATION_DATA} />
          </section>

          {/* 3. EVENT DETAILS (Cards for Birthday, 4th Oct, Age 8, [Venue Name], [Time], [Full Address]) */}
          <section id="details-section" className="px-4 py-4 scroll-mt-16">
            <EventDetails config={INVITATION_DATA} />
          </section>

          {/* 4. MAKE A WISH (Interactive 8-candle cake & blessings) */}
          <section id="wish-section" className="px-4 py-4 scroll-mt-16">
            <MakeAWishSection
              nickname={INVITATION_DATA.nickname}
              turningAge={INVITATION_DATA.turningAge}
            />
          </section>

          {/* FOOTER */}
          <footer className="px-4 py-6 text-center text-slate-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <SmilingStar size={16} color="#FDE047" />
              <CuteBunny className="w-6 h-8" withHat={false} />
              <CuteTeddyBear className="w-6 h-8" withPartyHat={false} />
              <SmilingStar size={16} color="#F472B6" />
            </div>
            <p className="text-xs font-medium text-slate-600 font-display">
              Celebrating Agnisnata Maity (Kotha)&apos;s 8th Birthday!
            </p>
            <p className="text-[11px] text-slate-400 mt-1 flex items-center justify-center gap-1">
              Made with love <Heart className="w-3 h-3 fill-pink-400 text-pink-400" /> for our little angel
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
