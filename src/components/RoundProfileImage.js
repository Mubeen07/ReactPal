import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, Easing, Animated} from 'react-native';
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
    backgroundColor: 'transparent',
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

const RoundProfileImage = ({ImageSource, ImageOpacity}) => {
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce, // Springy
    }).start();
  };

  const animStyle = {
    transform: [
      {translateY: ImageOpacity < 0 ? ImageOpacity * -1 : ImageOpacity},
    ],
    // opacity:
    //   ImageOpacity <= 0 && ImageOpacity >= -0.3
    //     ? 0.4
    //     : ImageOpacity <= 0
    //     ? ImageOpacity * -0.9
    //     : ImageOpacity,
  };

  useEffect(() => {
    moveBall();
  }, [ImageOpacity]);

  return (
    ImageSource && (
      <Animated.View style={[profilestyles.container, animStyle]}>
        <Image style={profilestyles.image} source={Images.PROFILE_IMAGE} />
      </Animated.View>
    )
  );
};
export {RoundProfileImage};
