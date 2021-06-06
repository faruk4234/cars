import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Main from './Main'
import AdAdds from './AdAdds'

const Stack = createStackNavigator()

const LoginStack = () => (

  <Stack.Navigator>

    <Stack.Screen
      name="Mainn"
      component={Main}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Ads"
      component={AdAdds}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
)

export default LoginStack
