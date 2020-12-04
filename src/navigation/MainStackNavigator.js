
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Spread from '../screens/Spread'

const Stack = createStackNavigator()


function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{gestureEnabled:true}}>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Total Points'}} />
        <Stack.Screen name='Spread' component={Spread} options={{ title: 'Spreads'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator