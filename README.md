import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
===================================================
import { combineReducers } from 'redux';
import boolReducer from './boolReducer';

const rootReducer = combineReducers({
  bool: boolReducer
});

export default rootReducer;
=======================================================

const initialState = {
  value: false
};

function boolReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        value: !state.value
      };
    default:
      return state;
  }
}

export default boolReducer;
=============================================
mport { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
============================================================

import { useSelector, useDispatch } from 'react-redux';

function App() {
  const value = useSelector(state => state.bool.value);
  const dispatch = useDispatch();

  let message;

  if (value) {
    message = 'On';
  } else {
    message = 'Off';
  }

  return (
    <div>
      <div>{message}</div>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle</button>
    </div
