import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  View,
} from 'react-native';

import {App} from './app/router'

import store from './app/store'

class manggoTree extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('manggoTree', () => manggoTree);
