import {routes} from '../constants';

type RouteNames = keyof typeof routes;

interface LinkingConfig {
  prefixes: string[];
  config: {
    initialRouteName: RouteNames;
    screens: {
      [key in RouteNames]?: {
        path?: string; // Add additional properties as needed
        // ... other screen configuration
      };
    };
  };
}

const linking: LinkingConfig = {
  prefixes: [],
  config: {
    initialRouteName: 'HOME', // Ensure this is a valid key in `routes`
    screens: {
      BOTTOM_TABS: {
        // Screen-specific configuration
      },
      HOME: {
        path: '/',
      },
      // ... other screens
    },
  },
};

export default linking;
