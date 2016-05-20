import { Map, fromJS } from 'immutable';
import slug from 'slug';


// ////////////////////////
// ACTION TYPES //////////
// //////////////////////
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_COST = 'ADD_COST';


// ////////////////////////
// REDUCER ///////////////
// //////////////////////
const initialState = fromJS({
  categories: [
    {
      name: 'Food',
      slug: 'food',
      funds: 50000,
      items: [
        { details: 'Hamburger', value: 1000 },
        { details: 'Indian Food', value: 4500 },
        { details: 'Groceries', value: 9000 },
      ],
    }, {
      name: 'Entertainment',
      slug: 'entertainment',
      funds: 20000,
      items: [
        { details: 'Movies', value: 3000 },
        { details: 'Video Game', value: 14000 },
      ],
    }, {
      name: 'Medication',
      slug: 'medication',
      funds: 15000,
      items: [
        { details: 'Pills', value: 1000 },
      ],
    },
  ],
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CATEGORY: {
      const newCategory = Map({
        name: action.name,
        slug: slug(action.name).toLowerCase(),
        budget: action.budget,
        amountSpent: 0,
      });

      return state.update('categories', categories => (
        categories.push(newCategory)
      ));
    }

    case ADD_COST: {
      const categoryEntry = state.get('categories').findEntry(
        cat => cat.get('slug') === action.category
      );

      if (!categoryEntry) {
        throw new Error(
          'categoryNotFound',
          'It appears you tried to add a cost to a category that does not exist!');
      }

      const [categoryIndex, category] = categoryEntry;

      // TODO: Error handling (what if no category is found?)
      const newAmountSpent = category.get('amountSpent') + action.amount;

      return state.setIn(
        ['categories', categoryIndex, 'amountSpent'],
        newAmountSpent
      );
    }

    default:
      return state;
  }
}


// ////////////////////////
// ACTION CREATORS ///////
// //////////////////////
