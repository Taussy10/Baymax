 import { StyleSheet, Text, View } from 'react-native'
import React,{useRef , useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../utils/Constants'
import Background from '../components/Baymax/Background'


import { Animated } from 'react-native'
// We are using Animated API of react native
//  https://reactnative.dev/docs/animations

const BaymaxScreen = () => {

  
 

  const blurOpacity = useRef(new Animated.Value(0)).current
// blur current value 0 {0: transparent and 1: opaque}
const startBlur = () =>{
  Animated.timing(blurOpacity,{
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
    // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
  }).start()
}
const removeBlur = () =>{
  Animated.timing(blurOpacity,{
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
    // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
  }).start()
}

useEffect(() => {
  
}, [])


  return (
    <SafeAreaView style={styles.container}>
      <Background blurOpacity={blurOpacity} />
    </SafeAreaView>
  )
}

export default BaymaxScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.secondry,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer:{
    position: 'absolute',

  }
})