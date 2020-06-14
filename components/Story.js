import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {UserIcon, Text} from '.';
import {getUserInfo} from '../lib/DataAcquirer';

const MAX_USERNAME_SHOWN = 10;

export function Story({style, userId, status, withUserName}) {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('placeholder');

  useEffect(() => {
    getUserInfo(userId).then(userInfo => {
      setUsername(userInfo.username);
      setProfileImage(userInfo.profileImage);
    });
  }, [userId]);

  return (
    <View style={[s.story, style]}>
      <UserIcon profileImage={profileImage} size={60} status={status} />
      {withUserName ? (
        <Text style={s.username}>
          {username.length <= MAX_USERNAME_SHOWN
            ? username
            : username.substr(0, MAX_USERNAME_SHOWN - 3) + '...'}
        </Text>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({
  story: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    paddingTop: 5,
    fontSize: 12,
  },
});
