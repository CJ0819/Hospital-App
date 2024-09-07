import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const API_URL = 'http://localhost:3000/api/appointments'; // Replace with your actual backend API URL

export default function Appointments({ navigation }) {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = useCallback(async () => {
        try {
            const storedAppointments = JSON.parse(await AsyncStorage.getItem('appointments')) || [];
            console.log('Fetched appointments:', storedAppointments); // Debug log
            setAppointments(storedAppointments);
        } catch (error) {
            console.log('Error fetching appointments:', error); // Error log
        }
    }, []);

    useEffect(() => {
        const saveAppointmentsToMongoDB = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(appointments),
                });

                if (!response.ok) {
                    throw new Error('Failed to save appointments');
                }
            } catch (error) {
                console.error('Error saving appointments:', error);
                Alert.alert('Error', 'Failed to save appointments. Please try again.');
            }
        };

        saveAppointmentsToMongoDB();
    }, [appointments]);

    useFocusEffect(
        useCallback(() => {
            fetchAppointments();
        }, [fetchAppointments])
    );

    const clearAppointments = async () => {
        try {
            await AsyncStorage.removeItem('appointments');
            setAppointments([]);
            console.log('Appointments cleared successfully');
        } catch (error) {
            console.log('Error clearing appointments:', error);
        }
    };

    const deleteAppointment = async (index) => {
        try {
            const updatedAppointments = [...appointments];
            updatedAppointments.splice(index, 1);
            await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
            setAppointments(updatedAppointments);
            console.log('Appointment deleted successfully');
        } catch (error) {
            console.error('Error deleting appointment:', error);
            Alert.alert('Error', 'Failed to delete appointment. Please try again.');
        }
    };

    const confirmDeleteAppointment = (index) => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this appointment?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => deleteAppointment(index),
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={{ marginTop: 35, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ fontSize: 28 }}>Appointments</Text>
            </View>
            <FlatList
                data={appointments}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => confirmDeleteAppointment(index)}>
                        <View style={{ marginVertical: 10, width: 370, borderRadius: 10, backgroundColor: 'green' }}>
                            <Text style={{ fontSize: 18, color: 'white', marginLeft: 10 }}>
                                {moment(item.date).format('Do MMM YYYY')}
                            </Text>
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>{item.time}</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>{item.name}</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>{item.job}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
