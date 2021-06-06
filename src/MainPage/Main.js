import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Main = () => {
  return (
    <View style={{ borderWidth: 0.3, margin: 10, borderRadius: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}> İLAN BAŞLIĞI </Text>
        <Text style={{ fontSize: 15, color: 'gray' }}> name Surname </Text>
      </View>
    </View>
  )
}

export default Main
