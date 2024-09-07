import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert, Share } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';

export default function ActionButton() {
  const [activeButton, setActiveButton] = useState(null);
  const navigation = useNavigation();

  const handlePress = (index, action) => {
    setActiveButton(index);
    action();
  };

  const openWebsite = () => {
    Linking.openURL('https://webapps.knust.edu.gh/uhs/appointments/').catch((err) =>
      Alert.alert('Error', 'Failed to open website.')
    );
  };

  const goToChat = () => {
    navigation.navigate('Chat');
  };

  const makeCall = () => {
    const url = `tel:+233322060320`;
    Linking.openURL(url).catch((err) =>
      Alert.alert('Error', 'Failed to make a call.')
    );
  };

  const getDirections = () => {
    const url = 'https://www.google.com/maps/dir/?api=1&destination=KNUST+Hospital';
    Linking.openURL(url).catch((err) =>
      Alert.alert('Error', 'Failed to open maps.')
    );
  };

  const shareContent = async () => {
    try {
      await Share.share({
        message: 'Check out KNUST Hospital at https://webapps.knust.edu.gh/uhs/appointments/',
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share content.');
    }
  };

  const buttons = [
    { name: 'public', label: 'Website', action: openWebsite },
    { name: 'chat', label: 'Chat', action: goToChat },
    { name: 'call', label: 'Call', action: makeCall },
    { name: 'directions', label: 'Direction', action: getDirections },
    { name: 'share', label: 'Share', action: shareContent },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handlePress(index, button.action)}
        >
          <Icon
            name={button.name}
            size={30}
            color={activeButton === index ? 'green' : 'gray'}
          />
          <Text style={[styles.label, { color: activeButton === index ? 'green' : 'gray' }]}>
            {button.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    top:10
  },
  button: {
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
  },
});
