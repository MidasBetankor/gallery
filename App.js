import 'react-native-gesture-handler'
import React from 'react';
import Gallery from './src/screens/gallery'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailedView from './src/screens/detailedView';

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Gallery} options={createHeaderOptions('Gallery app', 'blue')}/>
          <Stack.Screen name="Details" component={DetailedView} options={createHeaderOptions('', 'black')} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const createHeaderOptions = (title, colour) => ({
  title: `${title}`,
  headerStyle: {
    backgroundColor: `${colour}`
  },
  headerTintColor: 'white'
})
