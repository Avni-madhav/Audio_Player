import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useProgress} from 'react-native-track-player';
import {pauseSound, playingSound} from '../utils/TrackPlayerFunction';

const MiniPlayer = (props: any) => {
  const {position, duration} = useProgress();

  const handlePlayPause = () => {
    props.setIsAudioPlaying(!props.isAudioPlaying);
    if (position < duration) {
      if (props.isAudioPlaying) {
        pauseSound();
      } else {
        playingSound();
      }
    }
  };
  return (
    <>
      <TouchableOpacity style={styles.miniPlayerContainer}>
        <Text style={styles.text}>madhav</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            {/* {props?.isAudioPlaying ? 'pause' : 'play'} */}
            play
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  miniPlayerContainer: {
    backgroundColor: '#D3D3D3',
    height: 60,
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 60,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
