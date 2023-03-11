import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, currentUser }) => {
  return (
    <View style={[styles.bubble, currentUser ? styles.currentUser : styles.bot]}>
      <Text style={[styles.text, currentUser ? styles.textCurrentUser : styles.textBot]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  currentUser: {
    backgroundColor: '#949494',
    alignSelf: 'flex-end',
  },
  bot: {
    backgroundColor: '#dcdcdc',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  textCurrentUser: {
    color: '#FFFFFF',
  },
  textBot: {
    color: '#FFFFFF',
  },
});

export default ChatBubble;