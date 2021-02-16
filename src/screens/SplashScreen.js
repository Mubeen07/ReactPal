import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
});

// Class Component
class Splash extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          height: 200,
        }}>
        <Text style={{color: 'black'}}>Engine: Hermes</Text>
      </View>
    );
  }
}

export default Splash;
