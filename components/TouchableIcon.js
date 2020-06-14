import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import ThemeContext from '../contexts/ThemeContext';

export function TouchableIcon({style, name, size, color, onPress}) {
  const [theme] = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name={name} size={size} color={color || theme.colors.foreground} />
    </TouchableOpacity>
  );
}
