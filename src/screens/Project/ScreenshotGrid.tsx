import React from 'react';
import { Image, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';
import { Heading } from '../../components';
import { useDimensions } from '../../hooks';
import { Colors } from '../../theme';
import { isTablet } from '../../utils';

interface ScreenshotGridProps {
  screenshots: string[]
}

function ScreenshotGrid(props: ScreenshotGridProps): React.ReactElement {
  const { screenshots } = props;
  const { width } = useDimensions();

  const itemDimension = isTablet ? width * 0.9 : width * 0.2;

  const ListHeaderComponent = () => <Heading label='Screenshots' variant='medium' style={styles.header} />;

  const renderItem = (info: ListRenderItemInfo<string>): JSX.Element => {
    const { item } = info;
    return (
      <View style={styles.card}>
        <Image source={{ uri: item }} style={styles.banner} borderRadius={10} />
      </View>
    );
  };

  const hasScreenshots: boolean = !!screenshots.length;

  if (!hasScreenshots) return <></>;

  return (
    <FlatGrid
      data={screenshots}
      spacing={10}
      ListHeaderComponent={ListHeaderComponent}
      itemDimension={itemDimension}
      style={styles.gridView}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20
  },
  gridView: {
    flex: 1,
    marginVertical: 10,
  },
  card: {
    height: responsiveHeight(80),
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.placeholder
  },
  banner: {
    height: responsiveHeight(80),
    resizeMode: 'cover'
  }
})

export default ScreenshotGrid;