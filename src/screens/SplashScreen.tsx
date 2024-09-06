import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, Fonts, lightColors } from '../utils/Constants'
import { navigate, resetAndNavigate } from '../utils/NavigationUtils'
import Animated from 'react-native-reanimated'
import { screenHeight, screenWidth } from '../utils/Scaling'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../components/CustomComponents/CustomText'
import LottieView from 'lottie-react-native'


import CustomBanner from '../components/CustomComponents/CustomBanner'

// for navigation you can try 3 methods
// 1. By passing props 
// 2. By using useNavigation Hook
// 3. By creating custom hook so that you can write less code in the main page and it's a best method

const bottomColors = [...lightColors].reverse()

const SplashScreen:FC = () => {
  return (
   <SafeAreaView style={styles.container}>
    {/* <TouchableOpacity onPress={()=> navigate("BaymaxScreen") }> */}
<Animated.View style={styles.imageContainer} >
  <Image source={require("../assets/images/launch.png")} 
  style={styles.img}
  />
</Animated.View>
    {/* </TouchableOpacity> */}

<Animated.View  style={styles.gradientContainer}>
  <LinearGradient colors={bottomColors} style={styles.gradient} >
 <View>

  <View style={styles.textContainer}>
  <CustomText fontSize={34}  fontFamily={Fonts.Theme}  >
    Hellos
    </CustomText>

  <LottieView
  source={require("../assets/animations/sync.json")}
  style={{width:280 , height:100}}
  autoPlay={true}
  loop
   />

   {/* Why color took string cause you defined it and why fontSize as variable ? cause  fontSize needs a expression
   javascript take value either as string or curly so we can't use curly cause didn't defined
   
   <CustomBanner color='red' fontSize= {50} >
    Hello 
   </CustomBanner>*/}


   <CustomText  >
   Synchronizzing best configuration for you 
    </CustomText>
  </View>
  
 </View>
  </LinearGradient>
</Animated.View>

   </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1 , 
    // for top to bottom:content many from top to bottom
    justifyContent: 'center',
    // for left to right
    alignItems: 'flex-end',
    // padding: 10,
    backgroundColor: Colors.primary,
  },
  imageContainer:{
    width: screenWidth-20,
    height: screenHeight*0.5
  },
  img:{
    width: "100%",
    height: "100%",
    resizeMode:'contain'

  },
  gradientContainer:{
    position: "absolute",
    height: "35%", 
    width: "100%",
    bottom: 0,

  },
  gradient:{
  paddingTop: 0,
 height: "100%",
 width: "100%",
  },
textContainer:{
backgroundColor:'white',
// flex: 1,
borderRadius: 20,
padding: 20,
shadowOffset:{width: 1, height:1},
shadowOpacity: 1,
shadowRadius: 2,
alignItems:'center',
shadowColor: Colors.border,

}})