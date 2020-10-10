import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../../components';
import Config, { Stack } from '../../config';
import { useTheme } from '../../store';
import { Colors, defaultContainerStyles, Theme, typography } from '../../theme';
import { enumToArray, openInNewTab } from '../../utils';
import StackGrid from '../Project/StackGrid';

function About(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const stack: Stack[] = enumToArray<Stack>(Stack);
  const { about } = Config;

  const onResume = () => {
    openInNewTab(Config.resume);
  };

  return (
    <View style={styles(theme).container}>
      <Heading label='About' />
      <Text style={styles(theme).about}>
        {about}
      </Text>
      <Text onPress={onResume} style={styles(theme).underline}>Download my resume</Text>
      <Heading label='Technologies I work with' variant='medium' />
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
  },
  underline: {
    color: Colors.white,
    fontSize: typography.body,
    fontWeight: '300',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    marginBottom: 20
  }
});


export default About;