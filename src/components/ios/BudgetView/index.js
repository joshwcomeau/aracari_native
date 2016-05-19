import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

class BudgetView extends Component {
  constructor(...args) {
    super(...args);
    this.addNewBudgetItem = this.addNewBudgetItem.bind(this);
  }

  addNewBudgetItem() {
    this.props.navigator.push({ name: 'NewBudgetItem' })
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default BudgetView;
