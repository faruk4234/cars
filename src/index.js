import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import loginStack from './loginStack'
import main from './MainPage'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="loginStack"
          component={loginStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack
