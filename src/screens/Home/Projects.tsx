import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { SectionHeader } from '../../components';
import Config, { IProject } from '../../config';
import { useDimensions } from '../../hooks';
import { ScreenType } from '../../navigation';
import { Colors, typography } from '../../theme';

function Projects(): React.ReactElement {
  const navigation = useNavigation();
  const { width } = useDimensions();
  const { projects } = Config;

  const itemDimension = width <= 1000 ? width * 0.9 : width * 0.3;

  const ListHeaderComponent = () => <SectionHeader title='Portfolio' subtitle={'Projects I\'ve worked on recently'} />;

  const renderItem = (info: ListRenderItemInfo<IProject>): JSX.Element => {
    const { item } = info;
    const { id, title, banner, description } = item;

    const onProject = () => {
      navigation.navigate(ScreenType.Project, { id });
    };

    return (
      <TouchableOpacity onPress={onProject} activeOpacity={0.95} style={styles.card}>
        <ImageBackground source={{ uri: banner }} style={styles.banner} borderRadius={10}>
          <BlurView tint='dark' intensity={40} style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description} ellipsizeMode='tail' numberOfLines={1}>{description}</Text>
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
      style={styles.gridView}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: responsiveWidth(2),
    marginBottom: responsiveWidth(1),
  },
  card: {
    height: responsiveHeight(36),
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.placeholder
  },
  banner: {
    height: responsiveHeight(36),
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