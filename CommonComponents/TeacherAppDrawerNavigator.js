import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TeacherNotificationScreen from '../screens/teacherScreens/TeacherNotificationScreen';
import CustomSideBarMenu from './CustomSideBarMenu';
import TeacherHomescreen from '../screens/TeacherHomeScreen'
import TeacherSettings from '../screens/teacherScreens/TeacherSettings'

export const StudentAppDrawerNavigator = createDrawerNavigator({
 Home:{
   screen: TeacherHomescreen
 },
 Notification:{
   screen: TeacherNotificationScreen
 },
 Setting :{
   screen: TeacherSettings
 }

},
 {
  contentComponent: CustomSideBarMenu   
 }, 
 {
   initialRouteName: 'Home'  
 }
)