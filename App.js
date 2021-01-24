import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import  StudentAppDrawerNavigator  from './CommonComponents/StudentAppDrawerNavigator';
import  TeacherAppDrawerNavigator from './CommonComponents/TeacherAppDrawerNavigator';
import StudentAppStackNavigator from './CommonComponents/StudentAppStackNavigator';
import StudentHomescreen from './screens/StudentHomeScreen';
import TeacherHomescreen from './screens/TeacherHomeScreen';
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
  StudentHomeScreen:{screen: StudentHomescreen},
  TeacherHomeScreen:{screen: TeacherHomescreen},
  StudentAppDrawer:{screen: StudentAppDrawerNavigator},
  TeacherAppDrawer:{screen : TeacherAppDrawerNavigator},
  AppStackNavigator:{screen :StudentAppStackNavigator }
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
