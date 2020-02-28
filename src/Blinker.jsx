import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Blinker extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState(prev => (
        { isVisible: !prev.isVisible}
      ))
    }, 1000)
  }

  state = { isVisible: true }

  render() {
    if (this.state.isVisible)
      return (<Text style={this.props.style}>{this.props.message}</Text>)

    return null
  }
}
