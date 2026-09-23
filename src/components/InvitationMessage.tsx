import React from 'react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import { InvitationConfig } from '../invitationConfig.ts';
import { CuteBunny, FluffyCloud, SmilingStar } from './CuteIllustrations.tsx';

interface InvitationMessageProps {
  config: InvitationConfig;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ config }) => {
  return (
    <div id="invitation-letter-container" className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 border-2 border-pink-200 shadow-sm">
      {/* Kawaii Decorative Accents */}
      <div className="absolute -top-4 -right-4 opacity-50 pointer-events-none">
        <FluffyCloud className="w-20 h-12" />
      </div>
      <div className="absolute top-4 left-4 opacity-60">
        <SmilingStar size={18} color="#FDE047" />
      </div>
      <div className="absolute bottom-4 right-5 opacity-60">
        <SmilingStar size={16} color="#F472B6" />
      </div>

      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Cute Header Stamp */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <PartyPopper className="w-3.5 h-3.5" />
          A Warm Invitation
        </div>

        {/* Primary Message Lines */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 font-display leading-snug">
          &ldquo;{config.invitationMessagePart1}&rdquo;
        </h2>

        {/* Decorative divider with hearts */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-[1px] w-12 bg-pink-200" />
          <Heart className="w-4 h-4 fill-pink-400 text-pink-400 animate-pulse" />
          <div className="h-[1px] w-12 bg-pink-200" />
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          {config.invitationMessagePart2}
        </p>

        {/* Warm Signature Card */}
        <div className="mt-6 pt-4 border-t border-pink-100 flex items-center justify-center gap-3">
          <CuteBunny className="w-10 h-12 shrink-0" withHat={false} />
          <div className="text-left">
            <p className="text-xs text-slate-500 font-medium">With lots of love & hugs,</p>
            <p className="text-sm font-bold text-slate-800 font-display">
              {config.childName} & Family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
