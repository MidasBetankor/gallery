import React from 'react'
import { Image } from 'react-native'

export default BigPicture = ({ uri }) => {
  const pic = {
    uri: uri
  }

  return <Image source={pic} style={{ height: 400, width: 400 }} />
}
