import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Badge} from 'native-base';

import {BoldText} from './common/BoldText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

const TechTags = () => (
  <View
    style={{
      flexDirection: 'column',
      marginHorizontal: 20,
    }}>
    <BoldText text={`#Tags`} />
    <View style={styles.container}>
      <Badge warning>
        <Text>javascript</Text>
      </Badge>
      <Badge success>
        <Text>react-native</Text>
      </Badge>
      <Badge>
        <Text>reactjs</Text>
      </Badge>
      <Badge primary>
        <Text>redux</Text>
      </Badge>
      <Badge info>
        <Text>.net</Text>
      </Badge>
    </View>
  </View>
);

export {TechTags};
