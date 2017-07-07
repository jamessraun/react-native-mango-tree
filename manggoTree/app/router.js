import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import GrowScreen from './screens/GrowScreen'
import DeadScreen from './screens/DeadScreen'
export const App = StackNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      title:'Welcome',
    }
  },
  Grow: {
    screen:GrowScreen,
    navigationOptions: {
      title:'Growing',
    }
  },
  Dead: {
    screen:DeadScreen,
    navigationOptions: {
      title:'Dead',
    }
  },
})
