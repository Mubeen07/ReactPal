import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScreenContainer} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
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
      <ScreenContainer>
        <View style={styles.container}>
          <Text style={{color: 'black', fontSize: 18}}>
            Welcome to react native boilerplate
          </Text>
        </View>
      </ScreenContainer>
    );
  }
}

export default Splash;
