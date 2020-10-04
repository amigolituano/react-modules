import React from 'react';

import { Route, Link, useRouteMatch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './list.scss';
import { ListContext, store } from './store/store';
import Cards from './components/cards/cards';

export const List = () => {
  const match = useRouteMatch();

  return (
    <Provider context={ListContext} store={store}>
      <div>
        <h1>Welcome to list!</h1>

        <ul>
          <li>
            <Link to={`${match.path}`}>list root</Link>
          </li>
          <li>
            <Link to={`${match.path}/cards`}>list cards</Link>
          </li>
        </ul>

        <Route path={`${match.path}`} render={() => 'list root'} />
        <Route path={`${match.path}/cards`} render={() => <Cards></Cards>} />
      </div>
    </Provider>
  );
};

export const ListModule = {
  routeProps: {
    path: '/list',
    component: List,
    name: 'List',
  },
};
