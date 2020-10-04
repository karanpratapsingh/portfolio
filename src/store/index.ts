import create, { SetState } from 'zustand';
import { Theme, ThemeMap, ThemeVariant } from '../theme';
import { Appearance } from 'react-native-appearance';

type ThemeStore = {
  theme: Theme;
  setTheme: (type: ThemeVariant) => void;
};

const isDarkMode = Appearance.getColorScheme() === 'dark';
const defaultVariant = isDarkMode ? ThemeVariant.DARK : ThemeVariant.LIGHT;

const useTheme = create<ThemeStore>((set: SetState<ThemeStore>) => ({
  theme: ThemeMap[defaultVariant],
  setTheme: (type: ThemeVariant): void => set({ theme: ThemeMap[type] })
}))

export { useTheme };