import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MiniPlayer from '../components/MiniPlayer';

const Dummy = () => {
  return (
    <View style={styles.container}>
      <Text>Dummy</Text>
    </View>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
