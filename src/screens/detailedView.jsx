import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import BigPicture from '../components/bigPicture'
import { fetchDetailedInfo } from '../services/api'
import Footer from '../components/footer'

export default class DetailedView extends Component {
  state = {
    page: 0,
    userInfo: {
      name: undefined,
      email: undefined,
      location: undefined
    }
  }

  componentDidMount() {
    fetchDetailedInfo(this.state.page)
      .then((res) => res.json())
      .then(({results: [{
        email,
        location: {
          city,
          country
        },
        name: {
          first,
          last,
          title
        }
      }]}) => this.setState((prev) => {
        return {
          page: prev.page + 1,
          userInfo: {
            name: `${title} ${first} ${last}`,
            location: `${city}. ${country}`,
            email: email
          }
        }
      }))
  }

  render() {
    const image = this.props.route.params.image
    const { name, location, email } = this.state.userInfo

    return (
      <View style={styles}>
        <BigPicture uri={image} />
        <Footer name={name} location={location} email={email} />
      </View>
    )
  }
}

const styles = StyleSheet.compose({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  height: '100%',
})
