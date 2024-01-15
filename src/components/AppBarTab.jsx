import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 12
  }
});

const AppBarTab = ({ tabText, route }) => {
  return (
    <View>
      <Link to={route}>
        <Text style={styles.text}>{tabText}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;

