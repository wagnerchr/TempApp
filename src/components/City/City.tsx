import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const customFonts = require('../../../expo-fonts');

interface ICity {
  name: string;
  temperature: string;
  observation: string;
  maxTemp: string;
  minTemp: string;
}

export const City: React.FC<ICity> = ({ name, temperature, observation, maxTemp, minTemp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{name}</Text>
      <View style={styles.cityTemperatureView}>
        <Text style={styles.cityTemperature}>{temperature}</Text>
        <Text style={styles.span}>º</Text>
      </View>
      <Text style={styles.observation}>{observation}</Text>
      <Text style={styles.maxMin}>•Máx.: {maxTemp}° Mín.: {minTemp}°</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  cityName: {
    color: '#FFF',
    fontFamily: customFonts['Jaldi-Regular'],
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.024, 
  },

  cityTemperatureView: {
    display: 'flex',
    flexDirection: 'row',
  },

  cityTemperature: {
    color: '#FFF',
    textBreakStrategy: 'simple',
    fontFamily: customFonts['PlusJakartaSans-Bold'],
    fontSize: 64,
    fontStyle: 'normal',
    fontWeight: '200',
    letterSpacing: 0.064,
    margin: 0,
    textAlign: 'center',
    alignItems: 'center'
  },
  span: {
    color: '#FFF',
    fontFamily: customFonts['PlusJakartaSans-Bold'],
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '200',
    letterSpacing: 0.064,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 7,
    paddingLeft: 5,
  },

  observation: {
    color: '#FFF',
    fontFamily: customFonts['Roboto-Regular'],
    fontSize: 15,
    fontWeight: '500',
    // lineHeight: 18, 
    letterSpacing: 0.015,
  },

  maxMin:{
    color: '#FFF',
    fontFamily: customFonts['Roboto'],
    fontSize: 16,
    fontWeight: '500',
    // lineHeight: 20,
    letterSpacing: 0.016,
    margin: 4,
  },


  
});