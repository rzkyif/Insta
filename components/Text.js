import React, {useContext} from 'react';
import {Text as OriginalText} from 'react-native';
import ThemeContext from '../contexts/ThemeContext';

export function Text({style, children}) {
  const [theme] = useContext(ThemeContext);

  return (
    <OriginalText style={[{color: theme.colors.foreground}, style]}>
      {children}
    </OriginalText>
  );
}
