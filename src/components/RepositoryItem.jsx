import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { useNavigate } from 'react-router-native';
import ItemDetail from './itemDetail';


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
  githubButton: {
    backgroundColor: '#0366d6', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginTop: 10, 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  buttonContainer: {
    justifyContent: 'center', 
  },
});

const RepositoryItem = ({ item, single }) => {
  const navigate = useNavigate()

  const handleGithubPress = () => {
    Linking.openURL(item.url);
  };

  const handleItemPress = () => {
    navigate(`/repository/${item.id}`);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <Pressable onPress={handleItemPress}>
        <ScrollView>
          <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.fullName}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.language}>{item.language}</Text>
            </View>
          </View>
          <View style={styles.itemDetailsContainer}>
            <ItemDetail count={item.stargazersCount} title="Stars" />
            <ItemDetail count={item.forksCount} title="Forks" />
            <ItemDetail count={item.reviewCount} title="Reviews" />
            <ItemDetail count={item.ratingAverage} title="Rating" />
          </View>
        </ScrollView>
      </Pressable>
        {single && 
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleGithubPress} style={styles.githubButton}>
            <Text style={styles.buttonText}>View on GitHub</Text>
          </Pressable>
        </View>
        }
    </View>
  );
};

export default RepositoryItem;
