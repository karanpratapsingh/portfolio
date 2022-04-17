import { useMemo } from 'react';
import { Tuple } from 'types';

export function useRandomColorPair(): Tuple<string> {
  const colors: Tuple<string>[] = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EAF4F4', '#FFEDD8'],
    ['#F9E5D8', '#EDE9F6'],
    ['#EEEBFF', '#FFFAD4'],
  ];

  const random = Math.round(Math.random() * (colors.length - 1));

  return useMemo(() => colors[random], []);
}
