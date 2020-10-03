import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { useDimensions } from '../../hooks';
import { ScreenType } from '../../navigation';
import { useTheme } from '../../store';
import { Colors, Theme, typography } from '../../theme';

interface Project {
  title: string;
  banner: string;
}

const projects: Project[] = [
  { title: 'Project A', banner: 'https://images.unsplash.com/photo-1601666703585-964591b026c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' },
  { title: 'Project B', banner: 'https://images.unsplash.com/photo-1601666621148-7100d0f63ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80' },
  { title: 'Project C', banner: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' },
  { title: 'Project D', banner: 'https://images.unsplash.com/photo-1601664023050-82d1e19d945c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' },
  { title: 'Project E', banner: 'https://images.unsplash.com/photo-1601658797866-7ae55d05a817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
  { title: 'Project F', banner: 'https://images.unsplash.com/photo-1601658480525-0d3cf704ca48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
  { title: 'Project G', banner: 'https://images.unsplash.com/photo-1601648904883-4270e74277d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' },
];

function Projects(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const navigation = useNavigation();
  const { width } = useDimensions();

  const itemDimension = width <= 1000 ? width * 0.9 : width * 0.3;

  const ListHeaderComponent = () => <Text style={styles(theme).header}>Work</Text>

  const renderItem = (info: ListRenderItemInfo<Project>): JSX.Element => {
    const { title, banner } = info.item;

    const onProject = () => {
      navigation.navigate(ScreenType.Project);
    };

    return (
      <TouchableOpacity onPress={onProject} activeOpacity={0.95} style={styles(theme).card}>
        <ImageBackground source={{ uri: banner }} style={styles(theme).banner} borderRadius={10}>
          <Text style={styles(theme).title}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <FlatGrid
      data={projects}
      ListHeaderComponent={ListHeaderComponent}
      itemDimension={itemDimension}
      style={styles(theme).gridView}
      spacing={10}
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
    padding: 10,
  },
  title: {
    fontSize: typography.subtitle,
    color: Colors.white,
    fontWeight: '700',
  }
})

export default Projects;