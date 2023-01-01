src/components/App.js


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../store/actions/toggleActions';

function App() {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();

  function toggleValue() {
    dispatch(toggle());
  }

  return (
    <div>
      <div>{value ? 'On' : 'Off'}</div>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}

export default App;

==================================

src/store/actions/toggleActions.js

export function toggle() {
  return { type: 'TOGGLE' };
}
==========================================


src/store/reducers/boolReducer.js

function boolReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { value: !state.value };
    default:
      return state;
  }
}

export default boolReducer;
======================================================================
src/store/store.js


import { createStore } from 'redux';
import boolReducer from './reducers/boolReducer'

=====================================================================================================
==============

import { configureStore } from 'redux-starter-kit';
import boolReducer from './reducers/boolReducer';

const store = configureStore({
  reducer: boolReducer,
  initialState: { value: false }
});

export default store;
