import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { typography, Colors } from '../theme';

interface HeadingProps {
  label: string;
}

function Heading(props: HeadingProps) {
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

export default Heading;