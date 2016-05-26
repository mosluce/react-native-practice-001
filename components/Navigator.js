//@flow
import React, {Component} from 'react';
import {
  Navigator
} from 'react-native';

import LaunchScreen from './LaunchScreen';

class D1Navigator extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigato) {
    return (
      <LaunchScreen name={route.name} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'launch', index: 0}}
        renderScene={this.renderScene.bind(this)} />
    );
  }
}

export default D1Navigator;
