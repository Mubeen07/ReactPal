import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {ScreenContainer, Weather} from '../components';

const API_KEY = `5d82ed345c07f398eddbff4c7f6b3fe0`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  tempText: {
    fontSize: 48,
    color: '#fff',
  },
  title: {
    fontSize: 48,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});

const fetchWeather = (lat = 33, lon = 73) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`,
  )
    .then((res) => res.json())
    .then((json) => {
      return {
        weather: json.weather[0],
        temparature: json.main,
      };
    })
    .catch((e) => {
      return e;
    });
};

// Class Component
class Splash extends Component {
  state = {
    WeatherDetail: null,
    isLoading: true,
  };

  componentDidMount() {
    const {navigation} = this.props;
    fetchWeather().then((res) => {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 11000);
      this.setState({WeatherDetail: res, isLoading: false});
    });
  }

  render() {
    const {WeatherDetail, isLoading} = this.state;
    return (
      <ScreenContainer>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator
              animating={isLoading}
              size={60}
              color={'white'}
            />
          ) : (
            <Weather
              weather={WeatherDetail?.weather}
              temparature={WeatherDetail?.temparature}
            />
          )}
        </View>
      </ScreenContainer>
    );
  }
}

export default Splash;
