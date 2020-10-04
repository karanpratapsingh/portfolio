import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../../components';
import { Stack } from '../../config';
import { useTheme } from '../../store';
import { Colors, Theme, typography, defaultContainerStyles } from '../../theme';
import { enumToArray } from '../../utils';
import StackGrid from '../Project/StackGrid';

function About(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const stack: Stack[] = enumToArray<Stack>(Stack);

  return (
    <View style={styles(theme).container}>
      <Heading label='About' />
      <Text style={styles(theme).text}>
        I love to build well-structured, clean code and clean repositories with maintainable and scalable structure, functional programming. Besides, I like to write code in a high-paced and challenging environment with an emphasis on using best practices to develop high-quality software that meets project requirements, budget, and schedule. When working with me you can expect a professional, prompt and friendly service.
      </Text>
      <StackGrid stack={stack} dimension={50} />
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    ...defaultContainerStyles(theme)
  },
  text: {
    fontSize: typography.body,
    color: Colors.white,
    fontWeight: '300'
  }
});


export default About;