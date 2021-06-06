import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import { TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'react-native-axios'

const Login = () => {

  const createAccount = () => {

  }

  const loginButtoon = () => {

  }

  const [nameAndSurname, setNameAndSurname] = React.useState({ value: '', error: '' })
  const [password, setPassword] = React.useState({ value: '', error: '' })
  const [email, setEmail] = React.useState({ value: '', error: '' })
  return (

    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.logoStyle}>
          Cars
        </Text>
        <View style={styles.childContainer2}>

          <TextInput
            label="Name and Surname"
            mode="flat"
            value={nameAndSurname.value}
            style={styles.ınputStyle}
            onChangeText={(text) => setNameAndSurname(text)}
          />

          <TextInput
            label="Email"
            mode="flat"
            value={email.value}
            style={styles.ınputStyle}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            label="Password"
            mode="flat"
            value={password.value}
            style={styles.ınputStyle}
            onChangeText={(text) => setPassword(text)}
          />

        </View>

        <TouchableOpacity
          onPress={loginButtoon}
          style={styles.button}
        >
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.5, y: 3 }}
            colors={['#FF0000', '#FF0066', '#800080']}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>
              LOGİN
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.childContainer3}>
          <TouchableOpacity onPress={createAccount}>
            <Text style={styles.textTab}> Do you have an account? </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  button: {
    paddingTop: 30,
    paddingHorizontal: 0,

  },
  linearGradient: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    shadowColor: '#FF0000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 30.00,

    elevation: 24,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  childContainer2: {

  },
  childContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  ınputStyle: {
    backgroundColor: 'white',
    marginVertical: 10
  },
  textTab: {
    fontSize: 15,
    color: '#FF0066'
  },
  logoStyle: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center',
    color: '#FF0066'
  }
})

export default Login
