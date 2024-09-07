import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DoctorCardItem from '../Shared/DoctorCardItem'; 

const AllDoctorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Doctors</Text>
      <ScrollView>
        <DoctorCardItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:0,
    textAlign: 'center',
    color: 'green',
    paddingTop:30,

  },
});

export default AllDoctorsScreen;
