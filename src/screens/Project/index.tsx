import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Heading } from '../../components';
import Config, { IProject, ISubProject } from '../../config';
import { useTheme } from '../../store';
import { Colors, defaultContainerStyles, Theme, typography } from '../../theme';
import DeploymentGrid from './DeploymentGrid';
import StackGrid from './StackGrid';
import ScreenshotGrid from './ScreenshotGrid';

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

  const { title, description, stack, deployment, subProjects, screenshots } = project;

  const hasSubProjects: boolean = !!subProjects.length;

  return (
    <ScrollView style={styles(theme).container}>
      <Heading label={title} />
      <Text style={styles(theme).description}>{description}</Text>
      <Heading label='Technologies' variant='medium' />
      <StackGrid stack={stack} dimension={40} />
      <ScreenshotGrid screenshots={screenshots} />
      {hasSubProjects && <Heading label='More products' variant='medium' />}
      {subProjects.map(subProject => <SubProject subProject={subProject} />)}
    </ScrollView>
  );
}

interface SubProjectProps {
  subProject: ISubProject
}

function SubProject(props: SubProjectProps) {
  const theme = useTheme(state => state.theme);
  const { subProject } = props;
  const { title, description, deployment } = subProject;

  return (
    <View style={styles(theme).subProject}>
      <Heading label={title} variant='small' />
      <Text style={[styles(theme).description, { marginBottom: 10 }]}>{description}</Text>
      <DeploymentGrid deployment={deployment} showHeading={false} />
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
    fontWeight: '300',
    marginBottom: 20,
  },
  subProject: {
    marginBottom: 15
  }
});

export default Project;