import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BudgetView from './src/components/ios/BudgetView';


class aracarinative extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          component: BudgetView,
          title: 'Aracari Budget',
        }}
      />
    );
  }
}

AppRegistry.registerComponent('aracarinative', () => aracarinative);
