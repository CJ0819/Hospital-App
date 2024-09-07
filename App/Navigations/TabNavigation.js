import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors'
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Homenavigation from './Homenavigation'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='Home' component={Homenavigation} 
        options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize:12,color: focused ? 'green' : color }}>Home</Text>
              ),
            tabBarIcon:({focused,color,size})=>(
                <Ionicons name="home-outline" size={size} color={focused ? '#32c24f' : color}/>
            )
        }}/>
        <Tab.Screen name='Appointment' component={Appointment}
           options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize:12,color: focused ? 'green' : color }}>Appointment</Text>
              ),
            tabBarIcon:({focused,color,size})=>(
                <EvilIcons name="calendar" size={size} color={focused ? '#32c24f' : color} />
            )
        }}/>
        <Tab.Screen name='Profile' component={Profile}
           options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize:12,color: focused ? 'green' : color }}>Profile</Text>
              ),
            tabBarIcon:({focused,color,size})=>(
                <FontAwesome6 name="user" size={24} color={focused ? '#32c24f' : color}/>
            )
        }}/>
    </Tab.Navigator>
  )
}