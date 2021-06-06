import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './Login'
import Register from './Register'

const Stack = createStackNavigator()

const LoginStack = () => (

  <Stack.Navigator>

    <Stack.Screen
      name="login"
      component={Login}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="register"
      component={Register}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
)

export default LoginStack
