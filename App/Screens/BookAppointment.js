import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentHospitalInfo from '../Components/BookAppointment/AppointmentHospitalInfo';
import ActionButton from '../Components/HospitalDetail/ActionButton';
import HorizontalLine from '../Components/Shared/HorizontalLine';
import BookingSection from '../Components/BookAppointment/BookingSection';

export default function BookAppointment() {
    const param = useRoute().params;
  return (
    <View style={{paddingLeft:20,paddingTop:40}}>
      <AppointmentHospitalInfo/>
      <ActionButton/>
      <BookingSection/>
    </View>
  )
}