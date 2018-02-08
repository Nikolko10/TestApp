import initialState from './../initialState/state.js';
import { loadState, saveState } from './../localStorage/localStorage.js';

export default function collectionsReducer(state = initialState, action) { // reducer
  if (state === undefined) {
    saveState(state);
    return state
  };

  if (action.type === 'LOAD') {
    var currentState = loadState();
    if (currentState === undefined) {
      currentState = state;
    }
    currentState['isLoading'] = true;
    return currentState
  }

  if (action.type === 'ADD') {
    const newState = Object.assign({}, state);
    newState.items.forEach((item) => {
      if (item.num === +action.payload.day) {
        item.time = action.payload.time;
        item.note = action.payload.note;
      }
    })
    return newState
  }
  return state
}