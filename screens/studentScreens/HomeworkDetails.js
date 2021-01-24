import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import db from '../../config';

export default class HomeworkDetails extends Component{
    constructor(props){
      super(props);
      this.state={
       userId: firebase.auth().currentUser.email,
       studentId: this.props.navigation.getParam('details')["student_id"],
       teacherId: this.props.navigation.getParam('details')["teacher_id"],
       homework:'',
       homeworkTitle: '',
       canRefer: '',
       teacherRequestDocId: '',
       teacherName: '',
       teacherContact: '',
       teacherAddress: ''
      }  
    }

    getTeacherDetails=()=>{
        db.collection('users').where('email_id','==',this.state.teacherId).get()
        .then(snapshot=>{
          snapshot.forEach(doc=>{
            this.setState({
              teacherName    : doc.data().first_name,
              teacherContact : doc.data().contact,
              teacherAddress : doc.data().address,
            })
          })
        });
    }

    getHomeworkDetails=()=>{
      db.collection("homework").get()
      .then(snapshot=>{
          snapshot.forEach(doc=>{
            this.setState({
              homework: doc.data().homework,
              homeworkTitle: doc.data().homework_title,
              canRefer: doc.data().can_refer,
              dateFrom: doc.data().date,
            })  
          })
      })
    }
    componentDidMount(){
      this.getHomeworkDetails();
      this.getTeacherDetails();  
    }
    render(){
     return(
      <View>
         <Header
          leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
          centerComponent={{ text:"Home-Work Details", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          backgroundColor = "#eaf8fe"
            />
        <Text>Hello Students! Time To Complete Your Homeworks -:</Text>
        <View style={{flex:0.3}}>
            <Card
                title={"Homework Information"}
                titleStyle= {{fontSize : 20}}
              >
              <Card>
                <Text style={{fontWeight:'bold'}}>Title Of Home-Work: {this.state.homeworkTitle}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Home-Work  : {this.state.homework}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>You Can Refer  : {this.state.canRefer}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>This Homework is given to you by : {this.state.teacherName}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Teacher's Contact  : {this.state.teacherContact}</Text>
              </Card>
            </Card>
          </View>
      </View>   
     )   
    }
}