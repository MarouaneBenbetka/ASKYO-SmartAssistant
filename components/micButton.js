import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function MicButton({onPress, imageSource, isPressed}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.circleButton,
        isPressed ? styles.pressed : styles.notPressed,
      ]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
    borderRadius: 35,
    backgroundColor: '#FF0042',
    backgroundOpacity: '80',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pressed: {
    backgroundColor: '#ffadc3',
  },
  notPressed: {
    backgroundColor: '#FF0042',
  },
  image: {
    width: 35,
    height: 36,
  },
});
