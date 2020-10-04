import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../../components';
import Config, { Stack } from '../../config';
import { useTheme } from '../../store';
import { Colors, Theme, typography, defaultContainerStyles } from '../../theme';
import { enumToArray } from '../../utils';
import StackGrid from '../Project/StackGrid';

function About(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const stack: Stack[] = enumToArray<Stack>(Stack);
  const { about } = Config;

  return (
    <View style={styles(theme).container}>
      <Heading label='About' />
      <Text style={styles(theme).about}>
        {about}
      </Text>
      <Heading label='Technologies' variant='medium' />
      <StackGrid stack={stack} dimension={40} />
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    ...defaultContainerStyles(theme)
  },
  about: {
    fontSize: typography.body,
    color: Colors.white,
    fontWeight: '300',
    marginBottom: 20
  }
});


export default About;