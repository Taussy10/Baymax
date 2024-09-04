import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Navigation from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef } from './src/utils/NavigationUtils'

 const App:FC = () => {
  return (
    <NavigationContainer ref={navigationRef} >

<Navigation />
    </NavigationContainer>

  )
}

export default App

