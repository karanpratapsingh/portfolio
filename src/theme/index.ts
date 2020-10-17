import { ViewStyle } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { ContactType } from '../config';
import { isMobile } from '../utils';

export const ChipColor: { [key: string]: string } = {
  react: '#61DAF6',
  reactnative: '#2D2D2D',
  redux: '#764ABC',
  node: '#68A063',
  javascript: '#F7DF1E',
  typescript: '#234A84',
  babel: '#f5db53',
  devops: '#0db7ed',
  android: '#56a036',
  ios: '#0c76e2',
};

export enum ThemeVariant {
  LIGHT,
  DARK
}

export interface Theme {
  type: ThemeVariant;
  text: string;
  textSecondary: string;
  primary: string;
  background: string;
  backgroundSecondary: string;
  secondary: string;
  footer: string;
}

type ThemeMap = { [key in ThemeVariant]: Theme };

export const Colors = {
  white: '#FFFFFF',
  primary: '#151a30',
  secondary: '#ffca28',
  placeholder: '#F2F2F2',
  backgroundDark: '#0f1222',
  loader: (type: ThemeVariant) => type === ThemeVariant.DARK ? Colors.white : Colors.primary,
  deployment: {
    web: '#444444',
    android: '#3DDC84',
    ios: '#3587e6'
  },
  contact: {
    [ContactType.email]: '#FFFF',
    [ContactType.twitter]: '#00acee',
    [ContactType.linkedIn]: '#0e76a8',
    [ContactType.github]: '#FFFFFF',
  }
}

export const ThemeMap: ThemeMap = {
  [ThemeVariant.LIGHT]: {
    type: ThemeVariant.LIGHT,
    text: '#000000',
    textSecondary: '#616161',
    primary: Colors.primary,
    background: '#FDFDFD',
    backgroundSecondary: '#FFFFFF',
    secondary: Colors.secondary,
    footer: '#F8F8F8'
  },
  [ThemeVariant.DARK]: {
    type: ThemeVariant.DARK,
    text: Colors.white,
    textSecondary: '#EEEEEE',
    primary: Colors.primary,
    background: Colors.primary,
    backgroundSecondary: Colors.backgroundDark,
    secondary: Colors.secondary,
    footer: Colors.backgroundDark,
  },
};

export const typography = {
  title: isMobile ? responsiveFontSize(4) : responsiveFontSize(2.5),
  subtitle: isMobile ? responsiveFontSize(2.25) : responsiveFontSize(1.75),
  subtitle2: isMobile ? responsiveFontSize(2) : responsiveFontSize(1.35),
  body: isMobile ? responsiveFontSize(2) : responsiveFontSize(1.25),
  caption: isMobile ? responsiveFontSize(1.5) : responsiveFontSize(1.0),
};

export const defaultContainerStyles = (theme: Theme): ViewStyle => ({
  flex: 1,
  paddingVertical: isMobile ? responsiveWidth(4) : responsiveWidth(2),
  paddingHorizontal: isMobile ? responsiveWidth(5) : responsiveWidth(2.5),
  backgroundColor: theme.primary
})