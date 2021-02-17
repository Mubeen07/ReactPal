import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Colors} from '../../resources/theme/colors';

const deviceWin = Dimensions.get('window');

const style = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    marginTop: '5%',
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  headerTextStyle: {
    flex: 0.8,
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  stretch: {
    resizeMode: 'contain',
    width: deviceWin.width * 0.9,
    maxHeight: deviceWin.height * 0.9,
  },
  footerContainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-end',
  },
});

const ScreenContainer = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.ScreenContainer}>
        <Body>{children}</Body>
      </View>
    </SafeAreaView>
  );
};

const Body = ({children}) => {
  return <View style={style.bodyContainer}>{children}</View>;
};

// const Header = ({
//   label,
//   wantsBack,
//   navigation,
//   onBackPress,
//   backgroundColor,
// }) => {
//   return (
//     <View style={{...style.headerContainer, backgroundColor: backgroundColor}}>
//       {wantsBack ? (
//         <TouchableOpacity
//           style={style.iconContainer}
//           onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
//           <BackArrow />
//         </TouchableOpacity>
//       ) : null}
//       {label ? (
//         <TangoText
//           text={label}
//           style={{flex: 0.8, fontFamily: NunitoFamily.Bold}}
//         />
//       ) : null}
//     </View>
//   );
// };

// const Footer = () => {
//   return (
//     <View style={style.footerContainer}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingRight: 20,
//         }}>
//       </View>
//     </View>
//   );
// };

export {ScreenContainer};
