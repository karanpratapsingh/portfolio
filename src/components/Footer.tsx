import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useTheme } from '../store';
import { typography, Theme, Colors } from '../theme';

function Footer() {
  const theme = useTheme(state => state.theme);
  const year = new Date().getFullYear();

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).footer}>Copyright © {year} Karan Pratap Singh | All rights reserved</Text>
    </View>
  )
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(5),
    height: responsiveHeight(15),
    backgroundColor: theme.footer
  },
  footer: {
    fontSize: typography.caption,
    color: theme.text,
    fontWeight: '300'
  }
});

export default Footer;