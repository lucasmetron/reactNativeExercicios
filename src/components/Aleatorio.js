import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

function Aleatorio({min, max}) {
  const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <View>
      <Text style={Estilo.fontG}>{`numero entre ele é ${newNumber}`}</Text>
    </View>
  );
}

export default Aleatorio;
