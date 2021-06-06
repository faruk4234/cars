import axios from 'react-native-axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const instance = axios.create({
  baseUrl: 'http://localhost:3000',
})

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('key', value)
  } catch (e) {
    // saving error
  }
}
