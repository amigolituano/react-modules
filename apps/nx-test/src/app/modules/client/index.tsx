import { ReactModule } from '../../shared/routes/routes';

import routes from './client.routes';
import clientModules from './modules';
import { Client } from './client';

const ClientModule: ReactModule = {
  storeProps: {
    feature: 'client',
    reducer: (state = {} as any) => state,
  },
  routeProps: {
    path: '/client',
    component: Client,
    childrenRoutes: routes,
    name: 'Client',
  },
  childrenModules: clientModules,
};

export default ClientModule;
