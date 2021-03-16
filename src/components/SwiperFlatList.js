import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const Swiper = ({ItemList}) => (
  <View style={styles.container}>
    <SwiperFlatList
      //   autoplay
      //   autoplayDelay={2}
      //   autoplayLoop
      index={0}
      showPagination
      data={colors}
      renderItem={({item}) => (
        <View style={[styles.child, {backgroundColor: item}]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
);

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  child: {width: width * 0.9, justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
});

export {Swiper};
