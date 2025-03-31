import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, PanResponder, Animated} from 'react-native';
import {useProgress} from 'react-native-track-player';
import {font, Full_Width, spacing} from '../styles/GlobalSizes';
import {seekTo} from '../utils/TrackPlayerFunction';
import {convertSecondsToMinutes} from '../utils/commonFunctions';

const NewProgressBar = () => {
  const [value, setValue] = useState<number>(0);
  const {position, duration} = useProgress();
  const pan = useRef(new Animated.ValueXY()).current;
  const min = 0,
    step = 1,
    max = 100;
  const width = Full_Width - 24;
  const newPosition = (position / duration) * 100;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      let newValue = min + (gesture.moveX / width) * (max - min);
      newValue = Math.round(newValue / step) * step;
      newValue = Math.max(min, Math.min(newValue, max));
      const pos = (duration * newValue) / 100;
      seekTo(pos);
      setValue(newValue);
      pan.x.setValue(((newValue - min) / (max - min)) * width);
    },
    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
  });

  useEffect(() => {
    if (duration > 0) {
      Animated.timing(pan, {
        toValue: (position / duration) * width,
        duration: 100,
        useNativeDriver: false,
      }).start();
      setValue(newPosition);
    }
  }, [position, duration]);

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.track, {width, backgroundColor: 'gray'}]} />
        <View
          style={[
            styles.track,
            {
              width: `${value}%`,
              backgroundColor: 'green',
            },
          ]}
        />
        <View
          style={[
            styles.track,
            {
              width: `${100 - value}%`,
              left: `${value}%`,
              backgroundColor: 'gray',
            },
          ]}
        />
        <Animated.View
          style={[styles.thumb, {transform: [{translateX: pan.x}]}]}
          {...panResponder.panHandlers}>
          <View style={styles.gradientThumb} />
        </Animated.View>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.timeTxt}>{convertSecondsToMinutes(position)}</Text>
        <Text style={styles.timeTxt}>
          {duration === 0 ? null : convertSecondsToMinutes(duration)}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 30,
    width: Full_Width - 24,
  },
  track: {
    height: 10,
    position: 'absolute',
    borderRadius: 100,
  },
  thumb: {
    width: 18,
    height: 18,
    borderRadius: 10,
    position: 'absolute',
    left: -5,
    backgroundColor: 'red',
  },
  valueText: {
    marginTop: 30,
    fontSize: 16,
  },
  gradientThumb: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  timeView: {
    marginTop: spacing.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeTxt: {
    color: 'black',
    fontFamily: font.family.Meri_light,
    fontSize: font.size.mini,
  },
});

export default NewProgressBar;
