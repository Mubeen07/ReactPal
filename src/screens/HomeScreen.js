import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ScreenContainer} from '../components';
import {SvgIcons} from '../../resources/icons';
import Images from '../../resources/images';

const styles = StyleSheet.create({
  stretch: {
    resizeMode: 'cover',
    width: 240,
    height: 125,
    marginTop: 180,
  },
  container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  centerAlign: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

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

const socialmediastyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  icon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
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

const SocialPlatforms = ({SvgIcons}) => {
  const {EmailIcon, LinkedInIcon, TwitterIcon, FBIcon} = SvgIcons;
  return (
    <View style={socialmediastyles.container}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.3,
          justifyContent: 'space-evenly',
        }}>
        <Image style={socialmediastyles.icon} source={FBIcon} />
        <Image style={socialmediastyles.icon} source={LinkedInIcon} />
        <Image style={socialmediastyles.icon} source={TwitterIcon} />
        <Image style={socialmediastyles.icon} source={EmailIcon} />
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [imageOpacity, setImageOpacity] = useState(1);
  return (
    <ScreenContainer>
      <Header />
      <View>
        <View style={styles.centerAlign}>
          <Text style={{fontSize: 20, fontWeight: 'bold', left: 20, top: 5}}>
            Mubeen Ahmed
          </Text>
          <Text
            style={{fontSize: 14, fontStyle: 'italic', left: 5, color: 'grey'}}>
            Software Engineer
          </Text>
        </View>
        <SocialPlatforms SvgIcons={SvgIcons} />
      </View>
      <RoundProfileImage imageSource={true} imageOpacity={imageOpacity} />
      <ScrollView
        onScroll={(e) => {
          setImageOpacity((100 - e.nativeEvent.contentOffset.y) / 100);
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export {HomeScreen};
