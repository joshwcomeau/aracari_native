import { Map, fromJS } from 'immutable';


// ////////////////////////
// ACTION TYPES //////////
// //////////////////////
export const NAV_PUSH = 'NAV_PUSH';
export const NAV_POP = 'NAV_POP';
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY';
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX';
export const NAV_RESET = 'NAV_RESET';


// ////////////////////////
// REDUCER ///////////////
// //////////////////////
const initialState = fromJS({
  key: 'Home',
  index: 0,
  children: [
    { key: 'Home', title: 'Aracari Budget' },
  ],
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case NAV_PUSH: {
      // Do nothing if the state is the same.
      const currentKey = state.getIn(['children', state.get('index'), 'key']);
      const newKey = action.state && action.state.key;
      if (currentKey === newKey) return state;

      return state
        .set('key', action.state.key)
        .set('index', action.state.index)
        .update('children', children => children.push({
          ...action.state,
        }));
    }

    case NAV_POP: {
      if ( state.get('index') === 0 || state.get('children').length === 1 ) {
        return state;
      }

      const previousState = state.get('children').last();

      return state
        .set('key', previousState.get('key'))
        .set('index', previousState.get('index'))
        .update('children', children => children.pop());
    }

    default: {
      return state;
    }
  }
}


// ////////////////////////
// ACTION CREATORS ///////
// //////////////////////
export function navigatePush(state) {
	state = typeof state === 'string' ? { key: state, title: state } : state
	return {
		type: NAV_PUSH,
		state
	}
}

export function navigatePop() {
	return {
		type: NAV_POP
	}
}

export function navigateJumpToKey(key) {
	return {
		type: NAV_JUMP_TO_KEY,
		key
	}
}

export function navigateJumpToIndex(index) {
	return {
		type: NAV_JUMP_TO_INDEX,
		index
	}
}

export function navigateReset(children, index) {
	return {
		type: NAV_RESET,
		index,
		children
	}
}
