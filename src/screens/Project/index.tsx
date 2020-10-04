import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Config, { IProject } from '../../config';
import { useTheme } from '../../store';
import { Colors, Theme, typography, defaultContainerStyles } from '../../theme';
import StackGrid from './StackGrid';
import { Heading } from '../../components';

type ProjectParams = {
  id: number;
};

type ProjectRouteParams = RouteProp<Record<string, ProjectParams | undefined>, string>;

function Project(): React.ReactElement | null {
  const theme = useTheme(state => state.theme);
  const navigation = useNavigation();
  const { params } = useRoute<ProjectRouteParams>();
  const project: IProject | undefined = Config.projects.find(({ id }) => id === params?.id)

  useEffect(() => {
    if (!project) {
      navigation.goBack();
    }
  }, [project]);

  if (!project) {
    return null;
  }

  const { title, description } = project;

  return (
    <View style={styles(theme).container}>
      <Heading label={title} />
      <Text style={styles(theme).description}>{description}</Text>
      <Text style={styles(theme).subtitle}>Technologies</Text>
      <StackGrid stack={project.stack} dimension={40} />
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    ...defaultContainerStyles(theme)
  },
  description: {
    color: Colors.white,
    fontSize: typography.body,
    fontWeight: '300'
  },
  subtitle: {
    marginTop: 20,
    color: Colors.white,
    fontSize: typography.body,
    fontWeight: 'bold'
  }
});

export default Project;