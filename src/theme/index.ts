import { responsiveFontSize } from 'react-native-responsive-dimensions';

export enum ThemeVariant {
  LIGHT,
  DARK
}

export interface Theme {
  text: string;
  primary: string;
  background: string;
  secondary: string;
}

type ThemeMap = { [key in ThemeVariant]: Theme };

export const Colors = {
  white: '#FFFFFF',
  primary: '#151a30',
  secondary: '#ffca28',
}

export const ThemeMap: ThemeMap = {
  [ThemeVariant.LIGHT]: {
    text: '#000000',
    primary: Colors.primary,
    background: '#FDFDFD',
    secondary: Colors.secondary,
  },
  [ThemeVariant.DARK]: {
    text: Colors.white,
    primary: Colors.primary,
    background: Colors.primary,
    secondary: Colors.secondary,
  },
};

export const typography = {
  title: responsiveFontSize(2.5),
  subtitle: responsiveFontSize(1.75),
  body: responsiveFontSize(1.25),
  caption: responsiveFontSize(1.0),
};
