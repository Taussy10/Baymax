 import { StyleSheet, Text, View } from 'react-native'
import React,{useRef , useEffect , useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../utils/Constants'
import Background from '../components/Baymax/Background'
import Loading from '../components/Baymax/Loading'
import BigHero6 from '../components/Baymax/BigHero6'


import { Animated } from 'react-native'
// We are using Animated API of react native
//  https://reactnative.dev/docs/animations

const BaymaxScreen = () => {

  const [showInstructions, setShowInstructions] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [ShowMessage, setShowMessage] = useState('')
  const [showPedometer, setShowPedometer] = useState(false)
  
 

  const blurOpacity = useRef(new Animated.Value(0)).current
  // useRef is use for stroing mutable values that doesn't rerenders  

  // .current stores the value so blurOpacity  = 0 
console.log(blurOpacity);

// blur current value 0 {0: transparent and 1: opaque}
// const startBlur = () =>{
//   Animated.timing(blurOpacity,{
//     toValue: 20,
//     duration: 2000,
//     useNativeDriver: true,
//     // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
//   }).start()
// }
const unBlur = () =>{
  Animated.timing(blurOpacity,{
    toValue: 0,
    duration: 20000,
    useNativeDriver: true,
    // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
  }).start()
}

// useEffect(() => {
//   const startBlur = () =>{
//     Animated.timing(blurOpacity,{
//       toValue: 0,
//       duration: 2000,
//       useNativeDriver: true,
//       // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
//     }).start()
//   }
// }, [blurOpacity])

 



// UI render from here only 
  return (
    <SafeAreaView style={styles.container}>
      
  {
      //  && operator checks whether showLoader true or not if yeah then will render UI 
   showLoader && 
  
   <View style={styles.loaderContainer}>
 <Loading />
   </View>

  }

{
  !showInstructions &&  
  // onPress={() => { }} 
  // onPress={}
  // What's the diff in both  
  <BigHero6 onPress={() => { }}   />
}

      <Background blurOpacity={blurOpacity} />
    
    </SafeAreaView>
  )
}

export default BaymaxScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.secondry,
    // content kidhar se kidhar hota hai left to right but it's RN so will be ulta top to bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer:{
    position: 'absolute',
  }
})