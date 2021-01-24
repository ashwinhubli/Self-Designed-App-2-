import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import {Header} from 'react-native-elements';

export default class StudentHomescreen extends Component{
   constructor(props){
    super(props)
    this.state={
     userId: firebase.auth().currentUser.email,
     value:"" 
    } 
   }   
    
   render(){
    
    BellIconWithBadge=()=>{
      return(
        <View>
          <Icon name='bell' type='font-awesome' color='#696969' size={25}
            onPress={() =>this.props.navigation.navigate('Notification')}/>
           <Badge
            value={this.state.value}
           containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
        </View>
      )
    }
    getNumberOfUnreadNotifications=()=>{
      db.collection('all_notifications').where('notification_status','==',"unread").where('targeted_user_id','==',this.state.userId)
      .onSnapshot((snapshot)=>{
        var unreadNotifications = snapshot.docs.map((doc) => doc.data())
        this.setState({
          value: unreadNotifications.length
        })
      })
    }


    return(
     <View style={styles.container}>        
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: "Student Home-Screen", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          backgroundColor = "#eaf8fe"
          rightComponent={<this.BellIconWithBadge {...this.props}/>}
        />
      <Image
       source={require('../assets/studentHomescreen.gif')}
       style={{width: 40,height:80}}
      />
      <Text style={styles.welcomeText}>Welcome Back!</Text>             
     </View>   
    )   
   }
}

const styles = StyleSheet.create({
    container:{
      flex: 1  
    },
    welcomeText:{
      fontWeight: 'bold',
      color: '#696969'
    }
})