import React, {useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ThemeContext from '../contexts/ThemeContext';

export function UserIcon({style, profileImage, size, status}) {
  const [theme] = useContext(ThemeContext);

  let bordering = {};
  if (status) {
    bordering = {
      padding: 3,
      borderColor: '#d98e00',
      borderWidth: 2,
      borderRadius: size ? size / 2 : 15,
    };
    if (status === 'c') {
      bordering.borderColor = '#0dd900';
    } else if (status === 'r') {
      bordering.borderColor = theme.colors.unselected;
    }
  }

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme.colors.foreground,
          width: size || 30,
          height: size || 30,
        },
        bordering,
        style,
      ]}>
      <Image style={styles.profileImage} source={profileImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
});
