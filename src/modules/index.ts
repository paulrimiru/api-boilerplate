import helloRoutes from './hello/routes';

const routes = [helloRoutes];

export default routes.reduce((allRoutes, moduleRoutes) => allRoutes.concat(moduleRoutes));
