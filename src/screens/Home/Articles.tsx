import dateFormat from 'dateformat';
import React from 'react';
import { ActivityIndicator, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { useQuery } from 'react-query';
import { Chip, SectionHeader } from '../../components';
import Config from '../../config';
import { useDimensions } from '../../hooks';
import { useTheme } from '../../store';
import { Colors, Theme, typography } from '../../theme';
import { isMobile, isTablet, listToMatrix, openInNewTab } from '../../utils';

type ArticleResult = any;

const articlesQuery = fetch(`https://dev.to/api/articles?username=${Config.devToUsername}`).then((res: Response) => res.json())

function Projects(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const { width } = useDimensions();

  const { data, isLoading } = useQuery('articles', () => articlesQuery);

  const itemDimension = width <= 1000 ? width * 0.9 : width * 0.3;

  const renderItem = (info: ListRenderItemInfo<ArticleResult[]>): JSX.Element => {
    const { item } = info;

    return (
      <View>
        {item.map((item: ArticleResult) => {

          const { title, tag_list, description, published_at, url } = item;

          const date = dateFormat(new Date(published_at), 'mmm dS, yyyy');

          const onPressArticle = () => {
            openInNewTab(url);
          };

          return (
            <TouchableOpacity onPress={onPressArticle} activeOpacity={0.95} style={styles(theme).card}>
              <View style={styles(theme).titleContainer}>
                <Text style={styles(theme).title} ellipsizeMode='tail' numberOfLines={2}>{title}</Text>
              </View>
              <View style={styles(theme).tagContainer}>
                {tag_list.map((tag: string) => <Chip key={tag} label={tag} />)}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles(theme).description} ellipsizeMode='tail' numberOfLines={2}>{description}</Text>
              </View>
              <Text style={styles(theme).date}>{date}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )
  };

  let content: React.ReactNode = (
    <View style={styles(theme).content}>
      <ActivityIndicator color={Colors.loader(theme.type)} size='large' />
    </View>
  );

  if (!isLoading && !data?.error) {
    const columnGrid = listToMatrix(data, 2);

    content = (
      <FlatGrid
        data={columnGrid}
        spacing={10}
        horizontal
        itemDimension={itemDimension}
        style={styles(theme).gridView}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  }

  return (
    <View style={styles(theme).container}>
      <SectionHeader title='Articles' subtitle="When I'm not writing code, I write articles" style={styles(theme).header} />
      {content}
    </View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(2)
  },
  header: {
    marginBottom: 5
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: isMobile ? responsiveHeight(24) : responsiveHeight(32)
  },
  gridView: {
    height: isMobile ? responsiveHeight(52) : responsiveHeight(60)
  },
  card: {
    display: 'flex',
    width: isMobile ? responsiveWidth(90) : isTablet ? responsiveWidth(60) : responsiveWidth(32),
    height: isMobile ? responsiveHeight(24) : responsiveHeight(28),
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: theme.footer,
  },
  titleContainer: {
    minHeight: isMobile ? responsiveHeight(4) : responsiveHeight(6)
  },
  title: {
    fontSize: typography.subtitle2,
    color: theme.text,
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2)
  },
  description: {
    fontSize: typography.caption,
    color: theme.textSecondary,
    fontWeight: '400',
  },
  date: {
    marginTop: 10,
    fontSize: typography.caption,
    color: theme.textSecondary,
    fontWeight: '300',
    alignSelf: 'flex-end'
  }
})

export default Projects;