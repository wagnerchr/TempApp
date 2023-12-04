import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface TempInfoProps {
  name: string;
  logo: ImageSourcePropType;
  value: string;
}

export const TempInfo: React.FC<TempInfoProps> = ({ name, logo, value }) => {
  const logoSource = typeof logo === 'string' ? { uri: logo } : logo;

  return (
    <View >
      {/* <LinearGradient
      colors={['rgba(234, 234, 234, 0.06)', 'rgba(234, 234, 234, 0.00)']}
      style={styles.container}
    > */}
      <Image source={logoSource} />
      <Text >{name}</Text>
      <Text >{value}</Text>
    {/* </LinearGradient> */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  }
});