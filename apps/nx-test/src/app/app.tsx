import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { ModuleRoutes } from './shared/routes/routes';

import routes from './app.routes';
import modules from './modules';

const store = configureStore({}, modules);

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <header className="flex">
            <Logo width="75" height="75" />
            <h1>Welcome to nx-test!</h1>

            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link to={`${route.path}`}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </header>
          <main>
            <ModuleRoutes routes={routes}></ModuleRoutes>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
