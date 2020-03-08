import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import FavouritesScreen from '../screens/FavouritesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MoviesListScreen from '../screens/MoviesListScreen';
import StartupScreen from '../screens/StartupScreen';

import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.greyDark
  },
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'balo'
  },
  headerTintColor: Colors.yellowLight
};

const MoviesNav = createStackNavigator(
  {
    Movies: MoviesListScreen,
    Favourites: FavouritesScreen,
    Details: MovieDetailsScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const tabScreenConfig = {
  Movies: {
    screen: MoviesNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name='movie'
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.blueLight,
      tabBarLabel: 'Movies List'
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tapBarLabel: 'Favourites',
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name='star-outline'
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.blueDark
    }
  }
};

const MoviesFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontWeight: 'bold'
          },
          activeTintColor: Colors.yellowLight
        }
      });

const StartupNavigator = createSwitchNavigator(
  {
    Startup: StartupScreen,
    Movies: MoviesFavTabNavigator
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

export default createAppContainer(StartupNavigator);
