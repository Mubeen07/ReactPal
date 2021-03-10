import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../resources/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.backgroundColor,
    backgroundColor: Colors.backgroundColorOpacity,
  },
});

const WorkExperinceCard = () => {
  return <View style={styles.container}></View>;
};

export {WorkExperinceCard};
