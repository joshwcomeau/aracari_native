// Currently Unused
import { createSelector } from 'reselect';

export const nameSelector = state => state.get('name');
export const slugSelector = state => state.get('slug');
export const fundsSelector = state => state.get('funds');
export const itemsSelector = state => state.get('items');

export const spentSelector = createSelector(
  itemsSelector,
  items => items.reduce((memo, item => memo + item.value), 0)
);

export const availableSelector = createSelector(
  spentSelector,
  fundsSelector,
  (spent, funds) => funds - spent
);

export const categoriesListSelector = createSelector(
  nameSelector,
  fundsSelector,
  spentSelector,
  availableSelector,
  (name, funds, spent, available) => ({
    name, funds, spent, available
  })
)
