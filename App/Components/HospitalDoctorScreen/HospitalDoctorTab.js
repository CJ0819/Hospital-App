import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HospitalDoctorTab({activeTab}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeIndex === 0
                        ?styles.activeTab 
                        :styles.inactiveTab
                    ]}
                    onPress={() => {setActiveIndex(0);activeTab('Hospital')}}
                >
                    <Text style={[
                        activeIndex === 0 
                        ?styles.activeText 
                        :styles.inactiveText
                    ]}>
                        Hospital
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeIndex === 1 
                        ?styles.activeTab 
                        :styles.inactiveTab
                    ]}
                    onPress={() => {setActiveIndex(1);activeTab('Doctor')}}
                >
                    <Text style={[
                        activeIndex === 1 
                        ?styles.activeText 
                        :styles.inactiveText
                    ]}>
                        Doctors
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'green',
    },
    inactiveText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'green',
    },
    inactiveTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    }
});
