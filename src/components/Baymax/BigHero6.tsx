import { StyleSheet, Text, View , Animated } from 'react-native'
import React,{FC, useRef , useEffect} from 'react'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import { bigHero6Data } from '../../utils/data'
// import Animated from 'react-native-reanimated'

const BigHero6:FC<{onPress:(type:String)=> void}> = ({onPress}) => {

  // Animated using of react native API not Reanimated 
  const animatedValues = useRef(
    [...Array(6)].map(() => new Animated.Value(0) )).current

useEffect(() => {
  Animated.stagger(100 ,
    animatedValues.map((AnimatedValue , index) =>
    Animated.timing(AnimatedValue ,{
    toValue: 1 ,
    duration: 1000,
    useNativeDriver: true,
    delay: index*200
    })
    )
   ).start()

}, [])

  return (
    <View style={styles.circle}>
      {/* this is js that's why curly */}
     {
      bigHero6Data.map((item , index) => {
     const angle = (index/6)*2*Math.PI;
     const x = 140 * Math.cos(angle)
     const y = 140 * Math.sin(angle)

        const translateX =  animatedValues[index].interpolate({
          inputRange: [0,1],
          outputRange: [0,x]
        })

        const translateY =  animatedValues[index].interpolate({
          inputRange: [0,1],
          outputRange: [0,y]
        })
        return(
          <Animated.View key={index}
          style={[ styles.item  , {
            transform: [
              {translateX},
              {translateY},
            ]
          }]}
          >
<Text>Hello </Text>
         </Animated.View>
        )
      } )
       }
    </View>
  )
}

export default BigHero6

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',

  },
  circle:{
    height: screenHeight*0.8 ,
    width: screenWidth*0.8 ,
    justifyContent:'center',
    alignItems:'center',
    position: 'relative'
  },
  item:{
    // absolute cause circles will move from here to there
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4000 //full
  }
})