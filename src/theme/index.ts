import { ViewStyle } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export enum ThemeVariant {
  LIGHT,
  DARK
}

export interface Theme {
  type: ThemeVariant;
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
  placeholder: '#F2F2F2'
}

export const ThemeMap: ThemeMap = {
  [ThemeVariant.LIGHT]: {
    type: ThemeVariant.LIGHT,
    text: '#000000',
    primary: Colors.primary,
    background: '#FDFDFD',
    secondary: Colors.secondary,
  },
  [ThemeVariant.DARK]: {
    type: ThemeVariant.DARK,
    text: Colors.white,
    primary: Colors.primary,
    background: Colors.primary,
    secondary: Colors.secondary,
  },
};

// TODO: bit small for mobile
export const typography = {
  title: responsiveFontSize(2.5),
  subtitle: responsiveFontSize(1.75),
  body: responsiveFontSize(1.25),
  caption: responsiveFontSize(1.0),
};

export const defaultContainerStyles = (theme: Theme): ViewStyle => ({
  flex: 1,
  paddingVertical: responsiveWidth(2),
  paddingHorizontal: responsiveWidth(2.5),
  backgroundColor: theme.primary
})