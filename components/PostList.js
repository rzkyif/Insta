import React, {useState, useContext, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Post, ListFooter} from '.';
import {getPosts} from '../lib/DataAcquirer';
import ThemeContext from '../contexts/ThemeContext';

const POST_PER_PAGE = 3;

export function PostList({userId, header}) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    getPosts(userId, page, POST_PER_PAGE).then(newPosts => {
      setPosts(oldPosts =>
        page === 0 ? newPosts : [...oldPosts, ...newPosts],
      );
      setIsLoadingMore(false);
      setIsRefreshing(false);
      if (newPosts.length < POST_PER_PAGE) {
        setCanLoadMore(false);
      }
    });
  }, [userId, page, isRefreshing]);

  const _loadMore = () => {
    if (!isLoadingMore && canLoadMore) {
      setPage(oldPage => oldPage + 1);
      setIsLoadingMore(true);
    }
  };

  const _refresh = () => {
    if (!isRefreshing) {
      setPosts([]);
      setPage(0);
      setIsRefreshing(true);
      setCanLoadMore(true);
    }
  };

  return (
    <FlatList
      style={[s.list, {backgroundColor: theme.colors.background}]}
      data={posts}
      keyExtractor={item => item}
      renderItem={({item}) => <Post postId={item} />}
      onEndReached={_loadMore}
      decelerationRate={0.95}
      onRefresh={_refresh}
      refreshing={isRefreshing}
      onEndReachedThreshold={0.9}
      initialNumToRender={POST_PER_PAGE}
      ListHeaderComponent={header}
      ListFooterComponent={<ListFooter show={isLoadingMore} />}
      ListFooterComponentStyle={s.listFooter}
    />
  );
}

const s = StyleSheet.create({
  list: {
    alignContent: 'center',
    width: '100%',
  },
});
