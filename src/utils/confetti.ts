import confetti from 'canvas-confetti';

/**
 * Pastel and joyful birthday confetti bursts
 */

export const triggerConfetti = (originY = 0.6) => {
  // Pastel and joyful colors: pink, lavender, mint, gold, sky blue, peach
  const colors = ['#F472B6', '#C084FC', '#67E8F9', '#FDE047', '#FDA4AF', '#A7F3D0'];

  // Left & right burst for dramatic celebration
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: originY },
    colors,
  });

  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: originY },
    colors,
  });
};

export const triggerStarConfetti = () => {
  confetti({
    particleCount: 35,
    spread: 70,
    origin: { y: 0.5 },
    shapes: ['star'],
    colors: ['#FDE047', '#F472B6', '#60A5FA', '#C084FC'],
  });
};

export const triggerMagicWishShower = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#F472B6', '#C084FC', '#FDE047', '#38BDF8'];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
