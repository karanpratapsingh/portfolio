import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { useDimensions } from '../../hooks';
import { ScreenType } from '../../navigation';
import { useTheme } from '../../store';
import { Colors, Theme, typography } from '../../theme';
import { BlurView } from 'expo-blur';
import Config, { IProject } from '../../config';
import { SectionHeader } from '../../components';

function Projects(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const navigation = useNavigation();
  const { width } = useDimensions();
  const { projects } = Config;

  const itemDimension = width <= 1000 ? width * 0.9 : width * 0.3;

  const ListHeaderComponent = () => <SectionHeader title='Work' subtitle={'Projects I\'ve worked on'} />

  const renderItem = (info: ListRenderItemInfo<IProject>): JSX.Element => {
    const { id, title, banner, description } = info.item;

    const onProject = () => {
      navigation.navigate(ScreenType.Project, { id });
    };

    return (
      <TouchableOpacity onPress={onProject} activeOpacity={0.95} style={styles(theme).card}>
        <ImageBackground source={{ uri: banner }} style={styles(theme).banner} borderRadius={10}>
          <BlurView tint='dark' intensity={40} style={styles(theme).cardContent}>
            <Text style={styles(theme).title}>{title}</Text>
            <Text style={styles(theme).description} ellipsizeMode='tail' numberOfLines={1}>{description}</Text>
          </BlurView>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <FlatGrid
      data={projects}
      spacing={10}
      ListHeaderComponent={ListHeaderComponent}
      itemDimension={itemDimension}
      style={styles(theme).gridView}
      renderItem={renderItem}
    />
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  header: {
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveHeight(5),
    fontSize: typography.title,
    fontWeight: 'bold',
    color: theme.text
  },
  gridView: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: responsiveWidth(2)
  },
  card: {
    height: 300,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.placeholder
  },
  banner: {
    height: 300,
    justifyContent: 'flex-end',
  },
  cardContent: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: typography.body,
    color: Colors.white,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: typography.caption,
    color: Colors.white,
    fontWeight: '400',
  }
})

export default Projects;