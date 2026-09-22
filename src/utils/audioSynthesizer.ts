/**
 * Web Audio API Music Box Synthesizer
 * Plays a warm, sweet, xylophone / music-box chime melody of "Happy Birthday"
 * Works offline, mobile-safe, requires no external mp3 assets, with zero CORS issues!
 */

class BirthdayAudioPlayer {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTimeout: number | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  // "Happy Birthday to You" notes & durations in musical steps
  // Frequencies in Hz: C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, Bb4: 466.16, C5: 523.25
  private melody: Array<{ note: number; duration: number; rest: number }> = [
    // Happy Birthday to you
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 293.66, duration: 0.55, rest: 0.08 }, // D4
    { note: 261.63, duration: 0.55, rest: 0.08 }, // C4
    { note: 349.23, duration: 0.55, rest: 0.08 }, // F4
    { note: 329.63, duration: 0.95, rest: 0.2 },  // E4

    // Happy Birthday to you
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 293.66, duration: 0.55, rest: 0.08 }, // D4
    { note: 261.63, duration: 0.55, rest: 0.08 }, // C4
    { note: 392.00, duration: 0.55, rest: 0.08 }, // G4
    { note: 349.23, duration: 0.95, rest: 0.2 },  // F4

    // Happy Birthday dear Kotha
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 261.63, duration: 0.28, rest: 0.05 }, // C4
    { note: 523.25, duration: 0.55, rest: 0.08 }, // C5
    { note: 440.00, duration: 0.55, rest: 0.08 }, // A4
    { note: 349.23, duration: 0.55, rest: 0.08 }, // F4
    { note: 329.63, duration: 0.55, rest: 0.08 }, // E4
    { note: 293.66, duration: 0.85, rest: 0.2 },  // D4

    // Happy Birthday to you
    { note: 466.16, duration: 0.28, rest: 0.05 }, // Bb4
    { note: 466.16, duration: 0.28, rest: 0.05 }, // Bb4
    { note: 440.00, duration: 0.55, rest: 0.08 }, // A4
    { note: 349.23, duration: 0.55, rest: 0.08 }, // F4
    { note: 392.00, duration: 0.55, rest: 0.08 }, // G4
    { note: 349.23, duration: 1.1, rest: 0.4 },   // F4
  ];

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.add(fn);
    fn(this.isPlaying);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  private playTone(freq: number, duration: number, time: number) {
    if (!this.audioCtx) return;
    
    // Main chime oscillator
    const osc = this.audioCtx.createOscillator();
    const oscHarmonic = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Warm harmonic overtone (like a crystal music box chime)
    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2.005, time);

    // Envelope: quick bell attack and exponential decay
    gainNode.gain.setValueAtTime(0.0001, time);
    gainNode.gain.linearRampToValueAtTime(0.28, time + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration + 0.35);

    osc.connect(gainNode);
    oscHarmonic.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start(time);
    oscHarmonic.start(time);

    osc.stop(time + duration + 0.4);
    oscHarmonic.stop(time + duration + 0.4);
  }

  public togglePlay(customUrl?: string) {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play(customUrl);
    }
  }

  public play(customUrl?: string) {
    if (this.isPlaying) return;

    // If a custom mp3 URL is provided, use HTMLAudioElement
    if (customUrl && customUrl.trim().length > 0) {
      if (!this.audioElement) {
        this.audioElement = new Audio(customUrl);
        this.audioElement.loop = true;
        this.audioElement.onended = () => {
          this.isPlaying = false;
          this.notify();
        };
      }
      this.audioElement
        .play()
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.warn('Custom audio playback failed, falling back to synthesizer:', err);
          this.playSynthLoop();
        });
      return;
    }

    this.playSynthLoop();
  }

  private playSynthLoop() {
    this.initAudioContext();
    if (!this.audioCtx) return;

    this.isPlaying = true;
    this.notify();

    const scheduleLoop = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      let currentTime = this.audioCtx.currentTime + 0.1;
      let totalDuration = 0;

      for (const item of this.melody) {
        this.playTone(item.note, item.duration, currentTime);
        const step = item.duration + item.rest;
        currentTime += step;
        totalDuration += step;
      }

      // Schedule next repeat of melody loop
      this.currentTimeout = window.setTimeout(() => {
        if (this.isPlaying) {
          scheduleLoop();
        }
      }, (totalDuration + 1.2) * 1000);
    };

    scheduleLoop();
  }

  public stop() {
    this.isPlaying = false;
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }
}

export const birthdayAudio = new BirthdayAudioPlayer();
