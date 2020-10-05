import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ModuleRoutes } from '../../shared/routes/routes';

import './client.scss';
import routes from './client.routes';

export const Client = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div>
        <h1>Client</h1>

        <ul>
          {routes.map((route) => (
            <li>
              <Link key={route.path} to={`${match.path}${route.path}`}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ModuleRoutes routes={routes}></ModuleRoutes>
    </div>
  );
};
