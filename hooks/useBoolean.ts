import { useCallback, useState } from 'react';

type Fn = () => void;
type SetFn = (value: boolean) => void;

export type ReturnType = [boolean, Fn, Fn, Fn, SetFn];

export function useBoolean(initialValue: boolean): ReturnType {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(value => !value), []);

  return [value, setTrue, setFalse, toggle, setValue];
}
