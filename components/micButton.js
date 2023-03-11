import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const micButton = ({onPress, imageSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circleButton}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54.12,
    height: 54.12,
    borderRadius: 35,
    backgroundColor: '#FF0042',
    backgroundOpacity: '80',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 35.3,
    height: 35.89,
  },
});

export default micButton;
