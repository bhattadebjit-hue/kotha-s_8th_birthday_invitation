/**
 * Web Audio API Music Box / Celesta Synthesizer
 * Plays a warm, sweet, music-box chime arrangement of "Happy Birthday"
 * Multi-voice arrangement: Melodic chimes, gentle harmony chords, and warm bass bells.
 * Automatically turns ON when invitation is opened, and automatically turns OFF when closed.
 */

interface NoteEvent {
  note: number;
  duration: number;
  rest: number;
  harmony?: number[]; // Secondary chord notes
  bass?: number;      // Warm bass foundation note
}

// Musical note frequencies in Hz
const NOTES = {
  Bb2: 116.54,
  C3: 130.81,
  D3: 146.83,
  Eb3: 155.56,
  F3: 174.61,
  G3: 196.00,
  A3: 220.00,
  Bb3: 233.08,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  Bb4: 466.16,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
};

class BirthdayAudioPlayer {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTimeout: number | null = null;
  private masterGain: GainNode | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  // Complete, heartwarming "Happy Birthday" arrangement in F Major
  private score: NoteEvent[] = [
    // Phrase 1: "Happy Birthday to you"
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.D4, duration: 0.54, rest: 0.08, harmony: [NOTES.F4] },
    { note: NOTES.C4, duration: 0.54, rest: 0.08 },
    { note: NOTES.F4, duration: 0.54, rest: 0.08, bass: NOTES.F3, harmony: [NOTES.A4] },
    { note: NOTES.E4, duration: 0.95, rest: 0.22, bass: NOTES.C3, harmony: [NOTES.G4] },

    // Phrase 2: "Happy Birthday to you"
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.D4, duration: 0.54, rest: 0.08, harmony: [NOTES.F4] },
    { note: NOTES.C4, duration: 0.54, rest: 0.08 },
    { note: NOTES.G4, duration: 0.54, rest: 0.08, bass: NOTES.C3, harmony: [NOTES.Bb4] },
    { note: NOTES.F4, duration: 0.95, rest: 0.22, bass: NOTES.F3, harmony: [NOTES.A4] },

    // Phrase 3: "Happy Birthday dear Kotha"
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.C4, duration: 0.28, rest: 0.06 },
    { note: NOTES.C5, duration: 0.54, rest: 0.08, bass: NOTES.F3, harmony: [NOTES.A4] },
    { note: NOTES.A4, duration: 0.54, rest: 0.08, bass: NOTES.D3, harmony: [NOTES.F4] },
    { note: NOTES.F4, duration: 0.54, rest: 0.08, bass: NOTES.D3 },
    { note: NOTES.E4, duration: 0.54, rest: 0.08, harmony: [NOTES.C4] },
    { note: NOTES.D4, duration: 0.88, rest: 0.22, bass: NOTES.Bb2, harmony: [NOTES.F4, NOTES.Bb3] },

    // Phrase 4: "Happy Birthday to you"
    { note: NOTES.Bb4, duration: 0.28, rest: 0.06, harmony: [NOTES.D4] },
    { note: NOTES.Bb4, duration: 0.28, rest: 0.06, harmony: [NOTES.D4] },
    { note: NOTES.A4, duration: 0.54, rest: 0.08, bass: NOTES.F3, harmony: [NOTES.C4] },
    { note: NOTES.F4, duration: 0.54, rest: 0.08, bass: NOTES.C3, harmony: [NOTES.A3] },
    { note: NOTES.G4, duration: 0.54, rest: 0.08, bass: NOTES.C3, harmony: [NOTES.Bb3] },
    { note: NOTES.F4, duration: 1.25, rest: 0.50, bass: NOTES.F3, harmony: [NOTES.A4, NOTES.C5] },
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
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();

      // Master output gain
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.75, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Generates a sweet, gentle music box chime bell note
   */
  private playBellTone(freq: number, duration: number, time: number, volume: number = 0.26) {
    if (!this.audioCtx || !this.masterGain) return;

    // 1. Primary fundamental tone (pure, sweet sine)
    const osc1 = this.audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, time);

    // 2. Sweet crystalline overtone (adds the music box chime sparkle)
    const osc2 = this.audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.004, time);

    // 3. Gentle harmonic shimmer (soft triangle)
    const osc3 = this.audioCtx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(freq * 3.01, time);

    // Envelope gain node
    const gainNode = this.audioCtx.createGain();

    // Fast soft attack (12ms) to prevent clicks while keeping tactile chime pluck
    gainNode.gain.setValueAtTime(0.0001, time);
    gainNode.gain.linearRampToValueAtTime(volume, time + 0.012);

    // Smooth exponential bell decay
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration + 0.45);

    // Route audio nodes
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    osc3.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc3.start(time);

    const stopTime = time + duration + 0.5;
    osc1.stop(stopTime);
    osc2.stop(stopTime);
    osc3.stop(stopTime);
  }

  public play() {
    if (this.isPlaying) return;

    this.initAudioContext();
    if (!this.audioCtx || !this.masterGain) return;

    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.75, now);

    this.isPlaying = true;
    this.notify();

    const scheduleLoop = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      let currentTime = this.audioCtx.currentTime + 0.08;
      let totalDuration = 0;

      for (const item of this.score) {
        // Main melody chime
        this.playBellTone(item.note, item.duration, currentTime, 0.28);

        // Harmony chimes (softly blended)
        if (item.harmony && item.harmony.length > 0) {
          for (const hNote of item.harmony) {
            this.playBellTone(hNote, item.duration * 0.9, currentTime, 0.12);
          }
        }

        // Deep warm bass chime
        if (item.bass) {
          this.playBellTone(item.bass, item.duration * 1.2, currentTime, 0.18);
        }

        const step = item.duration + item.rest;
        currentTime += step;
        totalDuration += step;
      }

      // Schedule seamless repeat with a sweet 1.4-second musical pause between loops
      this.currentTimeout = window.setTimeout(() => {
        if (this.isPlaying) {
          scheduleLoop();
        }
      }, (totalDuration + 1.4) * 1000);
    };

    scheduleLoop();
  }

  public stop() {
    this.isPlaying = false;
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }

    if (this.masterGain && this.audioCtx) {
      // Immediate gentle fade-out so notes stop instantly without click or residual delay
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.05);
    }

    if (this.audioCtx && this.audioCtx.state === 'running') {
      setTimeout(() => {
        if (!this.isPlaying && this.audioCtx) {
          this.audioCtx.suspend();
        }
      }, 60);
    }

    this.notify();
  }
}

export const birthdayAudio = new BirthdayAudioPlayer();
