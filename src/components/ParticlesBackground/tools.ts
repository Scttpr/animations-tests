import { Color, Range } from './types.ts';

export const randomIntFromRange = ([min, max]: Range): number => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const randomBackgroundColor = (): Color => {
  const colors = Object.values(Color);
  const index = randomIntFromRange([0, 2]);

  return colors[index];
};
