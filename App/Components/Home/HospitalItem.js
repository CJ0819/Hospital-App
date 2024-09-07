import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function HospitalItem({ hospital, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.borderedContainer}>
        <Image source={hospital.image} style={styles.image} />
        <Text style={styles.name}>{hospital.name}</Text>
        <Text style={styles.location}>{hospital.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    padding:5,
    elevation: 5, 
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3,
    
                
  },
  borderedContainer: {
    borderColor: 'gray',
    borderRadius: 30,
    padding: 1, // Add some padding for better spacing
    alignItems: 'center',
    backgroundColor:'white'
  },
  image: {
    width: 250, // Adjust this value to increase the width
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    marginTop: 3,
    fontSize: 14,
    color: 'gray',
  },
});
