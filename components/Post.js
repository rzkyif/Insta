import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {PostHeader, PostBody} from '.';
import {getPostInfo, getUserInfo} from '../lib/DataAcquirer.js';
import ThemeContext from '../contexts/ThemeContext.js';

export function Post({postId}) {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('-');
  const [location, setLocation] = useState('-');
  const [images, setImages] = useState([]);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    getPostInfo(postId).then(postInfo => {
      setLocation(postInfo.location);
      setImages(postInfo.images);
      getUserInfo(postInfo.userId).then(userInfo => {
        setProfileImage(userInfo.profileImage);
        setName(userInfo.name);
      });
    });
  }, [postId]);

  return (
    <View
      style={[
        s.post,
        {
          borderColor: theme.colors.delimiter,
          backgroundColor: theme.colors.background,
        },
      ]}>
      <PostHeader profileImage={profileImage} name={name} location={location} />
      <PostBody images={images} />
    </View>
  );
}

const s = StyleSheet.create({
  postContent: {
    flexDirection: 'column',
    width: '100%',
  },
  post: {
    width: '100%',
    flexDirection: 'column',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
