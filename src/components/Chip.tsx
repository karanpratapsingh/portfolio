import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useTheme } from '../store';
import { ChipColor, Colors, Theme, typography } from '../theme';
import { isMobile } from '../utils';

interface ChipProps {
  label: string;
}

function Chip(props: ChipProps): React.ReactElement {
  const { label } = props;
  const theme = useTheme(state => state.theme);

  const backgroundColor: string = ChipColor[label] || ChipColor.react;

  return (
    <View style={[styles(theme).container, { backgroundColor }]}>
      <Text style={styles(theme).label}>{label}</Text>
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    height: isMobile ? 25 : responsiveHeight(3.2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: isMobile ? 6 : 12,
    marginRight: isMobile ? 5 : 10,
    borderRadius: 5,
  },
  label: {
    fontSize: typography.caption,
    color: Colors.white,
    fontWeight: '400',
  }
});

export default Chip;