import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '../../components';
import { useTheme } from '../../store';
import { Theme, defaultContainerStyles } from '../../theme';

function Contact(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  return (
    <View style={styles(theme).container}>
      <Heading label='Contact' />
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    ...defaultContainerStyles(theme)
  }
});

export default Contact;