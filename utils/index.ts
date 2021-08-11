import env from 'env-var';
import { Env } from '../types';

export function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#EEEBFF', '#FFFAD4'],
    ['#FAE0E4', '#E0FAF6'],
    ['#CAF0F8', '#F8D2CA'],
    ['#F5E1FF', '#CAF0F8'],
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
