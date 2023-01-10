import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ContactRow = ({name, subtitle, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarlabel}>
          {name
            .split(' ')
            .reduce((prev, current) => `${prev}${current[0]}`, '')}
        </Text>
      </View>

      <View style={styles.textContainers}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, //sağdan ve soldan boşluk için
    paddingVertical: 20, //yukarıdan ve aşağıdan boşluk için
  },

  textContainers: {
    flex: 1,
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#91D8E4',
    borderRadius: 25,
    alignItems: 'center', //soldan sağa ortalama işlemi için
    justifyContent: 'center', //yukarıdan aşağı ortalama işlemi için
    marginRight: 15,
  },
  avatarlabel: {
    fontSize: 20,
    color: 'white',
  },
  name: {
    fontSize: 20,
  },

  subtitle: {
    marginTop: 5,
    color: '#565656',
  },
});
export default ContactRow;
