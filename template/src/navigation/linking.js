import {routes} from '../constants';

export default {
  config: {
    initialRouteName: routes.HOME,
    screens: {
      [routes.BOTTOM_TABS]: {
        screens: {
          [routes.HOME]: '/',
        },
      },
    },
  },
};
