import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeworkDetails from '../screens/studentScreens/HomeworkDetails';
import MyHomeworksScreen from '../screens/studentScreens/MyHomeworksScreen';

export const AppStackNavigator = createStackNavigator({
    HomeworkList : {
      screen : MyHomeworksScreen,
      navigationOptions:{
        headerShown : false
      }
    },
    HomeworkDetails : {
      screen : HomeworkDetails,
      navigationOptions:{
        headerShown : false
      }
    }
  },
    {
      initialRouteName: 'HomeworkList'
    }
  );
  