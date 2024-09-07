import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Shared/PageHeader'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import HorizontalLine from '../Shared/HorizontalLine';

export default function AppointmentHospitalInfoKATH() {
  return (
    <View>
      <PageHeader title={'Book Appointment'}/>
      <View style={{marginTop:10, display:'flex',flexDirection:'row',gap:15}}>
        <Image source={require('../../../assets/Kath.png')} 
        style={{width:100,height:100,borderRadius:20}}/>
        <View>
            <Text style={{fontSize:20,fontWeight:'300'}}>KATH</Text>
            <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 6,}}>
        <SimpleLineIcons name="location-pin" size={15} color="green" />
        <Text style={{fontSize: 16,marginLeft: 5,color:"gray"}}>Bantama, Kumasi</Text>
      </View>
        </View>
        <HorizontalLine/>
      </View>
    </View>
  )
}