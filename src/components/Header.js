import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Welcome to ReactPal</Text>
    </View>
  );
};

export {Header};
