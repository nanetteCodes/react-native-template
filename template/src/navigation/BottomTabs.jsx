import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {routes} from '@/constants';

import Home from '@/screens/home/home';

const Tab = createBottomTabNavigator();

export default ({route}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={Home} />
    </Tab.Navigator>
  );
};
