import React from 'react';
import {StyleSheet, View} from 'react-native';

const Quadrado = ({cor, width = 50, height = 50}) => {
  return (
    <View
      style={{
        ...styles.container,
        width: width,
        height: height,
        backgroundColor: cor || 'black',
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default Quadrado;
