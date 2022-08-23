import Config from '~/Config';

//Pages
import Home from '~/Pages/Home';

// Public Routes
const PublicRoutes = [{ path: Config.routes.home, component: Home }];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
