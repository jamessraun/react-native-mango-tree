import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'

export const App = StackNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      title:'Welcome',
    }
  }
})
