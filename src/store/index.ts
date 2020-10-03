import create, { SetState } from 'zustand';
import { Theme, ThemeMap, ThemeVariant } from '../theme';

type ThemeStore = {
  theme: Theme;
  setTheme: (type: ThemeVariant) => void;
};

const useTheme = create<ThemeStore>((set: SetState<ThemeStore>) => ({
  theme: ThemeMap[ThemeVariant.LIGHT],
  setTheme: (type: ThemeVariant): void => set({ theme: ThemeMap[type] })
}))

export { useTheme };