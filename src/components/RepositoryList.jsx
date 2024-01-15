import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  messageText: {
    textAlign: 'center',
    margin: 10,
  },

});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text style={styles.messageText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.messageText}>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />} //
      keyExtractor={item => item.id}
    />
  );
};


export default RepositoryList;