import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Dummy from '../screens/Dummy';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Dummy" component={Dummy} />
    </Tab.Navigator>
  );
};

export default BottomTab;

