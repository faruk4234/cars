import React from 'react'
import {
  ScrollView, Text, TouchableOpacity, View, FlatList, RefreshControl
} from 'react-native'
import axios from 'react-native-axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AdComponent from './Components/AdComponent'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const Main = ({ navigation }) => {

  const [data, setData] = React.useState('')

  React.useEffect(() => {
    axios.get('http://10.0.2.2:3000/ads/listALL', {
    }).then((response) => {
      console.log(response.data)
      setData(response.data)
    })
      .catch((error) => {
        alert('wrong id')
      })
  }, [0])

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const out = async () => {

    AsyncStorage.removeItem('key')

    navigation.replace('loginStack')

  }

  React.useEffect(() => {

    AsyncStorage.getItem('key').then((key) => {
      if (!key) {
        navigation.navigate('loginStack')
      }
    })
  })

  return (
    <ScrollView
      contentContainerStyle={{

      }}
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    >

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.push('Ads')}
          style={{ backgroundColor: '#FF0070', padding: 10, borderRadius: 30 }}
        >
          <Text> İlan ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={out}
          style={{ backgroundColor: '#FF7572', padding: 10, borderRadius: 30 }}
        >
          <Text> Çıkış yap</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
        data={data}
        renderItem={AdComponent}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

export default Main
