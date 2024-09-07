import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; // Import the icon component

const HospitalCardItem = ({ hospitals }) => {

  const renderHospitalItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={15} color="black" />
        <Text style={styles.location}>{item.location}</Text>
      </View>
      
      {item.info && <Text style={styles.info}>{item.info}</Text>}
    </View>
  );

  return (
    <FlatList
      data={hospitals}
      renderItem={renderHospitalItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginTop: 30, paddingHorizontal: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding:20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    left:-6
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  location: {
    fontSize: 16,
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  info: {
    fontSize: 13,
    color: '#666',
  },
});

export default HospitalCardItem;
