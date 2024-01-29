import React from 'react';
import {StatusBar, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {routes} from '@/constants';
import linking from './linking';
import Home from '@/screens/home/home';

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator mode="modal" initialRouteName={routes.HOME}>
    {/* <Stack.Screen
        name={'BottomTabs'}
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      /> */}
    <Stack.Screen name={routes.HOME} component={Home} />
  </Stack.Navigator>
);

const Navigation: React.FC = () => (
  <NavigationContainer linking={linking}>
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={{backgroundColor: Colors.lighter}}
      />
      <StackNavigator />
    </View>
  </NavigationContainer>
);

export default Navigation;
