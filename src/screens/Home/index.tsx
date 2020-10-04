import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Footer } from '../../components';
import { useTheme } from '../../store';
import { Theme } from '../../theme';
import Intro from './Intro';
import Projects from './Projects';

function Home(): React.ReactElement {
  const theme = useTheme(state => state.theme);

  return (
    <ScrollView contentContainerStyle={styles(theme).container}>
      <Intro />
      <Projects />
      <Footer />
    </ScrollView>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.background
  }
});

export default Home;