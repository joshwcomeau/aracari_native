import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BudgetCategory extends Component {
  render() {
    console.log("Rendering", this.props)
    return (
      <View style={styles.budgetView}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  budgetView: {
    alignSelf: 'stretch',
    margin: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.4,
    shadowRadius: 0.5
  },
});

export default BudgetCategory;
