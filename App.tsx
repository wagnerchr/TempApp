import React from 'react';
import { StyleSheet, View } from 'react-native';
import { City } from './src/components/City/City';
import { TempInfo } from './src/components/Temp/TempInfo';
import api from './api.json';

export default function App() {
  return (
    <View style={styles.container}>
      <City 
        name={api.name}
        temperature={api.temperature}
        observation={api.observation}
        maxTemp={api.maxTemp}
        minTemp={api.minTemp}
      />

      <TempInfo
        name={"Vento"}
        logo={require('./assets/icons/Component1.png')}
        value={"21"}
      />
      <TempInfo
        name={"Humidade"}
        logo={require('./assets/icons/Component2.png')}
        value={"18"}
      />
      <TempInfo
        name={"Sensasão"}
        logo={require('./assets/icons/temp.png')}
        value={"18"}
      />
      <TempInfo
        name={"Pressão"}
        logo={require('./assets/icons/cron.png')}
        value={"18"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6976D4', 
    alignItems: 'center',
    paddingTop: 117,
  },


});
