import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import SubHeading from './SubHeading';
import { useNavigation } from '@react-navigation/native';

const categoryList = [
  { id: '1', name: 'Dentistry', icon: 'tooth' },
  { id: '2', name: 'Cardiology', icon: 'heartbeat' },
  { id: '3', name: 'Orthopaedic', icon: 'bone' },
  { id: '4', name: 'Neurology', icon: 'brain' },
  { id: '5', name: 'Oncology', icon: 'deaf' }
];

const Categories = () => {
  const navigation = useNavigation();

  const navigateToHospitalDoctorsList = (categoryName) => {
    navigation.navigate('hospital-doctor-screen', { categoryName });
  };

  return (
    <View style={styles.container}>
      <SubHeading subHeadingTitle={'Services'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categoryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateToHospitalDoctorsList(item.name)}
            style={styles.categoryItem}
          >
            <View style={styles.categoryIcon}>
              <FontAwesome5 name={item.icon} size={30} color="green" />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderColor: 'gray',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  categoryName: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    color: 'green',
  },
});

export default Categories;
