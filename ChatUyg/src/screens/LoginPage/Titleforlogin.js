import react from 'react';

import {View, Text, StyleSheet} from 'react-native';

const TitleForLogin = () => {
  return (
    <View style={styles.titleArea}>
      <Text style={styles.textArea}>LoginPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleArea: {
    marginTop: 5,
    alignItems: 'center',
  },

  textArea: {
    fontSize: 35,
  },
});

export default TitleForLogin;
