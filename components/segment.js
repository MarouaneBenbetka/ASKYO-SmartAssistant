import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalSegment = ({ height }) => {
  return (
    <View style={[styles.segment, { height: height }]} />
  );
};

const styles = StyleSheet.create({
  segment: {
    width: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    marginHorizontal: 5
  },
});

export default VerticalSegment;