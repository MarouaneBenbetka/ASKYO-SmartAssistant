import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import send from '../assets/send.png';

const TextInputWithSendIcon = ({setText, text, handleSend}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter or edit "
        value={text}
        onChangeText={e => {
          setText(e);
        }}
      />
      <TouchableOpacity onPress={handleSend}>
        <Image source={send} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 18,
    marginVertical: 22,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    width: 26,
    height: 26,
    marginHorizontal: 5,
  },
});

export default TextInputWithSendIcon;
