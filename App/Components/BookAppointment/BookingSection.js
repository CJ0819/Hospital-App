import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
import { useNavigation } from '@react-navigation/native';

export default function BookingSection() {
    const [note, setNote] = useState('');
    const paystackWebViewRef = useRef(null); // Ensure ref is initialized correctly
    const navigation = useNavigation();

    const handlePaymentSuccess = (res) => {
        console.log('Payment success:', res);
        navigation.navigate('AllDoctors');
    };

    const handlePaymentCancel = (e) => {
        console.log('Payment canceled:', e);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Book Appointment</Text>
            <Text style={styles.noteTitle}>Note</Text>
            <TextInput
                numberOfLines={3}
                style={styles.textInput}
                value={note}
                onChangeText={setNote}
            />
            <Paystack
                paystackKey=""
                billingEmail=""
                billingMobile="1234567"
                billingName='KNUST Hospital'
                currency='GHS'
                amount={200}
                onCancel={handlePaymentCancel}
                onSuccess={handlePaymentSuccess}
                ref={paystackWebViewRef}
            />
            <TouchableOpacity 
                onPress={() => paystackWebViewRef.current.startTransaction()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>
            <Text style={styles.note}>NB: Payment validates booking</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
    },
    headerText: {
        fontSize: 18,
        color: "gray",
    },
    noteTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        textAlignVertical: 'top',
    },
    button: {
        borderRadius: 40,
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: "green",
        marginTop: 60,
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
    },
    note: {
        marginTop: 10,
        color: "gray",
        textAlign: 'center',
    },
});
