import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PageHeader({title}) {
    const navigation=useNavigation();
  return (
    <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
     <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-circle" size={37} color="green" />
     </TouchableOpacity>
      <Text style={{fontSize:25, fontWeight:'semibold'}}>{title}</Text>
    </View>
  )
}