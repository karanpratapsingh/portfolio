import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useTheme } from '../../store';
import { Theme } from '../../theme';

function Project(): React.ReactElement {
  const theme = useTheme(state => state.theme);

  return (
    <View style={styles(theme).container}>
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2.5),
    backgroundColor: theme.primary
  }
});

export default Project;