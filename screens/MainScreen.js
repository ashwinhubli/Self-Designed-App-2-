import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import {Header} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class MainScreen extends React.Component{
    constructor(){
      super()
      this.state={
        firstName: ''  ,
        lastName: '',
        Contact: '',
        Address : '',
        class: '',
        classTeacherOf : '',
        division: '',
        rollNo: '',
        isStudentModalVisible:'false',
        isTeacherModalVisible:'false',
 
        studentEmailId: '',
        studentPassword: '',
        studentConfirmPassword: '',
       
        teacherEmailId: '',
        teacherPassword: '',
        teacherConfirmPassword: ''
      }
    }
    

    teacherLogin=(teacherEmailId,teacherPassword)=>{
        firebase.auth().signInWithEmailAndPassword(teacherEmailId,teacherPassword)
        .then(()=>{
          this.props.navigation.navigate('TeacherHomeScreen')  
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
      studentLogin=(studentEmailId,studentPassword)=>{
        firebase.auth().signInWithEmailAndPassword(studentEmailId,studentPassword)
        .then(()=>{
          this.props.navigation.navigate('StudentHomeScreen')  
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
           


      showModalForStudents=()=>{
        return(
         <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isStudentModalVisible}
              >
             <View style={styles.modalContainer}>
               <ScrollView>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Image source={require("../assets/student.png")} style={{width: 30,height: 30}} />   
                 <Text style={styles.modalTitle}>Registration for Students</Text>
 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"First Name"}
                   maxLength={8}
                   onChangeText={(text)=>{
                     this.setState({
                         firstName: text
                     })  
                   }}
                 />
                 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Last Name"}
                   maxLength={10}
                   onChangeText={(text)=>{
                     this.setState({
                        lastName: text 
                     })  
                   }}                
                 />
 
                 <TextInput
                 style={styles.formTextInput}
                   placeholder={"Roll no"}
                   maxLength={3}
                   onChangeText={(text)=>{
                     this.setState({
                       rollNo: text  
                     })  
                   }}
                 />
                 <TextInput
                 style={styles.formTextInput} 
                 placeholder={"Class"}
                   maxLength={1}
                   onChangeText={(text)=>{
                       this.setState({
                         class: text  
                       })
                   }}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"Contact"}
                   maxLength={10}
                   keyboardType="numeric"
                   onChangeText={(text)=>{
                    this.setState({
                       Contact: text
                     })
                   }}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"Address"}
                   multiline={true}
                   onChangeText={(text)=>{
                    this.setState({
                      Address: text  
                    })   
                   }}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"email-address"}
                   keyboardType="email-address"
                   onChangeText={(text)=>{
                     this.setState({
                       studentEmailId: text  
                     })  
                   }}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      studentPassword: text  
                    })
                   }}
                   />
                   <TextInput
                    style={styles.formTextInput}
                   placeholder={"confirm password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      studentConfirmPassword: text  
                    })
                   }}
                    />
                    
                    <View style={styles.modalContainer}>
                      <TouchableOpacity 
                        onPress={()=>{this.studentSignUp()}}
                        style={styles.registerButton}
                        >
                        <Text style={styles.registerButtonText}>Register Student</Text>  
                      </TouchableOpacity>
                      </View>
                      <View style={styles.modalContainer}>
                      <TouchableOpacity  style={styles.cancelButton} onPress={()=>{this.setState({"isStudentModalVisible": false})}}>
                         <Text>Cancel</Text> 
                      </TouchableOpacity>
                    </View>
                 </KeyboardAvoidingView>    
               </ScrollView>  
             </View>
 
          </Modal>
         </View>   
        )
       }
       showModalForTeachers=()=>{
         return(
          <View>
           <Modal
             animationType="fade"
             transparent={true}
             visible={this.state.isTeacherModalVisible}
           >
                <View style={styles.modalContainer}>
               <ScrollView>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Image source={require("../assets/teacher.png")} style={{width: 30,height: 30}}/>     
                 <Text style={styles.modalTitle}>Registration for Teachers</Text>
  
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"First Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                      this.setState({
                          firstName: text
                      })  
                    }}
                  
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Last Name"}
                    maxLength={10}
                    onChangeText={(text)=>{
                      this.setState({
                         lastName: text 
                      })  
                    }}
                  
                  />
                  
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Class teacher of"}
                    maxLength={2}
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                        this.setState({
                          classTeacherOf : text 
                        })
                    }}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Contact"}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                     this.setState({
                        Contact: text
                      })
                    }}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text)=>{
                     this.setState({
                       Address: text  
                     })   
                    }}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"email-address"}
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                      this.setState({
                      teacherEmailId: text  
                      })  
                    }}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"password"}
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                     this.setState({
                       teacherPassword: text  
                     })
                    }}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder={"confirm password"}
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                     this.setState({
                      teacherConfirmPassword: text  
                     })
                    }}
                     />
                     
                     <View style={styles.modalContainer}>
                       <TouchableOpacity style={styles.registerButton} onPress={()=>{this.teacherSignUp()}}>
                         <Text style={styles.registerButtonText}>Register Teacher</Text>  
                       </TouchableOpacity>
                       </View>
                       <View style={styles.modalContainer}>
                       <TouchableOpacity style={styles.cancelButton} onPress={()=>{this.setState({"isTeacherModalVisible": false})}}>
                          <Text>Cancel</Text> 
                       </TouchableOpacity>
                     </View>
                  </KeyboardAvoidingView>    
                </ScrollView>  
              </View>
  
           </Modal>
          </View>   
         )
        }
     studentSignUp=(studentEmailId,studentPassword,studentConfirmPassword)=>{
       if(studentPassword !== studentConfirmPassword)
       {
         Alert.alert("Password does'nt match \n Check Your Password")
       }
       else{
         firebase.auth().createUserWithEmailAndPassword(studentEmailId,studentPassword)
         .then(()=>{
           db.collection('users').add({
             first_name: this.state.firstName,
             last_name: this.state.firstName,
             contact: this.state.Contact,
             email_id : this.state.studentEmailId,
             address: this.state.Address,
             roll_no: this.state.rollNo,
             class: this.state.class
           })
           return Alert.alert( 'User Added Successfully', '', [
             {text: 'OK', onPress: () => this.setState({"isStudentModalVisible" : false})}, ] );   
         })
         .catch((error)=> { // Handle Errors here.
             var errorCode = error.code; 
             var errorMessage = error.message; 
             return Alert.alert(errorMessage) });
       }
     }
 
     teacherSignUp=(teacherEmailId,teacherPassword,teacherConfirmPassword)=>{
         if(teacherPassword !== teacherConfirmPassword)
         {
           Alert.alert("Password does'nt match \n Check Your Password")
         }
         else{
           firebase.auth().createUserWithEmailAndPassword(teacherEmailId,teacherPassword )
           .then(()=>{
             db.collection('users').add({
               first_name: this.state.firstName,
               last_name: this.state.firstName,
               contact: this.state.Contact,
               email_id : this.state.teacherEmailId,
               address: this.state.Address,
               classTeacher_of: this.state.classTeacherOf  
             })
             return Alert.alert( 'User Added Successfully', '', [
               {text: 'OK', onPress: () => this.setState({"isTeacherModalVisible" : false})}, ] );   
           })
           .catch((error)=> { // Handle Errors here.
               var errorCode = error.code; 
               var errorMessage = error.message; 
               return Alert.alert(errorMessage) });
         }
       }
 
    render(){
      return(
        <View>
           <Header 
             centerComponent={{text: 'Report-Card App'}} style={{color:'#ffff', fontWeight:'200', fontSize:20 }}
             backgroundColor="green"
           />
           <View style={styles.profileContainer}>
             <View style={styles.loginBox}>
             <TextInput
          style={styles.formTextInput}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              studentEmailId: text
            })
          }}
        />

        <TextInput
          style={styles.formTextInput}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              studentPassword: text
            })
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{this.studentLogin(studentEmailId,studentPassword)}}>
          <Text style={styles.buttonText}>Login As A Student</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.profileContainer}>
        <TextInput
          style={styles.formTextInput}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              teacherEmailId: text
            })
          }}
        />

        <TextInput
          style={styles.formTextInput}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              teacherPassword: text
            })
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{this.teacherLogin(teacherEmailId,teacherPassword)}}>
          <Text style={styles.buttonText}>Login As A Teacher</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={()=>{this.showModalForTeachers()}}
          style={styles.button}
        >
          <Text>Sign Up As Teacher</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.showModalForStudents()}}
          style={styles.button}
        >
          <Text>Sign Up As A Student</Text>
        </TouchableOpacity>
        </View>
        </View>  
      )  
    }
}

const styles = StyleSheet.create({
  loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
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
    width:300, 
    height:75, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"#ff9800", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16, 
    padding: 10
   }, 
   buttonText:{
     color:'#ffff', 
     fontWeight:'200', 
     fontSize:20 
  },
  profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', }, 
  registerButton:{ 
    width:200, 
    height:40, 
    alignItems:'center', 
    justifyContent:'center', 
    borderWidth:1, 
    borderRadius:10, 
    marginTop:30
   }, 
  registerButtonText:{ 
    color:'#ff5722', 
    fontSize:15, 
    fontWeight:'bold'
   }, 
  cancelButton:{ 
   width:200, 
   height:30, 
   justifyContent:'center', 
   alignItems:'center', 
   marginTop:5
   },
   KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' }, 
   modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 }
  ,
  modalContainer:{ 
   flex:1,
   borderRadius:20, 
   justifyContent:'center', 
   alignItems:'center', 
   backgroundColor:"#ffff", 
   marginRight:30, 
   marginLeft : 30, 
   marginTop:80, 
   marginBottom:80
   }, 
})