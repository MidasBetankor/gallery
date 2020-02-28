import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg'
    };

    return (
      <Image source={pic} style={{width: 200, height:100}} />
    )
  }
}
