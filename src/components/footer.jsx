import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Footer = ({name, location, email}) => {
  return (
    <View style={styles}>
      <Text>{name}</Text>
      <Text>{location}</Text>
      <Text>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.compose({
  width: '100%',
  height: 75,
  backgroundColor: 'red'
})
