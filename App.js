import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {HomeScreen} from './components/';
import ThemeContext, {dark, light} from './contexts/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';

// App

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.bar.style}
      />
      <NavigationContainer>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <Tab.Navigator
            barStyle={{backgroundColor: theme.colors.background}}
            backBehavior="none"
            labeled={false}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="home" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={View}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="magnifying-glass" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Camera"
              component={View}
              listeners={{
                tabPress: e => {
                  e.preventDefault();
                  setTheme(theme === dark ? light : dark);
                },
              }}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="social-instagram" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Activity"
              component={View}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="heart" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={View}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="torso" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </ThemeContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

// end
