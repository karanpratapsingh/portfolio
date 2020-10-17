import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../store';
import { Theme, typography } from '../theme';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader(props: SectionHeaderProps) {
  const { title, subtitle } = props;
  const theme = useTheme(state => state.theme);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>{title}</Text>
      <Text style={styles(theme).subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    marginBottom: 25,
    marginHorizontal: 10,
  },
  title: {
    fontSize: typography.title,
    color: theme.text,
    fontWeight: '500',
    marginBottom: 5
  },
  subtitle: {
    fontSize: typography.body,
    color: theme.textSecondary,
    fontWeight: '300',
  }
});

export default SectionHeader;