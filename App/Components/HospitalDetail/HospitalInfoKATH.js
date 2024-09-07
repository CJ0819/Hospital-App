import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import ActionButtonKATH from './ActionButtonKATH';
import { useNavigation } from '@react-navigation/native';

export default function HospitalInfoKATH({hospital}) {
  const navigation=useNavigation();
    return (
        <View>
          <Text style={{
            fontSize:23,
            fontWeight:'23'
          }}>KATH</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,}}>
            <SimpleLineIcons name="location-pin" size={15} color="green" />
            <Text style={{fontSize: 16,marginLeft: 5,color:"gray"}}>Bantama, Kumasi</Text>
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
        
        <ActionButtonKATH/>
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
        Komfo Anokye Teaching Hospital (KATH) is located in Kumasi, the Regional Capital of Ashanti Region with a total projected population of 4,780,380 (2000).
        The geographical location of the 1200-bed Komfo Anokye Teaching Hospital, the road network of the country and commercial nature of Kumasi make the hospital accessible to all the areas that share boundaries with Ashanti Region and others that are further away.
        As such, referrals are received from all the northern regions (namely, Northern, Upper East and Upper West Regions), Brong Ahafo, Central, Western, Eastern and parts of the Volta Regions. Our vision is to become a medical centre of excellence offering Clinical and Non-Clinical services of the highest quality standards comparable to any international standards, within 5 years.
        </Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('book-appointment-KATH')}
        style={{borderRadius:40, alignContent:'center',alignItems:'center',height:50,top:-20,backgroundColor:"green"}}>
            <Text style={{top:15,color:"white", fontWeight:'bold',fontSize:16}}>Book Appointment</Text>
        </TouchableOpacity>
        </View>
      )
    }