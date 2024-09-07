import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';


export default function SearchBar({setSearchText}) {
    const [searchInput,setSearchInput] = useState();
  return (
    <View style={{marginTop:15}}>
      <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center',borderWidth:1,borderColor:'gray',padding:8,borderRadius:10}}> 
      <AntDesign name="search1" size={16} color={Colors.green}/>
        <TextInput placeholder='Search' 
        onChangeText={(value)=>setSearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)}
        style={{width:'100%'}}/>
      </View>
      <Text style={{fontWeight:'bold',fontSize:25,paddingTop:15}}>Welcome,</Text>
    </View>
  )
}