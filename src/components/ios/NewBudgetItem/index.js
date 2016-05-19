import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BudgetView extends Component {
  render() {
    return (
      <View style={styles.budgetView}>
        <Text>Add Budget View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  budgetView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#770000',
  },
});

export default BudgetView;
