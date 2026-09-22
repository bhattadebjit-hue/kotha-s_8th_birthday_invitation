import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { birthdayAudio } from '../utils/audioSynthesizer.ts';

interface MusicButtonProps {
  customAudioUrl?: string;
  musicTitle?: string;
}

export const MusicButton: React.FC<MusicButtonProps> = ({
  customAudioUrl,
  musicTitle = 'Birthday Melody',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = birthdayAudio.subscribe((status) => {
      setIsPlaying(status);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    birthdayAudio.togglePlay(customAudioUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Informational Toast on toggle */}
      {showToast && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-pink-200 text-xs font-bold text-pink-700 shadow-md animate-float-gentle">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>{isPlaying ? 'Playing Birthday Melody 🎵' : 'Music Paused'}</span>
        </div>
      )}

      {/* Main Music Button */}
      <button
        id="play-music-toggle-btn"
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause Birthday Music' : 'Play Birthday Music'}
        className={`group relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg backdrop-blur-md border-2 transition-all active:scale-90 cursor-pointer min-h-[44px] ${
          isPlaying
            ? 'bg-pink-500 text-white border-pink-300 ring-2 ring-pink-300 ring-offset-2'
            : 'bg-white/90 text-slate-700 border-pink-200 hover:border-pink-300 hover:bg-pink-50'
        }`}
      >
        {/* Animated Disc / Note */}
        <div className={`shrink-0 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-white" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </div>

        <span className="text-xs font-bold font-display whitespace-nowrap">
          {isPlaying ? 'Pause Music' : 'Play Birthday Music'}
        </span>

        {/* Sound Wave Bars when active */}
        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-0.5">
            <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
            <span className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 h-2.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        )}
      </button>
    </div>
  );
};
