import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

const Flexbox = () => {
  return (
    <View style={styles.FlexV1}>
      <Quadrado cor="gray" />
      <Quadrado cor="blue" />
      <Quadrado cor="green" />
      <Quadrado cor="red" />
      <Quadrado cor="yellow" />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV1: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Flexbox;
