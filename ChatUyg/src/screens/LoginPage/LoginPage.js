import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import HeaderForLogin from '../../components/HeaderForLogin';
import TitleForLogin from './Titleforlogin';

const LoginPage = () => {
  const [text, onChangeText] = React.useState('');
  const [passwordText, onChangePasswordText] = React.useState('');
  const onPress = () => {
    onChangeText(value => value + '...');
    onChangePasswordText(value => value + '...');
  };

  return (
    <SafeAreaView
      style={{
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#BFEAF5',
        flex: 1,
      }}>
      <TitleForLogin />

      <View style={{marginTop: 55}}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <View style={{marginTop: 30}}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordText}
          value={passwordText}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Sona 3 Nokta Ekle</Text>
      </TouchableOpacity>

      <HeaderForLogin title={text} title2={passwordText} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#82AAE3',
    padding: 10,
    marginTop: 55,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 10,
  },
});

export default LoginPage;
