import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    backgroundColor: 'white',
    borderBottomWidth: 1, 
    borderBottomColor: '#e1e4e8', 
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center', 
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    flex: 1, 
    paddingLeft: 10,
    justifyContent: 'center', 
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16, 
  },
  description: {
    color: '#586069',
    flexWrap: 'wrap',
    fontSize: 14, 
    paddingTop: 5, 
  },
  language: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 12,
    marginTop: 5, 
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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

const RepositoryItem = ({ item }) => {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.itemDetailsContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemCount}>{formatCount(item.stargazersCount)}</Text>
        <Text style={styles.itemTitle}>Stars</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemCount}>{formatCount(item.forksCount)}</Text>
        <Text style={styles.itemTitle}>Forks</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemCount}>{formatCount(item.reviewCount)}</Text>
        <Text style={styles.itemTitle}>Reviews</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemCount}>{item.ratingAverage}</Text>
        <Text style={styles.itemTitle}>Rating</Text>
      </View>
    </View>
  </View>
);
};

export default RepositoryItem;
