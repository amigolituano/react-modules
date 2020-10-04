import { RouteData } from '../../shared/routes/routes';
import AboutClient from './pages/about/about';
import Contacts from './pages/contacts/contacts';

import clientModules from './modules';

const routes: RouteData[] = [
  { path: '/', exact: true, component: AboutClient, name: 'About' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
  ...clientModules.map((module) => module.routeProps),
];

export default routes;
