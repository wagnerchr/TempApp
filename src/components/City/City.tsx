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
      <Text style={styles.cityTemperature}>{temperature}<span style={styles.span}>º</span></Text>
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
    lineHeight: 24, 
    letterSpacing: 0.024, 
  },

  cityTemperature: {
    display: 'flex',
    color: '#FFF',
    height: 56,
    fontFamily: customFonts['PlusJakartaSans-Bold'],
    fontSize: 64,
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: 24,
    letterSpacing: 0.064,
    textAlign:'center',
    marginTop: 32,
  },
  span: {
    alignItems: 'center',
    fontFamily: customFonts['PlusJakartaSans-Bold'],
    fontSize: 32, 
    marginTop: -7
  },

  observation: {
    color: '#FFF',
    fontFamily: customFonts['Roboto-Regular'],
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18, 
    letterSpacing: 0.015,
  },

  maxMin:{
    color: '#FFF',
    fontFamily: customFonts['Roboto'],
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.016,
    margin: 4,
  },


  text: {
    height: 88,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
});