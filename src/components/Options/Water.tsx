import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { circleRadius } from '../../utils/Constants'
import  Icon  from 'react-native-vector-icons/Ionicons'
import {scale , verticalScale , moderateScale} from 'react-native-size-matters'

const Water = () => {
  return (
    <TouchableOpacity style={styles.container}>
     <Icon name='water' color='#1ca3ec' size={moderateScale(35)} />
    </TouchableOpacity>
  )
}

export default Water

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: circleRadius ,
        width: circleRadius ,
        borderRadius: circleRadius ,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 ,
        shadowOffset: {width: 1 , height: 1},
        elevation: 10 ,
        shadowRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2 ,
    },
    containerCompleted:{

    }
})