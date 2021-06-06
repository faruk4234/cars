import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

const Main = (data) => {

  const { images } = data.item

  const Imagess = images.map((item) => {
    return `http://10.0.2.2:3000/${item}`

  })

  return (
    <View style={styles.container}>

      <View style={styles.childContainer}>
        <Text style={styles.mainTitleStyle}>
          {' '}
          {data.item.mainTitle}
          {' '}
        </Text>
        <Text style={styles.nameSurnameTitle}> name Surname </Text>
      </View>

      <SliderBox
        images={Imagess}
        sliderBoxHeight={200}
        onCurrentImagePressed={() => console.log(Imagess)}
      />

      <View style={styles.childContainer}>
        <Text style={styles.kmTitle}>KM=</Text>
        <Text style={styles.kmTitle}>Price=150.000 Tl</Text>
      </View>

      <Text style={{ textAlign: 'center', paddingTop: 10 }}> açıklama lorem ipsum, lorem ipsum, lorem ipsum lorem ipsum lorem ipsum</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderRadius: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  mainTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  },
  nameSurnameTitle: {
    fontSize: 15,
    color: 'gray'
  },
  kmTitle: {
    fontSize: 20,
    padding: 10
  }
})

export default Main
