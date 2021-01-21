import { StyleOptions, CompleteStyle } from './types.ts';
import { randomIntFromRange, randomBackgroundColor } from './tools.ts';

const randomStyleValues = (
  { animationDurationRange, animationDelayRange }: StyleOptions,
): CompleteStyle => {
  const size = `${randomIntFromRange([50, 400])}px`;

  return {
    height: size,
    width: size,
    top: `${randomIntFromRange([0, 100])}%`,
    left: `${randomIntFromRange([0, 100])}%`,
    backgroundColor: randomBackgroundColor(),
    animationDuration: `${randomIntFromRange(animationDurationRange)}s`,
    animationDelay: `${randomIntFromRange(animationDelayRange)}s`,
  };
};

const randomParticleStyles = (n: number, options: StyleOptions): CompleteStyle[] => (
  Array.from({ length: n }).map(() => ({
    ...randomStyleValues(options),
  })));

export default {
  randomParticleStyles,
};
