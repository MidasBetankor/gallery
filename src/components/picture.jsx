import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default Picture = ({ uri, onImageTap, style = { height: 200, width: 200, margin: 2 } }) => {
  return (
    <TouchableOpacity onPress={onImageTap.bind(this, uri)}>
      <Image source={{ uri: uri }} style={style} />
    </TouchableOpacity>
  )
}
