import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Routes } from '../../shared/routes/routes';

import './client.scss';
import routes from './client.routes';

export const Client = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div>
        <h1>Client</h1>

        {routes.map((route) => (
          <Link key={route.path} to={`${match.path}${route.path}`}>
            {route.name}
          </Link>
        ))}
      </div>

      <Routes routes={routes}></Routes>
    </div>
  );
};
