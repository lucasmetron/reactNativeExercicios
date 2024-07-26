import React from 'react';
import {Button, View} from 'react-native';

const components = () => {
  function exec() {
    console.warn('exec');
  }

  return (
    <View>
      <Button title="Executar" onPress={exec} />
    </View>
  );
};

export default components;
