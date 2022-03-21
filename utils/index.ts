import env from 'env-var';
import { Env, Maybe } from '../types';

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

type CallbackFn = (id: string) => void;

export function parseYouTubeResponse(item: any, callback: CallbackFn): void {
  const { kind, videoId: id } = item.id;
  switch (kind) {
    case 'youtube#video':
      callback(id);
      break;
    default:
      break;
  }
}

type AsyncResult = any;
type AsyncError = any;
type AsyncReturn<R, E> = [Maybe<R>, Maybe<E>];
type AsyncFn = Promise<AsyncResult>;

export async function async<R = AsyncResult, E = AsyncError>(
  method: AsyncFn,
): Promise<AsyncReturn<R, E>> {
  try {
    const data: R = await method;
    return [data, null];
  } catch (error) {
    return [null, error as Maybe<E>];
  }
}
