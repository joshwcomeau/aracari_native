// eslint-disable-next-line no-unused-vars
import { Map, List, fromJS } from 'immutable';

import budgetReducer from '../ducks/budget.duck';
import navigationReducer from '../ducks/navigation.duck';


const rootReducer = (state = Map(), action) => {
  return Map({
    budget: budgetReducer(
      state.get('budget'),
      action
    ),
    navigation: navigationReducer(
      state.get('navigation'),
      action
    ),
  });
};

export default rootReducer;
