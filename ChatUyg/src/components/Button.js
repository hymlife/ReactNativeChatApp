import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: 'white',
  },
});

export default Button;
