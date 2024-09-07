import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DoctorInformation = ({ route, navigation }) => {
  const { doctor } = route.params;

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const getDaysOfWeek = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = moment().add(i, 'days').format('dddd, MMMM D');
      days.push(day);
    }
    return days;
  };

  const getAvailableTimes = () => {
    const times = [
      '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'
    ];
    return times;
  };

  const handleDayPress = (day) => {
    setSelectedDay(day);
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };

  const handleSaveAppointment = async () => {
    if (!selectedDay || !selectedTime) {
      Alert.alert('Error', 'Please select both day and time.');
      return;
    }

    const newAppointment = {
      date: moment(selectedDay, 'dddd, MMMM D').format('YYYY-MM-DD'),
      time: selectedTime,
      name: doctor.name,
      job: doctor.job,
    };

    try {
      const storedAppointments = JSON.parse(await AsyncStorage.getItem('appointments')) || [];
      const updatedAppointments = [...storedAppointments, newAppointment];
      await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      navigation.navigate('Appointment');
    } catch (error) {
      console.error('Error saving appointment:', error);
      Alert.alert('Error', 'Failed to save appointment. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Image source={doctor.imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.job}>{doctor.job}</Text>
        <Text style={styles.room}>Room: {doctor.roomNumber}</Text>
        <Text style={styles.experience}>Experience: {doctor.experience}</Text>
        <Text style={styles.medicalSchool}>Medical School: {doctor.medicalSchool}</Text>
        <Text style={styles.rating}>Rating: {doctor.rating}</Text>
        <Text style={styles.details}>{doctor.details}</Text>
        
        <View style={styles.availabilityContainer}>
          <Text style={styles.availabilityHeader}>Available Days:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            {getDaysOfWeek().map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.availabilityButton,
                  selectedDay === day && styles.selectedButton
                ]}
                onPress={() => handleDayPress(day)}
              >
                <Text style={styles.buttonText}>{day}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.availabilityHeader}>Available Times:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            {getAvailableTimes().map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.availabilityButton,
                  selectedTime === time && styles.selectedButton
                ]}
                onPress={() => handleTimePress(time)}
              >
                <Text style={styles.buttonText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveAppointment}>
            <Text style={styles.saveButtonText}>Save Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0fff0',
    padding: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#4caf50',
    borderRadius: 50,
    padding: 10,
    elevation: 4,
    zIndex: 10,
  },
  image: {
    width: '130%',
    height: 250,
    borderRadius: 10,
    marginBottom: 30,
    position: 'absolute',
    top: 0,
    left: -10,
    zIndex: 1,
  },
  infoContainer: {
    marginTop: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 40,
    left: '30%',
  },
  job: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 10,
    left: '40%',
  },
  room: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  experience: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  medicalSchool: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  availabilityContainer: {
    marginTop: 20,
  },
  availabilityHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  availabilityButton: {
    backgroundColor: '#d3d3d3', 
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#4caf50', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DoctorInformation;
