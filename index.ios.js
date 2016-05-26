/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigator from './components/Navigator';

class D1 extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

AppRegistry.registerComponent('D1', () => D1);
