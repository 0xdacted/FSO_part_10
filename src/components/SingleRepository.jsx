import React from 'react';
import { useParams } from 'react-router-native';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { SINGLE_REPOSITORY } from '../graphql/queries';

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} single={true} />
};

const ReviewItem = ({ review }) => {
  return (
    <View>
      <View>
        <Text>{review.node.rating}</Text>
      </View>
      <View>
        <Text>
          {review.node.user.username}
        </Text>
        <Text>
          {review.node.createdAt}
        </Text>
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

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
    />
  );
};

export default SingleRepository;
