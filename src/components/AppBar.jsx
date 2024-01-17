import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

import { SIGNED_IN } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const AppBar = () => {
  const { data: userData, loading, error } = useQuery(SIGNED_IN);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

const handleSignOut = async () => {
  console.log('Signing out...');
  try {
    await authStorage.removeAccessToken();
    console.log('Access token removed');
    apolloClient.resetStore();
    console.log('Apollo store reset');
  } catch (error) {
    console.error('Sign out error:', error);
  }
};


  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabText={'Repositories'} route={'/'} />

        {userData && userData.me != null ? (
          <Pressable onPress={() => {
            console.log('Pressable pressed');
            handleSignOut();
          }}>
            <AppBarTab tabText={'Sign Out'} />
          </Pressable>
        ) : (
          <AppBarTab tabText={'Sign In'} route={'/signIn'} />
        )}

      </ScrollView>
    </View>
  );
};

export default AppBar;
