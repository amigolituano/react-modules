import React from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { Routes } from './shared/routes/routes';

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

            {routes.map((route) => (
              <Link key={route.path} to={`${route.path}`}>
                {route.name}
              </Link>
            ))}
          </header>
          <main>
            <Routes routes={routes}></Routes>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
