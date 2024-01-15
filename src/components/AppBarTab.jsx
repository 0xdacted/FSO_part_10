import { View, StyleSheet, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const AppBarTab = ({ tabText }) => {
  return (
    <View>
      <Pressable>
        <Text style={styles.text}>{tabText}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;

