import {useEffect, useState} from 'react';
import {LogBox, SafeAreaView, StyleSheet, Text} from 'react-native';
import TrackPlayer, {State} from 'react-native-track-player';
import AudioController from '../components/AudioController';
import MiniPlayer from '../components/MiniPlayer';
import NewProgressBar from '../components/NewProgressBars';
import {setupTrackPlayer, trackPlayerInit} from '../utils/TrackPlayerFunction';

const MainScreen = () => {
  LogBox.ignoreAllLogs(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [alreadyListen, setAlreadyListen] = useState(0);

  async function checkPlaybackState() {
    const playbackState = await TrackPlayer.getPlaybackState();
    const playerState = playbackState.state;

    switch (playerState) {
      case State.Playing:
        console.log('The player is currently playing.');
        break;
      case State.Paused:
        console.log('The player is currently paused.');
        break;
      case State.Stopped:
        console.log('The player is currently stopped.');
        break;
      case State.Buffering:
        console.log('The player is buffering.');
        break;
      case State.Loading:
        console.log('The player is loading.');
        break;
      case State.Ended:
        console.log('Playback has ended.');
        break;
      case State.None:
        console.log('No media is currently loaded.');
        break;
      case State.Ready:
        console.log('The player is ready to start playing.');
        break;
      case State.Error:
        console.log('The player encountered a playback error.');
        break;
      default:
        console.log('Unknown state.');
        break;
    }
  }
  useEffect(() => {
    const startPlayer = async () => {
      try {
        await trackPlayerInit();
        checkPlaybackState();
        await setupTrackPlayer(
          `https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3`,
        );
      } catch (error) {
        console.log('Error in track Player initialization', error);
        1;
      }
    };
    startPlayer();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <NewProgressBar
        color={'blue'}
        isAudioPlaying={isAudioPlaying}
        alreadyListen={alreadyListen}
        setAlreadyListen={setAlreadyListen}
        AlreadyListenColor={'pink'}
        remainingColor={'green'}
      />
      <AudioController
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />

      {/* <MiniPlayer
      // setIsAudioPlaying={setIsAudioPlaying}
      // isAudioPlaying={isAudioPlaying}
      /> */}
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
