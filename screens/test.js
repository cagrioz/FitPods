import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';
import { globalStyles } from '../styles/global';
import { Audio } from 'expo-av';
import { AntDesign, Entypo } from '@expo/vector-icons';

 
export default function TestScreen() {

  const soundObject = new Audio.Sound();
  const [checkFitting, setFitting] = useState(false);

  const leftRand = Math.floor(Math.random() * 10) + 1 ;
  const rightRand = Math.floor(Math.random() * 10) + 1 ;
  console.log(leftRand, rightRand);

  const playAudio = async () => {
    try {
      await soundObject.loadAsync(require('../assets/signal.mp3'));
      await soundObject.playAsync();

      setTimeout(() => {setFitting(true)}, 3000);

    } catch (error) {
      setFitting(false);
    }
    setFitting(false);
  }


  const isFittingLeft = () => {
    if (checkFitting) {
      if (leftRand >= 4) {
        return (
          <View style={styles.feedback}>
            <Text>Left is Fitting!</Text>
            <AntDesign style={styles.icon} name="checkcircle" size={24} color="green" />
          </View>
        );
      } else {
        return (
          <View style={styles.feedback}>
            <Text>Not Fitting!</Text>
            <Entypo name="circle-with-cross" size={24} color="red" />
          </View>
        );
      }
    }
  } 
  
  const isFittingRight = () => {
    if (checkFitting) {
      if (rightRand >= 4) {
        return (
          <View style={styles.feedback}>
            <Text>Right is Fitting!</Text>
            <AntDesign style={styles.icon} name="checkcircle" size={24} color="green" />
          </View>
        );
      } else {
        return (
          <View style={styles.feedback}>
            <Text>Not Fitting!</Text>
            <Entypo name="circle-with-cross" size={24} color="red" />
          </View>
        );
      }
    }
  }

  return (
    <View style={globalStyles.layout}>
      <View style={styles.testContainer}>
        <View style={styles.leftFit}>
          {isFittingLeft()}
        </View>
        <Image resizeMode='contain' style={styles.productImg} source={require('../assets/pods.png')} />
        <View style={styles.rightFit}>
          {isFittingRight()}
        </View>
      </View>

      <TouchableOpacity style={globalStyles.btn} onPress={playAudio}>
        <Text style={globalStyles.btnText}>TEST NOW!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  productImg: {
    width: 300,
    height: 225
  },
  testContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  leftFit: {
    position: 'absolute',
    left: -35
  },
  rightFit: {
    position: 'absolute',
    right: -35,
    top: 150
  },
  feedback: {
    alignItems: 'center'
  },
  icon: {
    marginTop: 10
  }
});
