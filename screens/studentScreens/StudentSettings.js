import React, { Component } from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import db from '../../config';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class StudentSettings extends Component{
   constructor(){
    super();
    this.state={
     firstName : '',
     lastName : '',
     class: '',
     rollNo: '',
     division: '',
     address: '',
     parentOrGuardianMobileNumber: '',
     docId: ''  
    }   
   }

   getStudentDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('teachers').where('email_id','==',email).get()
    .then(snapshot=>{
      snapshot.forEach(doc =>{
        var doc = doc.data()
        this.setState({
          firstName: data.first_name,
          lastName: data.last_name,
          parentOrGuardianMobileNumber: data.contact,
          address: data.address,
          class: data.class,
          rollNo: data.rollNo,
          division: data.division,
          docId:  doc.id
         })
      })
    })
  }

  updateStudentDetails=async()=>{
    db.collection('students').doc(this.state.docId)
    .update({
     "first_name": this.state.firstName,
     "last_name": this.state.lastName,
     "contact" : this.state.parentOrGuardianMobileNumber,
     "address" : this.state.address,
     "class": this.state.class,
     "division": this.state.division, 
     "roll_no": this.state.rollNo
    })
    Alert.alert("Your Profile Updated Successfully!")
  }

    componentDidMount=()=>{
      this.getStudentDetails()  
    }
  
    render(){
    return(
     <View style={styles.container}>
     <Header 
       leftComponent={<Icon name="bars" onPress={()=>this.props.navigation.toggleDrawer()}/>}
       centerComponent={{text: 'Settings'}}
       backgroundColor = "#eaf8fe"
    />
      <View style={styles.formContainer}>
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter First Name"}
       maxLength={8}
       onChangeText={(text)=>{
        this.setState({
          firstName: text  
        })   
       }}
       value={this.state.firstName}
      />
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter Last Name"}
       maxLength={10}
       onChangeText={(text)=>{
        this.setState({
         lastName: text   
        })   
       }}
       value={this.state.lastName}
      />
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter Parent's/Guardian's Contact"}
       keyboardType={"numeric"}
       maxLength={10}
       onChangeText={(text)=>{
        this.setState({
         parentOrGuardianMobileNumber: text   
        })   
       }}
       value={this.state.parentOrGuardianMobileNumber}
      />
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter Address"}
       multiline={true}
       onChangeText={(text)=>{
        this.setState({
          address: text  
        })   
       }}
       value={this.state.address}
      />
      <TextInput
       style={styles.formTextInput} 
       placeholder={"Enter Class"}
       maxLength={2}
       onChangeText={(text)=>{
        this.setState({
          class: text  
        })   
       }}
       value={this.state.class}
      />
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter Roll No"}
       keyboardType={"numeric"}
       maxLength={2}
       onChangeText={(text)=>{
        this.setState({
          rollNo: text  
        })   
       }}
       value={this.state.rollNo}
      />
      <TextInput
       style={styles.formTextInput}
       placeholder={"Enter Division"}
       maxLength={1}
       onChangeText={(text)=>{
        this.setState({
          division: text  
        })   
       }}
       value={this.state.division}
      />
      </View>
      <View style={styles.formTextInput}>
       <TouchableOpacity
        style={styles.button}
        onPress={this.updateStudentDetails()}
       >
       <Text style={styles.buttonText}>Save</Text>    
       </TouchableOpacity>   
      </View>
     </View>
    )   
   } 
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
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
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })
  