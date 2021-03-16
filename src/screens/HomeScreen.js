import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ScreenContainer,
  Header,
  RoundProfileImage,
  SocialPlatforms,
  TechTags,
  WorkExperinceCard,
  Swiper,
} from '../components';
import {ItalicText} from '../components/common';

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

const HomeProfile = ({ImageOpacity}) => (
  <View
    style={{
      backgroundColor: Colors.white,
      flex: 0.2,
      flexDirection: 'column',
      paddingBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    }}>
    <View style={styles.centerAlign}>
      <Text style={{fontSize: 20, fontWeight: 'bold', left: 20, top: 5}}>
        Mubeen Ahmed
      </Text>
      <ItalicText text={'Software Engineer'} left={4} />
    </View>
    <RoundProfileImage ImageSource={true} ImageOpacity={ImageOpacity} />
    <SocialPlatforms />
    <TechTags />
  </View>
);

const HomeScreen = ({navigation}) => {
  const [imageOpacity, setImageOpacity] = useState(1);
  return (
    <ScreenContainer>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Header />
        <HomeProfile ImageOpacity={imageOpacity} />
        <View style={{flex: 0.6}}>
          <ScrollView
            onScroll={(e) => {
              setImageOpacity((100 - e.nativeEvent.contentOffset.y) / 100);
            }}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={{paddingHorizontal: 20}}>
                <Swiper />
                <WorkExperinceCard />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
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
        </View>
      </View>
    </ScreenContainer>
  );
};

export {HomeScreen};
