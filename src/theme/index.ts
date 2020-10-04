import { ViewStyle } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { isMobile } from '../utils';

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
  placeholder: '#F2F2F2',
  footer: '#F8F8F8',
  deployment: {
    web: '#444444',
    android: '#3DDC84',
    ios: '#3587e6'
  },
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

export const typography = {
  title: isMobile ? responsiveFontSize(4) : responsiveFontSize(2.5),
  subtitle: isMobile ? responsiveFontSize(2.25) : responsiveFontSize(1.75),
  body: isMobile ? responsiveFontSize(2) : responsiveFontSize(1.25),
  caption: isMobile ? responsiveFontSize(1.5) : responsiveFontSize(1.0),
};

export const defaultContainerStyles = (theme: Theme): ViewStyle => ({
  flex: 1,
  paddingVertical: isMobile ? responsiveWidth(4) : responsiveWidth(2),
  paddingHorizontal: isMobile ? responsiveWidth(5) : responsiveWidth(2.5),
  backgroundColor: theme.primary
})