import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BudgetView from './src/components/ios/BudgetView';
import NewBudgetItem from './src/components/ios/NewBudgetItem';


class aracarinative extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Budget': return <BudgetView navigator={navigator} />;
      case 'NewBudgetItem': return <NewBudgetItem />;
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{name: 'Budget', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('aracarinative', () => aracarinative);
