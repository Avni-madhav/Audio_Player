import TrackPlayer, {Event} from 'react-native-track-player';
// https://therohanbhatia.com/blog/music-player-app-using-react-native-hooks/
module.exports = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteJumpForward, async () => {
    let newPosition = await TrackPlayer.getPosition();
    let duration = await TrackPlayer.getDuration();
    newPosition += 10;
    if (newPosition > duration) {
      newPosition = duration;
    }
    TrackPlayer.seekTo(newPosition);
  });

  TrackPlayer.addEventListener(Event.RemoteJumpBackward, async () => {
    let newPosition = await TrackPlayer.getPosition();
    newPosition -= 10;
    if (newPosition < 0) {
      newPosition = 0;
    }
    TrackPlayer.seekTo(newPosition);
  });
};
