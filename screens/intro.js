import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function IntroScreen({ navigation }) {
  return (
    <View style={globalStyles.layout}>
      <Image resizeMode='contain' style={styles.productImg} source={require('../assets/airpodspro.png')} />
      <Text style={[globalStyles.heading, globalStyles.introHeading]}>Fitting Test For Your AirPods Pro's</Text>
      <Text style={globalStyles.paragraph}>AirPods Pro ear tips should create a full seal when located in your earholes, for the best performance.</Text>
      
      <TouchableOpacity style={globalStyles.btn} onPress={() => navigation.navigate('Test')}>
        <Text style={globalStyles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productImg: {
    width: 248,
    height: 210
  }
});
