import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { fetchUsers } from '../services/api'
import Picture from '../components/picture'

export default class Gallery extends Component {
  state = { users: [], page: 1 }

  componentDidMount() {
    this.loadMoreData(30)
  }

  loadMoreData(count) {
    fetchUsers(count, this.state.page)
      .then((data) => data.json())
      .then((data) =>
        this.setState((prevState) => ({
          users: prevState.users.concat(data.results),
          page: prevState.page + 1
        }))
      )
  }

  onImageTap(uri) {
    this.props.navigation.navigate('Details', { image: uri })
  }

  render() {
    return (
      <View style={styles.screen}>
        <FlatList
          contentContainerStyle={styles.itemStyles}
          style={styles.grid}
          data={this.state.users}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Picture key={index} uri={item.picture.large} onImageTap={this.onImageTap.bind(this)} />
          )}
          keyExtractor={(_, index) => index}
          onEndReachedThreshold={1}
          onEndReached={() => this.loadMoreData(30)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.compose({
  grid: {
    backgroundColor: 'black',
    itemStyles: {
      alignItems: 'center'
    }
  },
  screen: {
    height: '100%',
    backgroundColor: 'black'
  }
})
