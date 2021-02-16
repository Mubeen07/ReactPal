import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
// import images from '../../resources/images';

const styles = StyleSheet.create({
  stretch: {
    resizeMode: 'cover',
    width: 212,
    height: 110
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const LogoComponent = ({ isGreen = false }) => {
  return (
    <View style={styles.container}>
      {
        // <Image style={styles.stretch} source={isGreen ? images.LOGO_Green : images.LOGO} />
      }
    </View>
  );
};

export { LogoComponent };
