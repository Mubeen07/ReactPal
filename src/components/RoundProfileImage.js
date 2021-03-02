import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, View, Animated} from 'react-native';
import Images from '../../resources/images';

const profilestyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -30,
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
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
  },
});

const RoundProfileImage = ({imageSource, imageOpacity}) => {
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animStyle = {
    transform: [{translateY: imageOpacity * -1}],
    opacity: imageOpacity < 0 ? imageOpacity * -0.05 : imageOpacity,
  };

  useEffect(() => {
    moveBall();
  }, [imageOpacity]);
  console.log({imageOpacity});
  return (
    imageSource && (
      <Animated.View style={[profilestyles.container, animStyle]}>
        <Image style={profilestyles.image} source={Images.PROFILE_IMAGE} />
      </Animated.View>
    )
  );
};
export {RoundProfileImage};
