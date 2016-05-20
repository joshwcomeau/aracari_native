import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store';
import BudgetView from './src/components/ios/BudgetView';

const store = configureStore();

class aracarinative extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          style={{ flex: 1 }}
          initialRoute={{
            component: BudgetView,
            title: 'Aracari Budget',
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('aracarinative', () => aracarinative);
