import React, { Component } from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import db from '../../config';
import SwipeableFlatlist from '../../CommonComponents/SwipeAbleFlatlist';
import {Header, Icon} from 'react-native-elements';
import StudentAppDrawerNavigator from '../../CommonComponents/StudentAppDrawerNavigator'

export default class StudentNotificationScreen extends Component{
    constructor(props) {
      super(props);
      this.state = {
          userId :  firebase.auth().currentUser.email,
          allNotifications : []
        };
        this.notificationRef = null
      }

      getNotifications=async()=>{
        this.notificationRef = db.collection("all_notifications")
        .where("notification_status", "==", "unread")
        .where("targeted_user_id",'==',this.state.userId)
        .onSnapshot((snapshot)=>{
          var allNotifications =  []
          snapshot.docs.map((doc) =>{
            var notification = doc.data()
            notification["doc_id"] = doc.id
            allNotifications.push(notification)
          });
          this.setState({
              allNotifications : allNotifications
          });
        })
      }
    
      componentDidMount=()=>{
        this.getNotifications()
      }
    
      componentWillUnmount=()=>{
        this.notificationRef()
      }

      keyExtractor = (item, index) => index.toString()

      renderItem = ({item,index}) =>{
          return (
            <ListItem
              key={index}
              leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
              title={item.book_name}
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              subtitle={item.message}
              bottomDivider
            />
          )
     }
    
    
      render(){
        return(
          <View style={styles.container}>
            <View style={{flex:0.1}}>
              <Header 
               leftComponent={<Icon name="bars" onPress={()=>this.props.navigation.toggleDrawer(StudentAppDrawerNavigator)}/>}
               centerComponent={{text: 'Notifications'}}
               backgroundColor = "#eaf8fe"
               />

            </View>
            <View style={{flex:0.9}}>
              {
                this.state.allNotifications.length === 0
                ?(
                  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:25}}>You have no notifications</Text>
                  </View>
                )
                :(
                  <SwipeableFlatlist allNotifications={this.state.allNotifications}/>
                 )
              }
            </View>
          </View>
        )
      }   
    }