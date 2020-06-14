import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableIcon, UserIcon, Text} from '.';

export function PostHeader({profileImage, name, location}) {
  return (
    <View style={s.postHeader}>
      <UserIcon style={s.profileImage} profileImage={profileImage} />
      <View style={s.title}>
        <Text style={s.name}>{name}</Text>
        {location !== '-' ? <Text style={s.location}>{location}</Text> : null}
      </View>
      <TouchableIcon style={s.postOption} name="braille" size={28} />
    </View>
  );
}

const s = StyleSheet.create({
  profileImage: {
    margin: 10,
  },
  title: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    fontSize: 12,
  },
  postHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  postOption: {
    paddingRight: 10,
  },
});
