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
    width: '100%',
    height: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'black',
  },
});

export default Flexbox;
