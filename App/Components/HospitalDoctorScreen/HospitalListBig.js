import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const hospitals = [
  { id: 3, name: 'KNUST Hospital', location: 'N6, Kumasi', image: require('../../../assets/Knusthospital.jpeg') },
  { id: 4, name: 'KATH', location: 'Bantama, Kumasi', image: require('../../../assets/Kath.png') },
  // Add more hospitals here with their respective images
];

const HospitalCardItem = ({ hospital, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
    <Image source={hospital.image} style={styles.image} />
    <Text style={styles.name}>{hospital.name}</Text>
    <Text style={styles.location}>{hospital.location}</Text>
  </TouchableOpacity>
);

const HospitalListBig = () => {
  const navigation = useNavigation();

  const handleKNUSTPress = () => {
    const knustHospital = hospitals.find(hospital => hospital.id === 3);
    navigation.navigate('hospital-detail', { hospital: knustHospital });
  };

  const handleKATHPress = () => {
    const kathHospital = hospitals.find(hospital => hospital.id === 4);
    navigation.navigate('hospital-detail-KATH', { hospital: kathHospital });
  };

  return (
    <View>
      <FlatList
        data={hospitals}
        renderItem={({ item }) => (
          <HospitalCardItem
            hospital={item}
            onPress={item.id === 3 ? handleKNUSTPress : handleKATHPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    height:250
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default HospitalListBig;
