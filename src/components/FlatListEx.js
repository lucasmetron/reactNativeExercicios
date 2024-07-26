import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {products} from './products';

const FlatListEx = () => {
  function renderItem(value) {
    return <Text>{`${value.id}) ${value.name} por R$ ${value.price}`}</Text>;
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={i => i.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FlatListEx;
