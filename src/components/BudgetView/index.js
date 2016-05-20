import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { progressThroughMonth } from '../../utils/time.utils';
import { navigatorHeight } from '../../styles/sizes';
import { offwhite } from '../../styles/colours';

import NewBudgetItem from '../NewBudgetItem';
import BudgetCategory from '../BudgetCategory';


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

  renderBudgetCategories() {
    return this.props.categories.map( category => (
      <BudgetCategory
        key={category.slug}
        monthProgress={progressThroughMonth()}
        {...category}
      />
    ))
  }

  render() {
    return (
      <View style={styles.budgetView}>
        {this.renderBudgetCategories()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  budgetView: {
    flex: 1,
    marginTop: navigatorHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: offwhite,
  },
});

function mapStateToProps(state) {
  // Convert the state into plain JS, picking from the selectors.
  // NOTE: This is generally a bad practice!!
  // When using Immutable.js, it's generally a good idea, for perf reasons,
  // to keep the data structure immutable all the way down through components.
  // I really like rest/spread operators, though, and this is a tiny toy app,
  // so I don't anticipate perf concerns with such small amounts of state.
  // Don't do this in real apps though!
  const budget = state.get('budget').toJS();
  return {
    ...budget
  };
}

export default connect(mapStateToProps)(BudgetView);
