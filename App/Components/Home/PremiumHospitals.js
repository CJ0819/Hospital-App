import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import SubHeading from './SubHeading';
import HospitalItem from './HospitalItem';
import { useNavigation } from '@react-navigation/native'; 

const hospitalList = [
  { id: 1, name: 'KNUST Hospital', location: 'N6, Kumasi', image: require('../../../assets/Knusthospital.jpeg'), screen: 'hospital-detail' },
  { id: 2, name: 'KATH', location: 'Bantama, Kumasi', image: require('../../../assets/Kath.png'), screen: 'hospital-detail-KATH' },
  
];

export default function PremiumHospitals() {
  const navigation = useNavigation(); 

  return (
    <View style={{ marginTop: 30, borderRadius: 10 }}>
      <SubHeading subHeadingTitle={'Hospitals'} />
      <FlatList
        horizontal={true}
        data={hospitalList}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8} 
            onPress={() => navigation.navigate(item.screen, { hospital: item })}
            style={{ marginRight: 10 }}
          >
            <HospitalItem hospital={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
