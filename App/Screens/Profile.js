import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { useAuth } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Home/Header';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons

export default function Profile() {
  const { isSignedIn, signOut } = useAuth();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    await signOut();
    navigation.navigate('Login');
  };

  const navigateToSettings = () => {
    // Handle navigation to settings screen if needed
    // navigation.navigate('Settings');
  };

  return (
    <View>
      <View style={{ marginTop: 45, marginLeft: 15 }}>
        <Header />
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, paddingTop: 20 }}></View>

        {/* Name */}
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop: 10 }}>
            <Ionicons name="person-outline" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 20 }}>Name</Text>
          </View>
        </TouchableOpacity>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10,paddingTop: 10 }}></View>

        {/* Notifications */}
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop: 10 }}>
            <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 20 }}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10,paddingTop: 10}}></View>

        {/* Privacy */}
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Ionicons name="lock-closed-outline" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 20 }}>Privacy</Text>
          </View>
        </TouchableOpacity>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, paddingTop: 10}}></View>

        {/* Help */}
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop: 10 }}>
            <Ionicons name="help-circle-outline" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 20 }}>Help</Text>
          </View>
        </TouchableOpacity>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10,paddingTop: 10 }}></View>

        {/* Settings */}
        <TouchableOpacity onPress={navigateToSettings}>
          <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop: 10 }}>
            <Ionicons name="settings-outline" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 20 }}>Settings</Text>
          </View>
        </TouchableOpacity>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10,paddingTop: 10 }}></View>

        {/* Sign Out Button */}
        <View style={{ left: -150, top: 20 }}>
          <Button title='Sign Out' onPress={handleSignOut} />
        </View>
      </View>
    </View>
  );
}
