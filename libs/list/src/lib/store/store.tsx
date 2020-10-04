import React from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state) => ({ ...state });

export default function configureStore(preloadedState) {
  const composedEnhancers = composeWithDevTools();

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
}

export const store = configureStore({ list: [] });
export const ListContext = React.createContext({
  store,
  storeState: { list: [] },
});
