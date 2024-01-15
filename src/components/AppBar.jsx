import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <AppBarTab tabText={'Repositories'} route={'/'}/>
      <AppBarTab tabText={'Sign In'} route={'/signIn'} />
    </View>
  );
};

export default AppBar;