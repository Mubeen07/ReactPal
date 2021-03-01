import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

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

const TouchableIcon = ({iconSource, onPress}) => (
  <TouchableOpacity
    style={{padding: 5, borderWidth: 1, borderColor: Colors.black}}
    onPress={onPress}>
    <Image style={socialmediastyles.icon} source={iconSource} />
  </TouchableOpacity>
);

const SocialPlatforms = () => {
  const handlePress = (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    });
  };

  const {EmailIcon, LinkedInIcon, TwitterIcon, FBIcon} = SvgIcons;
  return (
    <View style={socialmediastyles.container}>
      <View style={socialmediastyles.innerContainer}>
        <TouchableIcon
          iconSource={FBIcon}
          onPress={() =>
            handlePress(`https://www.facebook.com/05.mubeeen.ahmed`)
          }
        />
        <TouchableIcon
          iconSource={LinkedInIcon}
          onPress={() =>
            handlePress(`https://www.linkedin.com/in/mubeen-ahmed-7164605a/`)
          }
        />
        <TouchableIcon
          iconSource={TwitterIcon}
          onPress={() => handlePress(`https://twitter.com/Mubeen38794867`)}
        />
        <TouchableIcon
          iconSource={EmailIcon}
          onPress={() =>
            handlePress(
              `mailto:mubeeen.ahmed@gmail.com?subject=Greetings!&body=Hey, How are you doing?`,
            )
          }
        />
      </View>
    </View>
  );
};

export {SocialPlatforms};
