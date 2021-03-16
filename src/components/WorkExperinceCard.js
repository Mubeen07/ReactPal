import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {BoldText, ItalicText, NormalText} from './common';
import {Colors} from '../../resources/theme/colors';
import Images from '../../resources/images';

const NovaExpText = `Worked as a Full stack engineer, mainly on Frontend (ReactJS, React Native, Redux) and on Backend (.NET & .NET Core WebAPIs, MySQL). also work on Migrations, Scaffolding, Windows Services

Involved in scrum ceremonies, closely worked with Founders, Product Owners and Cheif Engineer.

Major Technologies: JavaScript, ES6, ReactJS, React Native, React Hooks, Redux, C# .Net, .Net Core, RESTful API, LinQ, EF, Windows Service

Major Tools: Visual Code, Visual Studio, Navicat, Git, SourceTree, TortoiseHG, Android Studio, XCode`;

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    flexDirection: 'column',
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.backgroundColor,
    backgroundColor: Colors.backgroundColorOpacity,
  },
  imageContainer: {
    flex: 0.25,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    backgroundColor: 'transparent',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  designationContainer: {
    flex: 0.7,
    flexDirection: 'column',
  },
});

const WorkExperinceCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.imageContainer}>
          <Image source={Images.NOVA_IMAGE} style={styles.image} />
        </View>
        <View style={styles.designationContainer}>
          <BoldText text={'Fullstack Engineer'} />
          <NormalText text={'Nova'} />
          <ItalicText text={'Nov 2014 - Dec 2020'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 6,
        }}>
        <NormalText text={NovaExpText} style={{fontSize: 16}} />
      </View>
    </View>
  );
};

export {WorkExperinceCard};
