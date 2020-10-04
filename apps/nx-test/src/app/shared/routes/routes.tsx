import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Action, Reducer, ReducersMapObject } from 'redux';

export interface ReactModule {
  storeProps?: {
    feature: string;
    reducer?: <T>(v: T, action: Action) => T;
    initialState?: { [key: string]: any };
  };
  routeProps: RouteData;
  childrenModules?: ReactModule[];
}

export interface RouteData {
  path: string;
  component?: React.FC | React.Component | JSX.Element;
  render?: () => React.Component;
  childrenRoutes?: RouteData[];
  name: string;
  exact?: boolean;
  private?: boolean;
}

export interface FeaturesStoreData {
  reducersMap: ReducersMapObject;
  initialFeaturesState: object;
}

export const getFeaturesStoreData = (
  modules: ReactModule[],
  { reducersMap, initialFeaturesState }: FeaturesStoreData = {
    reducersMap: {},
    initialFeaturesState: {},
  }
): FeaturesStoreData => {
  for (const module of modules) {
    if (module.storeProps?.reducer && module.storeProps.feature) {
      const { feature, reducer, initialState } = module.storeProps;

      if (reducersMap[feature]) {
        throw new Error('Multiple reducers with the same feature key');
      }

      reducersMap[feature] = reducer;
      initialFeaturesState[feature] = initialState || {};

      if (module.childrenModules) {
        getFeaturesStoreData(module.childrenModules, {
          reducersMap,
          initialFeaturesState,
        });
      }
    }
  }

  return { reducersMap, initialFeaturesState };
};

export const storeForFeature = (feature: string, reducer: Reducer) => {
  return {
    feature,
    reducer,
  };
};

export const createReactModule = (
  feature: string,
  routeProps: Omit<RouteData, 'path'>,
  childrenModules: ReactModule[],
  reducer: Reducer
): ReactModule => {
  return {
    storeProps: storeForFeature(feature, reducer),
    routeProps: {
      path: `/${feature}`,
      ...routeProps,
    },
    childrenModules,
  };
};

export const Routes = ({ routes }: { routes: any[] }) => {
  const match = useRouteMatch();

  const pathRoot = match.path === '/' ? '' : match.path;

  return (
    <Switch>
      {routes.map(({ path, ...route }) => (
        <Route key={path} path={`${pathRoot}${path}`} {...route}></Route>
      ))}
    </Switch>
  );
};
