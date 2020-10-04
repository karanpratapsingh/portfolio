import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { typography, Colors } from '../theme';

interface HeaderProps {
  label: string;
}

function Header(props: HeaderProps) {
  const { label } = props;

  return <Text style={styles.text}>{label}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: typography.title,
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default Header;