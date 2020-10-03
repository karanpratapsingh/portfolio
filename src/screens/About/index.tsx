import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useTheme } from '../../store';
import { Theme, Colors, typography } from '../../theme';

function About(): React.ReactElement {
  const theme = useTheme(state => state.theme);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).text}>
        TODO: About me 
      </Text>
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2.5),
    backgroundColor: theme.primary
  },
  text: {
    fontSize: typography.body,
    color: Colors.white
  }
});


export default About;