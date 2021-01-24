import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StudentHomescreen from '../screens/StudentHomeScreen';
import MyHomeworksScreen from '../screens/studentScreens/MyHomeworksScreen';
import StudentNotificationScreen from '../screens/studentScreens/StudentNotificationScreen';
import StudentSettings from '../screens/studentScreens/StudentSettings';
import CustomSideBarMenu from './CustomSideBarMenu';

export const StudentAppDrawerNavigator = createDrawerNavigator({
 Home:{
   screen: StudentHomescreen
 },
 Notification:{
   screen: StudentNotificationScreen
 },
 Setting :{
   screen: StudentSettings
 },
 MyHomeWorks:{
   screen: MyHomeworksScreen
 },
},
 {
  contentComponent: CustomSideBarMenu   
 }, 
 {
   initialRouteName: 'Home'  
 }
)