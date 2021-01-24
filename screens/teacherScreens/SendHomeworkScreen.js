import React from 'react';
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import db from '../../config';

export default class SendHomeworkScreen extends React.Component{
    constructor(){
     super();
     this.state={
      userId: firebase.auth().currentUser.email,
      homework: '',
      homeworkTitle: '',
      canRefer: ''
     }   
    }
    homeworkDetails=()=>{
      homework = this.state.homework
      homeworkTitle = this.state.homeworkTitle
      canRefer = this.state.canRefer

      db.collection('HomeWork').add({
       "user_id": this.state.userId,
       "homework": homework,
       "homework_title": homeworkTitle,
       "can_refer": this.state.canRefer,
       "date": firebase.firestore.FieldValue.serverTimestamp()
     })
    }
    render(){
      return(
        <View>
         <TextInput
           style={styles.formTextInput}
           placeholder={"Title Of Homework"}
           multiline={true}
           onChangeText={(text)=>{
            this.setState({
              homeworkTitle: text   
            })   
           }}
           value={this.state.homeworkTitle}
         /> 
         <TextInput
           style={styles.formTextInput}
           placeholder={"Write The Details Of The Homework Here!"}
           multiline={true}
           onChangeText={(text)=>{
            this.setState({
              homework: text  
            })   
           }}
           value={this.state.homework}
         />
        
         <TextInput
           style={styles.formTextInput}
           placeholder={"Can Refer"}
           multiline={true}
           onChangeText={(text)=>{
             this.setState({
               canRefer: text  
             })  
           }}
           value={this.state.canRefer}
         />
         
         <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.homeworkDetails()}}
         >
          <Text style={styles.buttonText}>Send Homework</Text>    
         </TouchableOpacity>   
        </View>  
      )  
    }
}

const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      }, 
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
        buttonText:{
            color:'#ffff', 
            fontWeight:'200', 
            fontSize:20 
         },
})