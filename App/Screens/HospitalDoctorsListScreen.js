import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorScreen/HospitalListBig';
import DoctorCardItem from '../Components/Shared/DoctorCardItem';

const HospitalDoctorsListScreen = () => {
  const route = useRoute();
  const { categoryName } = route.params || {};

  const [loading, setLoading] = useState(true);
  const [hospitalList, setHospitalList] = useState([]);
  const [activeTab, setActiveTab] = useState('Hospital');

  useEffect(() => {
    // Simulating data fetch with a timeout
    setTimeout(() => {
      const hospitals = [
        { id: 3, name: 'KNUST Hospital', location: 'N6, Kumasi', image: require('../../assets/Knusthospital.jpeg') },
        { id: 4, name: 'KATH', location: 'Bantama, Kumasi', image: require('../../assets/Kath.png') },
      ];
      setHospitalList(hospitals);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title={categoryName || 'Default Title'} />
      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} size="large" color="green" />
      ) : activeTab === 'Hospital' ? (
        <HospitalListBig hospitals={hospitalList} />
      ) : (
        <DoctorCardItem categoryName={categoryName} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HospitalDoctorsListScreen
