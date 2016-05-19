import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BudgetView from './src/components/ios/BudgetView'

class aracarinative extends Component {
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{name: 'Aracari', index: 0}}
        renderScene={(route, navigator) =>
          <BudgetView />
        }
      />
    );
  }
}

AppRegistry.registerComponent('aracarinative', () => aracarinative);
