import React, {useContext} from 'react';
import {View} from 'react-native';
import ThemeContext from '../contexts/ThemeContext';
import ActivityIndicator from 'react-native-paper/lib/commonjs/components/ActivityIndicator';

export function ListFooter({style, show}) {
  const [theme] = useContext(ThemeContext);

  if (show) {
    return (
      <ActivityIndicator
        animating
        size="small"
        style={style}
        color={theme.colors.foreground}
      />
    );
  } else {
    return <View />;
  }
}
