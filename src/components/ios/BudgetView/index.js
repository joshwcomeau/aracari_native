import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import NewBudgetItem from '../NewBudgetItem';


class BudgetView extends Component {
  constructor(...args) {
    super(...args);
    this.addNewBudgetItem = this.addNewBudgetItem.bind(this);
  }

  addNewBudgetItem() {
    this.props.navigator.push({
      title: 'Add New Item',
      component: NewBudgetItem,
    });
  }

  render() {
    return (
      <View style={styles.budgetView}>
        <Text>Budget View</Text>
        <TouchableHighlight onPress={this.addNewBudgetItem}>
          <Text>Add New Budget Item</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  budgetView: {
    flex: 1,
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006600',
  },
});

export default BudgetView;
