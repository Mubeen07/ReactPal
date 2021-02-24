import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

import {SvgIcons} from '../../resources/icons';
import {Colors} from '../../resources/theme/colors';

const socialmediastyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'space-between',
    marginLeft: 40,
    padding: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
  },
});

const TouchableIcon = ({iconSource}) => (
  <TouchableOpacity
    style={{padding: 5, borderWidth: 1, borderColor: Colors.black}}>
    <Image style={socialmediastyles.icon} source={iconSource} />
  </TouchableOpacity>
);

const SocialPlatforms = () => {
  const {EmailIcon, LinkedInIcon, TwitterIcon, FBIcon} = SvgIcons;
  return (
    <View style={socialmediastyles.container}>
      <View style={socialmediastyles.innerContainer}>
        <TouchableIcon iconSource={FBIcon} />
        <TouchableIcon iconSource={LinkedInIcon} />
        <TouchableIcon iconSource={TwitterIcon} />
        <TouchableIcon iconSource={EmailIcon} />
      </View>
    </View>
  );
};

export {SocialPlatforms};
