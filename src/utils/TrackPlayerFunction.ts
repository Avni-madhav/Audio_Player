import TrackPlayer, {Capability, TrackType} from 'react-native-track-player';

export const trackPlayerInit = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.JumpForward,
        Capability.JumpBackward,
        Capability.Stop,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.JumpForward,
        Capability.JumpBackward,
      ],
      forwardJumpInterval: 15, // Interval for forward jump in seconds
      backwardJumpInterval: 15, // Interval for backward jump in seconds
    });
    return true;
  } catch (error) {
    console.error('Error initializing TrackPlayer:', error);
    return false;
  }
};

// Set track playre with sound
export const setupTrackPlayer = async (url: string) => {
  try {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: Date.now(),
      url: url,
      type: TrackType.Default,
      title: 'Madhav',
      album: 'madhav',
      artist: 'Madhav',
    });
    // await TrackPlayer.play();
  } catch (error) {}
};

export const playingSound = async () => {
  try {
    await TrackPlayer.play();
  } catch (error) {}
};

export const pauseSound = async () => {
  try {
    await TrackPlayer.pause();
  } catch (error) {}
};

// Forward 15 sec
export const playForward = async () => {
  let newPosition = await getPosition();
  let duration = await TrackPlayer.getDuration();

  newPosition += 15;
  if (newPosition > duration) {
    newPosition = duration;
  }
  TrackPlayer.seekTo(newPosition);
};

// rewind 15 second
export const playRewind = async () => {
  let newPosition = await getPosition();
  newPosition -= 15;
  if (newPosition < 0) {
    newPosition = 0;
  }
  TrackPlayer.seekTo(newPosition);
};

// rewind 15 second
export const seekTo = async value => {
  TrackPlayer.seekTo(value);
};

// Function to change playback speed
export const changePlaybackSpeed = async speed => {
  try {
    await TrackPlayer.setRate(speed);
  } catch (error) {
    console.error('Error setting playback speed:', error);
  }
};

// Reset player
export const destroyTrackPlayer = () => {
  TrackPlayer.reset();
};

// Get duration
export const getPosition = async () => {
  let position = await TrackPlayer.getPosition();
  return position;
};

// Function to get the current speed of the track
export const getCurrentSpeed = async () => {
  try {
    const rate = await TrackPlayer.getRate();
    console.log('Current playback speed:', rate);
    return rate; // Playback rate (speed)
  } catch (error) {
    console.error('Error getting current speed:', error);
  }
};
