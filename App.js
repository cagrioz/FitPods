import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/appStack';

const getFonts = () => Font.loadAsync({
  'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
  'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf'),
  'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // If fonts are not loaded
  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    );

  // If fonts are loaded
  } else {
    return(
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  productImg: {
    width: 248,
    height: 210
  }
});
