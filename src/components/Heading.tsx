import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors, typography } from '../theme';

interface HeadingProps {
  label: string;
  variant?: 'large' | 'medium' | 'small',
  style?: ViewStyle;
}

function Heading(props: HeadingProps) {
  const { label, variant = 'large', style } = props;

  let fontSize = typography.title;

  if (variant === 'medium') {
    fontSize = typography.subtitle;
  } else if (variant === 'small') {
    fontSize = typography.body;
  }

  return <Text style={[styles.text, style, { fontSize }]}>{label}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: typography.title,
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export default Heading;