import React from 'react';
import { useParams } from 'react-router-native';

import { Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { SINGLE_REPOSITORY } from '../graphql/queries'; 

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(SINGLE_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.repository && <RepositoryItem item={data.repository} single={true} />}
    </View>
  );
};

export default SingleRepository;
