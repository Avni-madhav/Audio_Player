import React from 'react';
import {LogBox} from 'react-native';
import BottomTab from './src/navigation/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import MiniPlayer from './src/components/MiniPlayer';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <BottomTab />

      <MiniPlayer />
    </NavigationContainer>
  );
};

export default App;
