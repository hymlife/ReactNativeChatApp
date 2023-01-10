import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContactRow from '../../components/ContactRow';

import Cell from '../../components/Cell';
const Settings = () => {
  return (
    <View style={styles.Area}>
      <ContactRow
        name="Ateş"
        subtitle="Ates@outlook.com"
        style={styles.contactRow}
      />
      <View style={styles.settingsRow}>
        <Cell
          title="Logout"
          onPress={() => {
            alert('Dont Touch Me Again');
          }}
        />

        <Cell
          title="Invite Friends"
          onPress={() => {
            alert('Invited Friends');
          }}
        />

        <Cell
          title=" Themes"
          onPress={() => {
            alert('Dark And Light');
          }}
        />

        <Cell
          title="Security"
          onPress={() => {
            alert('Security page ');
          }}
        />

        <Cell
          title="privacy policy"
          onPress={() => {
            alert('Privacy policy page');
          }}
        />

        <Cell
          title="Invite Friends"
          onPress={() => {
            alert('Invited Friends');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Area: {
    flex: 4,
  },
  contactRow: {
    backgroundColor: '#A0C3D2',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  settingsRow: {
    justifyContent: 'flex-end',
    flex: 5,
    marginBottom: 5,
  },
});

export default Settings;
