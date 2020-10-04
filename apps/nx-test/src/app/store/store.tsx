import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getFeaturesStoreData, ReactModule } from '../shared/routes/routes';

const reducer = (state, action) => ({ ...state });

export default function configureStore(
  preloadedState: object,
  modules: ReactModule[]
) {
  const { reducersMap, initialFeaturesState } = getFeaturesStoreData(modules);

  const rootReducer = combineReducers({
    ...reducersMap,
    app: reducer,
  });

  const composedEnhancers = composeWithDevTools();

  console.log({ ...initialFeaturesState, ...preloadedState });

  const store = createStore(
    rootReducer,
    { ...initialFeaturesState, ...preloadedState },
    composedEnhancers
  );

  return store;
}
