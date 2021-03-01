import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Images from '../../resources/images';

const profilestyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 150,
    flex: 1,
    left: 25,
  },
  image: {
    resizeMode: 'cover',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white',
  },
});

const RoundProfileImage = ({imageSource, imageOpacity}) =>
  imageSource && (
    <View
      style={{
        ...profilestyles.container,
        opacity: imageOpacity,
      }}>
      <Image style={profilestyles.image} source={Images.PROFILE_IMAGE} />
    </View>
  );

export {RoundProfileImage};
