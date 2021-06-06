import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'react-native-axios'
import { storeData } from '../scripts/axios'
import { emailValidator, passwordValidator } from './validations/validators'

const Login = ({ navigation }) => {

  const [email, setEmail] = React.useState({ value: '', error: '' })
  const [password, setPassword] = React.useState({ value: '', error: '' })

  const createAccount = () => {
    navigation.navigate('register')
  }

  const loginButtoon = () => {

    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
    } else {
      console.log(email, password)
      axios.post('http://10.0.2.2:3000/users/loginn', {
        email: email.value,
        password: password.value
      }).then((response) => {
        if (response.data.status) {
          console.log(response)
          storeData(response.data.token)
          navigation.navigate('Main')
        } else {
          alert('wrong password or email')
        }
      })
        .catch((error) => {
          alert('wrong id')
        })

    }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.logoStyle}>
        Cars
      </Text>
      <View style={styles.childContainer2}>

        <TextInput
          label="Email"
          mode="flat"
          value={email.value}
          error={email.error}
          style={styles.ınputStyle}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
        />

        <TextInput
          label="Password"
          mode="flat"
          value={password.value}
          error={password.error}
          style={styles.ınputStyle}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
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
          <Text style={styles.textTab}> Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.textTab}> Forgot Password</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
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
    marginBottom: 50,
    textAlign: 'center',
    color: '#FF0066'
  }
})

export default Login
