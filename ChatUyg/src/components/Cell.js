import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Cell = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#39B5E0',
    marginTop: 1,
  },

  title: {
    fontSize: 18,
  },
});

export default Cell;
