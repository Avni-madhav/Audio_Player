import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Dummy from '../screens/Dummy';
import MainScreen from '../screens/MainScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="Dummy" component={Dummy} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
