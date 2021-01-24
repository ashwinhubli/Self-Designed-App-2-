import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import StudentHomeScreen from './screens/StudentHomeScreen';

export default class App extends React.Component {
  render(){
  return (
    // <SafeAreaProvider>    
      <AppContainer/>
    /* </SafeAreaProvider> */
  )
  }
  }

const SwitchNavigator = createSwitchNavigator({
  MainScreen : {screen :MainScreen},
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
