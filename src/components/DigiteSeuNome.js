import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const DigiteSeuNome = () => {
  const [nome, setNome] = useState('teste');
  return (
    <View>
      <Text>Input: {nome}</Text>
      <TextInput
        value={nome}
        placeholder="Digite algum valor"
        onChangeText={value => setNome(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DigiteSeuNome;
