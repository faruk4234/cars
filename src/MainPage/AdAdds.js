import React from 'react'
import { View, Text, Platform } from 'react-native'
import { TextInput } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

// send photo
const AdAdds = () => {
  const [mainTitle, setMainTitle] = React.useState('')
  const [km, setKm] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [description, setDescription] = React.useState('')

  const addPhoto = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then((images) => {
      // eslint-disable-next-line no-undef
      const formData = new FormData()
      formData.append('mainTitle', mainTitle)
      formData.append('km', km)

      images.map((image, index) => {
        formData.append('images', {
          name: /[^/]*$/.exec(image.path)[0],
          type: image.mime,
          uri:
            Platform.OS === 'android'
              ? image.filtered || image.path
              : (image.filtered || image.path).replace('file://', '')
        })
      })

      axios.post('http://10.0.2.2:3000/ads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch((e) => {
        console.log('e', e)
      })
    }).catch((e) => {
      console.log('error', e)
    })

  }

  return (

    <View>
      <TextInput
        label="Main Title"
        value={mainTitle}
        onChangeText={(text) => setMainTitle(text)}
      />

      <TextInput
        label="Km"
        value={km}
        onChangeText={(text) => setKm(text)}
      />

      <TextInput
        label="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />

      <TextInput
        label="description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TouchableOpacity onPress={addPhoto}>
        <Text>
          SELECT
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default AdAdds
