import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigation = useNavigation();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const handleMenuPress = () => {
    // Navigate to the Profile screen
    navigation.navigate('Profile');
  };

  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', paddingLeft: 10 }}>
            {user.fullName}
          </Text>
        </View>
        <TouchableOpacity onPress={handleMenuPress} style={{ paddingLeft: 170 }}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
