import React from 'react';
import { useParams } from 'react-router-native';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { SINGLE_REPOSITORY } from '../graphql/queries';

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} single={true} />
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewItem}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.node.rating}</Text>
      </View>
      <View style={styles.reviewTextContainer}>
        <View style={styles.userAndDateContainer}>
          <Text style={styles.username}>
            {review.node.user.username}
          </Text>
          <Text style={styles.createdAt}>
            {review.node.createdAt}
          </Text>
        </View>
        <Text>
          {review.node.text}
        </Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(SINGLE_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
  },
  reviewItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    flexDirection: 'row', // Align children in a row
    borderBottomWidth: 1,
    borderColor: '#e1e4e8',
  },
  ratingContainer: {
    borderWidth: 2,
    borderColor: '#0366d6',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center vertically within the column
  },
  userAndDateContainer: {
    marginBottom: 5, // Space between the date and the review text
  },
  username: {
    fontWeight: 'bold',
  },
  createdAt: {
    color: '#586069',
    fontSize: 12,
    marginBottom: 5,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
});

export default SingleRepository;
