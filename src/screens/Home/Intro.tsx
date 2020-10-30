import { useNavigation } from '@react-navigation/native';
import Switch from 'expo-dark-mode-switch';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Config from '../../config';
import { useDimensions } from '../../hooks';
import { ScreenType } from '../../navigation';
import { useTheme } from '../../store';
import { Colors, Theme, ThemeVariant, typography } from '../../theme';
import { isMobile } from '../../utils';

function Intro(): React.ReactElement {
  const [theme, setTheme] = useTheme(state => [state.theme, state.setTheme]);
  const navigation = useNavigation();
  const { height } = useDimensions();
  const isDarkMode = theme.type === ThemeVariant.DARK;

  const onThemeChange = (value: boolean) => {
    const variant = value ? ThemeVariant.DARK : ThemeVariant.LIGHT;
    setTheme(variant);
  };

  const onAbout = () => {
    navigation.navigate(ScreenType.About);
  };

  const onContact = () => {
    navigation.navigate(ScreenType.Contact);
  };

  const { name, intro, availableForHire } = Config;

  const wavingHand = (
    <Animatable.View animation='swing' duration={2000} delay={1000}>
      <Text style={styles(theme).header}>👋</Text>
    </Animatable.View>
  );

  return (
    <View style={{ height }}>
      <Switch style={styles(theme).themeSwitch} value={isDarkMode} onChange={onThemeChange} />
      <Animatable.View animation='fadeIn' style={styles(theme).content}>
        <Text style={styles(theme).header}>Hi, I am {name} {wavingHand}</Text>
        <Text style={styles(theme).subtitle}>{intro}</Text>
        <Text style={styles(theme).subtitle}>Read more
        <Text onPress={onAbout} style={styles(theme).underline}>about me</Text>
          or
        <Text onPress={onContact} style={styles(theme).underline}>contact me</Text>
        </Text>
        {availableForHire && (
          <TouchableOpacity onPress={onContact} activeOpacity={0.9}>
            <Animatable.View animation='tada' duration={2500} delay={1000} style={styles(theme).availableForHire}>
              <Text style={styles(theme).availableForHireText}>🎉 I'm available for hire!</Text>
            </Animatable.View>
          </TouchableOpacity>
        )}
      </Animatable.View>
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  content: {
    marginTop: responsiveHeight(36),
    marginHorizontal: responsiveWidth(8),
  },
  themeSwitch: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  header: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: typography.title
  },
  subtitle: {
    color: theme.text,
    fontWeight: '300',
    fontSize: typography.subtitle,
    marginTop: 10
  },
  underline: {
    color: theme.text,
    marginHorizontal: 8,
    fontSize: typography.subtitle,
    fontWeight: '400',
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  availableForHire: {
    width: isMobile ? 200 : 250,
    marginTop: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: Colors.hire(theme.type),
    padding: 10,
    borderRadius: 5
  },
  availableForHireText: {
    fontSize: typography.caption,
    fontWeight: '500',
    color: Colors.white,
    fontStyle: 'italic'
  }
});

export default Intro;