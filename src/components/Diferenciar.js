import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import If from './If';

const Diferenciar = () => {
  console.warn(Platform.OS);
  return (
    <View>
      <Text>
        {Platform.OS === 'android' && 'Android'}
        {Platform.OS === 'ios' && 'IOS'}

        <If show={true}>
          <Text>teste</Text>
        </If>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Diferenciar;
