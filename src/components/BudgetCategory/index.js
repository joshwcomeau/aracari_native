import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { getBudgetColour, formatHSLColourForCSS } from '../../utils/colour.utils';

// const BudgetCategory = ({
//
// }) => {
//   const budgetProgressStyle = {
//     width: budgetPercentage,
//     backgroundColor: formatHSLColourForCSS(budgetColour),
//   };
//
// }

class BudgetCategory extends Component {
  render() {
    const {
      name, slug, funds, items, monthProgress, actions,
    } = this.props;

    const spent = items.reduce((memo, item) => memo + item.value, 0);
    const available = funds - spent;

    const budgetRatio = spent / funds;
    const budgetColour = formatHSLColourForCSS(getBudgetColour(budgetRatio, monthProgress));

    return (
      <View style={styles.budgetCategory}>
        <View style={styles.budgetBarContainer}>
          <View style={[styles.budgetBar, { flex: spent, backgroundColor: budgetColour }]} />
          <View style={[styles.budgetSpacer, { flex: available }]} />
        </View>
        <Text style={styles.budgetLabel}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  budgetCategory: {
    alignSelf: 'stretch',
    margin: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.4,
    shadowRadius: 0.5,
  },
  budgetBar: {
    height: 40,
  },
  budgetSpacer: {
    height: 40,
  },
  budgetBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  budgetLabel: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
  },
});

export default BudgetCategory;
