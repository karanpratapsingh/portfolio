import React from 'react';
import { Image, ListRenderItemInfo, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Stack, StackAssets } from '../../config';

interface StackGridProps {
  stack: Stack[];
  dimension: number;
}

function StackGrid(props: StackGridProps) {
  const { stack, dimension } = props;
 
  const renderItem = (info: ListRenderItemInfo<Stack>): JSX.Element => {
    const { item: stack } = info;
    const uri: string = StackAssets[stack];

    const height: number = dimension;
    const width: number = dimension;

    return (
      <Image
        source={{ uri }}
        style={[styles.stackImage, { height, width }]}
      />
    );
  }

  const itemDimension = dimension + 20;

  return (
    <FlatGrid
      data={stack}
      spacing={0}
      itemDimension={itemDimension}
      style={styles.gridView}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  gridView: {
    marginBottom: 20
  },
  stackImage: {
    marginTop: 20,
    resizeMode: 'contain'
  }
});

export default StackGrid;