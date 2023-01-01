function boolReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { value: !state.value };
    default:
      return state;
  }
}

export default boolReducer;


==============================================================

import { createStore } from 'redux';
import boolReducer from '../reducers/boolReducer';

const initialState = { value: false };
const store = createStore(boolReducer, initialState);

export default store;


=========================================================================================


import { useSelector, useDispatch }


