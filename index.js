/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {trackPlayerInit} from './src/utils/TrackPlayerFunction';

AppRegistry.registerComponent(appName, () => App);

// Initialize TrackPlayer
async function setupTrackPlayer() {
  try {
    await trackPlayerInit();
    console.log('TrackPlayer initialized successfully.');
  } catch (error) {
    console.error('Error setting up TrackPlayer:', error);
  }
}

setupTrackPlayer();

TrackPlayer.registerPlaybackService(() => require('./trackPlayerServices'));
TrackPlayer.updateOptions({
  stopWithApp: true,
});
