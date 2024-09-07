import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChatScreenKATH() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Load messages from AsyncStorage if available
    const loadMessages = async () => {
      try {
        const savedMessages = await AsyncStorage.getItem('chatMessages');
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    };

    loadMessages();
  }, []);

  const saveMessages = useCallback(async (messagesToSave) => {
    try {
      await AsyncStorage.setItem('chatMessages', JSON.stringify(messagesToSave));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  }, []);

  const deleteMessage = useCallback(async (_id) => {
    try {
      const updatedMessages = messages.filter(message => message._id !== _id);
      setMessages(updatedMessages);
      await saveMessages(updatedMessages);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  }, [messages, saveMessages]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    saveMessages(messages.concat(newMessages)); // Save messages to AsyncStorage
  }, [messages, saveMessages]);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Ionicons name="send" size={24} color="green" />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'green',
          },
        }}
        onLongPress={() => {
          Alert.alert(
            'Delete Message',
            'Are you sure you want to delete this message?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Delete',
                onPress: () => deleteMessage(props.currentMessage._id),
                style: 'destructive',
              },
            ],
            { cancelable: true }
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="green" />
        </TouchableOpacity>
        <Image source={require('../../assets/Kath.png')} style={styles.logo} />
        <Text style={styles.headerText}>KATH</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend}
        renderBubble={renderBubble}
        alwaysShowSend
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 99,
    marginLeft:-210
  },
  headerText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 20,
    left:-160
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
});
