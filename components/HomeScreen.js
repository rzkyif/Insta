import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {PostList, StoryList, HomeScreenHeader} from '.';
import ThemeContext from '../contexts/ThemeContext';

export function HomeScreen({}) {
  const [theme] = useContext(ThemeContext);

  return (
    <View style={[s.homeScreen, {backgroundColor: theme.colors.background}]}>
      <HomeScreenHeader />
      <PostList header={<StoryList userId={'000000'} />} userId="000000" />
    </View>
  );
}

const s = StyleSheet.create({
  homeScreen: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
});
