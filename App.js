/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { LoginBackground, LoginLogo } from './assets/index';

export default function App() {
  return (
    <ImageBackground source={LoginBackground} style={styles.background}>
      <StatusBar style={'light'} />
      <View style={styles.container}>
        <Image resizeMode='contain' source={LoginLogo} style={styles.logoContainer} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    bottom: 150
  }
});
