import searchRoutes from './hello/routes';
import userRoutes from './users/routes';

const routes = [searchRoutes, userRoutes];

export default routes.reduce((allRoutes, moduleRoutes) => allRoutes.concat(moduleRoutes));
