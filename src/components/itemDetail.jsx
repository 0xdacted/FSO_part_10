import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemDetails: {
    flexDirection: 'column',
    alignItems: 'center', 
    margin: 10, 
  },
  itemCount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemTitle: {
    color: 'gray',
    fontSize: 16,
    marginTop: 5, 
  },
});

const formatCount = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
};


const ItemDetail = ({ count, title = (x) => x }) => {
  return (
    <View style={styles.itemDetails}>
      <Text style={styles.itemCount}>{formatCount(count)}</Text>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
};

export default ItemDetail;
