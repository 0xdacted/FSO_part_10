import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  name: {
    fontWeight: 'bold',
  },
  language: {
    color: 'blue',
    padding: 5,
    backgroundColor: 'lightgray',
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
