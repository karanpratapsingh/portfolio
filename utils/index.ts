import env from 'env-var';
import { Env } from '../types';

export function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EAF4F4', '#FFEDD8'],
    ['#F9E5D8', '#EDE9F6'],
    ['#EEEBFF', '#FFFAD4'],
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
