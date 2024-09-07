import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import HospitalDetails from '../Screens/HospitalDetails';
import HospitalDetailsKATH from '../Screens/HospitalDetailsKATH';
import BookAppointment from '../Screens/BookAppointment';
import BookAppointmentKATH from '../Screens/BookAppointmentKATH';
import Login from '../Screens/Login';
import Appointment from '../Screens/Appointment';
import ChatScreen from '../Screens/ChatScreen';
import ChatScreenKATH from '../Screens/ChatScreenKATH';
import DoctorInformation from '../Components/Shared/DoctorInformation';
import AllDoctorsScreen from '../Components/Shared/AllDoctorsScreen';





const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="hospital-doctor-screen" component={HospitalDoctorsListScreen} />
      <Stack.Screen name='hospital-detail' component={HospitalDetails}/>
      <Stack.Screen name='hospital-detail-KATH' component={HospitalDetailsKATH}/>
      <Stack.Screen name='book-appointment' component={BookAppointment}/>
      <Stack.Screen name='book-appointment-KATH' component={BookAppointmentKATH}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='Appointment' component={Appointment}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
      <Stack.Screen name="ChatKATH" component={ChatScreenKATH}/>
      <Stack.Screen name="DocInfo" component={DoctorInformation}/>
      <Stack.Screen name="AllDoctors" component={AllDoctorsScreen}/>
     
    </Stack.Navigator>
  );
}


