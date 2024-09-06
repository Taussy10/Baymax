import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Navigation from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef } from './src/utils/NavigationUtils'

 const App:FC = () => {
  return (

    // firt understand state:  status of something on any moment{past , present}
// navigation state: it means that what is status of navigation that on which screen is it  in the app ?  is it on home screen or profile screen or any other screen
    // the NavigationContainer in React Navigation manages the navigation state for application.
    // It is responsible for moving  between screens and mainting it's history 
// https://reactnavigation.org/docs/navigation-state learn more
    // we have to provide ref so that navigation ref can extract data so that it can use navigation
    <NavigationContainer ref={navigationRef} >
<Navigation />
    </NavigationContainer>

  )
}

export default App

