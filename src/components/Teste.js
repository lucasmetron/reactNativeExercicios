import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const renderItem = ({item, index, separators}) => {
  return (
    <TouchableHighlight
      key={item.id}
      onPress={() => console.log(item.title)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
      underlayColor="lightgray">
      <View style={styles.item}>
        <Text>
          {index + 1}. {item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const MyList = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyList;
