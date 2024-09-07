import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function HospitalInfo({hospital}) {
  const navigation=useNavigation();
  return (
    <View>
      <Text style={{
        fontSize:23,
        fontWeight:'23'
      }}>KNUST Hospital</Text>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 6,}}>
        <SimpleLineIcons name="location-pin" size={15} color="green" />
        <Text style={{fontSize: 16,marginLeft: 5,color:"gray"}}>N6, Kumasi</Text>
      </View>
      <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 3,}}>
        <AntDesign name="clockcircleo" size={14} color="green" />
        <Text style={{fontSize: 16,marginLeft: 5, color:"gray"}}>Open Mon-Sun</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: '100%', 
          height: 1,
          backgroundColor: 'gray',
          marginBottom:-10
        }}
      />
    </View>
    
    <ActionButton/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: '100%', 
          height: 1,
          backgroundColor: 'gray',
          marginTop:25
        }}
      />
    </View>

    <Text style={{top:20,fontWeight:'23',fontSize:23}}>About</Text>
    <View style={{top:20, paddingBottom:70}}>
    <Text>
        Our vision is to be globally recognised as the Premier Centre of excellence in Africa for teaching in Science and Technology for development; producing high calibre graduates with knowledge and expertise to support the industrial and socio-economic development of Ghana and Africa.
        In summary, the vision can be stated as “Advancing knowledge in Science and Technology for sustainable development in Africa”
        To provide an environment for teaching, research and entrepreneurship training in Science and Technology for the industrial and socio-economic development of Ghana, Africa and other nations. KNUST also offers service to community, is open to all the people of Ghana and positioned to attract scholars, industrialists and entrepreneurs from Africa and other international community.
    </Text>
</View>
        <TouchableOpacity onPress={()=>navigation.navigate('book-appointment')}
        style={{borderRadius:40, alignContent:'center',alignItems:'center',height:50,top:-20,backgroundColor:"green"}}>
            <Text style={{top:15,color:"white", fontWeight:'bold',fontSize:16}}>Book Appointment</Text>
        </TouchableOpacity>
    </View>
  )
}