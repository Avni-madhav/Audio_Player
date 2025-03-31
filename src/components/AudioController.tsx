import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {Event, useProgress} from 'react-native-track-player';
import {font, spacing} from '../styles/GlobalSizes';
import {
  pauseSound,
  playingSound,
  playRewind,
  seekTo,
} from '../utils/TrackPlayerFunction';

interface AudioControllerProps {
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const AudioController: React.FC<AudioControllerProps> = props => {
  const {position, duration} = useProgress();

  useEffect(() => {
    // Function to handle the playback-queue-ended event
    const handlePlaybackQueueEnded = () => {
      // props.setIsAudioPlaying(false);
    };

    // Add the event listener
    const playbackQueueEndedListener = TrackPlayer.addEventListener(
      'playback-queue-ended' as Event,
      handlePlaybackQueueEnded,
    );

    // Clean up the event listener on component unmount
    return () => {
      playbackQueueEndedListener.remove();
    };
  }, []);

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

  const Backward = async () => {
    playRewind();
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => seekTo(0)} style={styles.buttton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handlePlayPause();
        }}
        style={styles.buttton}>
        <View style={styles.buttonView}>
          {!props.isAudioPlaying ? <Text>Play</Text> : <Text>Pause</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Backward()} style={styles.buttton}>
        <Text>Forw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AudioController;

const styles = StyleSheet.create({
  rewindIcon: {
    height: 28,
    width: 28,
  },
  forwardIcon: {
    height: 30,
    width: 30,
  },
  subTitle: {
    height: 22,
    width: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playIcon: {
    left: 3,
    height: 30,
    width: 30,
  },
  pauseIcon: {
    height: 30,
    width: 30,
  },
  buttton: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProps: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  contentContainerStyle: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
    marginBottom: 6,
  },
  speedView: {
    width: '100%',
    position: 'absolute',
    bottom: 15,
    margin: 4,
    alignItems: 'center',
  },
  speedtxt: {
    color: 'white',
    fontFamily: font.family.Meri_light,
  },
  selectedSpeed: {
    fontFamily: font.family.Meri_regular,
    fontSize: font.size.md,
  },
  speedTxtView: {marginVertical: 4},
  buttonView: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    width: '100%',
    height: 1,
    color: 'white',
  },
  cross: {
    // flex:1,
    flexDirection: 'row',
    height: 30,
    width: 30,
    tintColor: 'black',
    alignSelf: 'flex-end',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingBottom: spacing.xl,
  },
  modalText: {
    marginBottom: 15,
    fontSize: font.size.lg,
    fontFamily: font.family.Meri_bold,
    alignSelf: 'center',
    color: 'black',
  },
  modalSubText: {
    fontSize: font.size.base,
    fontFamily: font.family.Meri_light,
    alignSelf: 'center',
    lineHeight: 22,
    color: 'black',
  },
});
