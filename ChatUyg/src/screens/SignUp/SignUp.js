import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Button from '../../components/Button';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contactContainer}>
          <Text style={styles.title}>Create New Account</Text>
          <TextInput style={styles.input} placeholder="Enter Your Name" />
          <TextInput style={styles.input} placeholder="Enter Your Email" />
          <TextInput style={styles.input} placeholder="Enter Your Password" />
          <View style={styles.buttonsContainer}>
            <Button title="SignIn" />
            <Button title="SignUp" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5BC0F8',
  },
  contactContainer: {
    padding: 32,
  },
  title: {
    fontSize: 45,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default SignUp;
