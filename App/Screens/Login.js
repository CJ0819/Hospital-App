import { StyleSheet, Text, View ,Image, Dimensions, TouchableOpacity,} from 'react-native'
import React from 'react'
import Loginphoto from '../../assets/Loginphoto.jpg'
import Colors from '../Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'



const Login = () => {
  return (
    <View style={{alignItems:'center',flex:1}}>
     <Image source = {Loginphoto} style={{width:450, height:550,objectFit:'cover'}}/>
     <View style={{backgroundColor:Colors.white,padding:25,alignItems:'center',borderTopLeftRadius:30,borderTopRightRadius:30,top:-30}}>
      <Text style={{fontSize:23,fontWeight:'bold',paddingTop:25,}}>
      <Text style={{color:Colors.green}}>Medi</Text>
      <Text>Book</Text>
      </Text>
      <Text style={{fontSize:22,fontWeight:'bold',paddingTop:8}}>Hospital Appointment Booking App</Text>
      <Text style={{textAlign:'center',marginTop:22}}>Appointments Made Easy, Health Managed Right</Text>
       {/*Login Button*/}
      <SignInWithOAuth/>
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})