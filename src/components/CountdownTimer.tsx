import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { SmilingStar } from './CuteIllustrations.tsx';

interface CountdownTimerProps {
  targetDateISO: string;
  nickname: string;
  turningAge: number;
}

interface TimeRemaining {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isToday: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDateISO,
  nickname,
  turningAge,
}) => {
  const calculateTime = (): TimeRemaining => {
    const target = new Date(targetDateISO).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    const targetDate = new Date(targetDateISO);
    const nowDate = new Date();
    const isSameDay =
      targetDate.getFullYear() === nowDate.getFullYear() &&
      targetDate.getMonth() === nowDate.getMonth() &&
      targetDate.getDate() === nowDate.getDate();

    if (diff <= 0 && !isSameDay) {
      return {
        totalMs: diff,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
        isToday: false,
      };
    }

    if (isSameDay) {
      return {
        totalMs: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: false,
        isToday: true,
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      totalMs: diff,
      days,
      hours,
      minutes,
      seconds,
      isPast: false,
      isToday: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  return (
    <div
      id="countdown-card"
      className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-b from-pink-50 via-white to-purple-50 p-5 sm:p-6 border-2 border-pink-100 shadow-sm text-center"
    >
      {/* Kawaii cute background stars */}
      <div className="absolute top-2 left-3 opacity-60 animate-twinkle">
        <SmilingStar size={20} color="#FDE047" />
      </div>
      <div
        className="absolute top-3 right-4 opacity-60 animate-twinkle"
        style={{ animationDelay: '1.2s' }}
      >
        <SmilingStar size={18} color="#F472B6" />
      </div>

      <div className="flex items-center justify-center gap-1.5 mb-2">
        <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-pink-600 font-display">
          Countdown to the Big Day
        </span>
        <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
      </div>

      {timeLeft.isToday ? (
        <div
          id="countdown-today"
          className="py-3 px-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 rounded-2xl border border-pink-200"
        >
          <p className="text-xl sm:text-2xl font-bold text-pink-700 font-display flex items-center justify-center gap-2">
            🎉 Today is the Big Day! 🎂
          </p>
          <p className="text-sm font-medium text-purple-700 mt-1">
            Happy {turningAge}th Birthday, sweet {nickname}! Let the party begin! ✨
          </p>
        </div>
      ) : timeLeft.isPast ? (
        <div
          id="countdown-passed"
          className="py-3 px-4 bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 rounded-2xl border border-purple-200"
        >
          <p className="text-lg sm:text-xl font-bold text-purple-800 font-display flex items-center justify-center gap-2">
            🎈 Happy {turningAge}th Birthday, {nickname}! 💖
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Celebrating {nickname}&apos;s wonderful memories and magical {turningAge}th year!
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-display mb-4">
            Counting Down with Giggles & Excitement!
          </h3>

          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
            {/* Days */}
            <div
              id="countdown-days"
              className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-2xl border-2 border-pink-200 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-pink-600 font-display leading-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5">
                Days
              </span>
            </div>

            {/* Hours */}
            <div
              id="countdown-hours"
              className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-2xl border-2 border-purple-200 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-600 font-display leading-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div
              id="countdown-minutes"
              className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-2xl border-2 border-sky-200 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-display leading-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div
              id="countdown-seconds"
              className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-2xl border-2 border-amber-200 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-display leading-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5">
                Secs
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-3.5 flex items-center justify-center gap-1">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            We can&apos;t wait to see you there!
          </p>
        </>
      )}
    </div>
  );
};
