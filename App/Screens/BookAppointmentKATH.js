import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

import ActionButtonKATH from '../Components/HospitalDetail/ActionButtonKATH';
import HorizontalLine from '../Components/Shared/HorizontalLine';
import BookingSectionKATH from '../Components/BookAppointment/BookingSection';
import AppointmentHospitalInfoKATH from '../Components/BookAppointment/AppointmentHospitalInfoKATH';

export default function BookAppointmentKATH() {
    const param = useRoute().params;
    return (
      <View style={{paddingLeft:20,paddingTop:40}}>
        <AppointmentHospitalInfoKATH/>
        <ActionButtonKATH/>
        <BookingSectionKATH/>
      </View>
    )
  }