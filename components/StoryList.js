import React, {useState, useContext, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Story, ListFooter} from '.';
import {getStories} from '../lib/DataAcquirer';
import ThemeContext from '../contexts/ThemeContext';

const STORY_PER_PAGE = 7;

export function StoryList({userId}) {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    getStories(userId, page, STORY_PER_PAGE).then(newStories => {
      setStories(oldStories =>
        page === 0 ? newStories : [...oldStories, ...newStories],
      );
      setIsLoadingMore(false);
      if (newStories < STORY_PER_PAGE) {
        setCanLoadMore(false);
      }
    });
  }, [userId, page]);

  const _loadMore = () => {
    if (canLoadMore && !isLoadingMore) {
      setPage(page + 1);
      setIsLoadingMore(true);
    }
  };

  return (
    <FlatList
      style={[s.view, {backgroundColor: theme.colors.background}]}
      data={stories}
      onEndReached={_loadMore}
      onEndReachedThreshold={0.9}
      decelerationRate={0.95}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story
          style={s.story}
          userId={item.userId}
          status={item.status}
          withUserName
        />
      )}
      keyExtractor={item => item.userId}
      initialNumToRender={STORY_PER_PAGE}
      listFooter={<ListFooter isLoadingMore={isLoadingMore} />}
      horizontal
      contentContainerStyle={s.storyList}
    />
  );
}

const s = StyleSheet.create({
  story: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  view: {
    flexDirection: 'row',
  },
  storyList: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
});
