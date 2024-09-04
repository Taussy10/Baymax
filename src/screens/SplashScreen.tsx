import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../utils/Constants'
import { navigate } from '../utils/NavigationUtils'

// for navigation you can try 3 methods
// 1. By passing props 
// 2. By using useNavigation Hook
// 3. By creating custom hook so that you can write less code in the main page and it's a best method


const SplashScreen:FC = () => {
  return (
   <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={()=> navigate("BaymaxScreen") }>

    <Text>Hello</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1 , 
    justifyContent:'center',
    alignItems:'center',
    padding: 10,
    // backgroundColor: Colors.primary
    backgroundColor: "pink"
  }
  })