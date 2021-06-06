import React from 'react'
import {
  ScrollView, Text, TouchableOpacity, View, FlatList
} from 'react-native'
import axios from 'react-native-axios'
import AdComponent from './Components/AdComponent'

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

  return (
    <ScrollView contentContainerStyle={{ flex: 0 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.push('Ads')}
          style={{ backgroundColor: '#FF0070', padding: 10, borderRadius: 30 }}
        >
          <Text> İlan ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#FF7572', padding: 10, borderRadius: 30 }}>
          <Text> Çıkış yap</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={AdComponent}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

export default Main
