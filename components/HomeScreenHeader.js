import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableIcon, Text} from '.';

export function HomeScreenHeader({}) {
  return (
    <View style={s.header}>
      <TouchableIcon style={s.iconButton} name="camera" size={26} />
      <Text style={s.titleText}>Kilogram</Text>
      <TouchableIcon style={s.iconButton} name="mail" size={26} />
    </View>
  );
}

const s = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  titleText: {
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 5,
  },
  iconButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
