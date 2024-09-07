import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';


export default function HospitalDetails() {
    const [hospital,setHospital]=useState();
    const param=useRoute().params;
    useEffect(()=>{
        setHospital(param.hospital)
    },[])
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={{position:'absolute',zIndex:10,top:35,padding:5}}>
        <PageHeader title={''}/>
        </View>
        <View>
            <Image source={require('../../assets/Knusthospital.jpeg')}
            style={{width:'100%',height:280}}/>
            <View style={{marginTop:-20,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,padding:20}}>
            <HospitalInfo hospital={hospital}/>
            </View>
        </View>
    </View>
  )
}