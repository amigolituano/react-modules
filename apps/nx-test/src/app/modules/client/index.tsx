import { createReactModule } from '../../shared/routes/routes';

import routes from './client.routes';
import clientModules from './modules';
import { Client } from './client';

export default createReactModule(
  'client',
  {
    component: Client,
    childrenRoutes: routes,
    name: 'Client',
  },
  clientModules,
  (state = {} as any) => state
);
