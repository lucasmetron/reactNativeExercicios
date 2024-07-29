import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.FlexV4}>
      <View style={styles.v0} />
      <View style={styles.v1} />
      <View style={styles.v2} />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: 'black',
  },

  v0: {
    height: 100,
    backgroundColor: 'gray',
  },

  v1: {
    flex: 8,
    backgroundColor: 'pink',
  },
  v2: {
    flex: 2,
    backgroundColor: 'purple',
  },
});

export default Flexbox;
