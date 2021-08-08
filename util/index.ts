import env from 'env-var';
import { Env } from '../types';

export function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#F5E1FF', '#FFF8BC'],
    ['#CAF0F8', '#C9F2C7'],
    // TODO: change first color index 2
    ['#D8E2DC', '#FAEDCD'],
    ['#EEEbff', '#F7D9C4'],
  ];

  const random: number = Math.round(Math.random() * (colors.length - 1));
  return colors[random];
}

export function getThemeClassName(className: string, theme?: string): string {
  return `${theme}-${className}`;
}

export function getEnv(variable: Env, required?: boolean): string | undefined {
  const foundEnv = env.get(variable);

  if (required) {
    return foundEnv.required().asString();
  }

  return foundEnv.asString();
}
