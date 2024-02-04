import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    {
      id: 255,
      name: 'alex',
      number: '0673233936',
    },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

const enchancer = devToolsEnhancer();

const store = createStore(reducer, enchancer);

export default store;
