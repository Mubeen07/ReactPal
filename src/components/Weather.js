import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
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

const Weather = ({weather, temparature}) => {
  return (
    <View style={styles.weatherContainer}>
      <View>
        <Text style={styles.tempText}>Temperature</Text>
        <Text style={styles.tempText}>{temparature.temp}˚</Text>
        <Text style={{...styles.subtitle, fontStyle: 'italic'}}>
          {`Feels like ${temparature?.feels_like}˚`}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>{weather?.main || 'So Sunny'}</Text>
        <Text style={styles.subtitle}>
          {weather?.description || 'It hurts my eyes!'}
        </Text>
      </View>
    </View>
  );
};

export {Weather};
