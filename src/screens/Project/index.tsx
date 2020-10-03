import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { IProject } from '../../config';
import { useTheme } from '../../store';
import { Colors, Theme, typography } from '../../theme';

type ProjectParams = {
  project: IProject;
};

type ProjectRouteParams = RouteProp<Record<string, ProjectParams | undefined>, string>;

function Project(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const { params } = useRoute<ProjectRouteParams>();

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).text}>{params?.project.title}</Text>
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
    color: Colors.white,
    fontSize: typography.body
  }
});

export default Project;