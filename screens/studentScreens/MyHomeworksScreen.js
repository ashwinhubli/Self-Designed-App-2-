import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class MyHomeworksScreen extends Component{
    constructor(){
        super()
        this.state = {
          userId  : firebase.auth().currentUser.email,
          homeworksByTeachers : []
        }
      this.homeworkRef= null
      }
    
      getHomeworksList =()=>{
        this.homeworkRef = db.collection("HomeWork")
        .onSnapshot((snapshot)=>{
          var homeworksByTeachers = snapshot.docs.map((doc) => doc.data())
          this.setState({
            homeworksByTeachers: homeworksByTeachers
          });
        })
      }
    
      componentDidMount(){
        this.getReportsList()
      }
    
      componentWillUnmount(){
        this.reportRef();
      }
    
      keyExtractor = (item, index) => index.toString()
    
      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.homework_title}
            subtitle={item.date}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}
                  onPress ={()=>{
                    this.props.navigation.navigate("HomeworkDetails",{"details": item})
                  }}
                  >
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
            bottomDivider
          />
        )
      }
    
      render(){
        return(
          <View style={{flex:1}}>
              <Header 
               leftComponent={<Icon name="bars" onPress={()=>this.props.navigation.toggleDrawer()}/>}
               centerComponent={{text: 'My Home-Works'}}
               backgroundColor = "#eaf8fe"
               />            <View style={{flex:1}}>
              {
                this.state.homeworksByTeachers.length === 0
                ?(
                  <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20}}>List Of All HomeWorks</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.homeworksByTeachers}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         }
      }
    })
    