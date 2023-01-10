import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import ContactRow from '../../components/ContactRow';
import Serprator from '../../components/Serprator';

const chats = [
  {
    users: ['Ates@outlook.com', 'a@gmail.com'],
    messages: [],
  },

  {
    users: ['Ates@outlook.com', 'b@gmail.com'],
    messages: [],
  },

  {
    users: ['Ates@outlook.com', 'c@gmail.com'],
    messages: [],
  },
];

const Chats = ({navigation}) => {
  //SİNG UP CHECK
  // useEffect(() => {
  //   const isLoggedIn = false;
  //   if (!isLoggedIn) {
  //     navigation.navigate('SignUp');
  //   }
  // }, []);

  return (
    <SafeAreaView>
      {chats.map((chat, index) => {
        <React.Fragment key={index}>
          <ContactRow
            name="Halil İbrahim"
            subtitle="Bugün Planın Nedir"
            onPress={() => {
              navigation.navigate('Chat');
            }}
          />
          <Serprator />
        </React.Fragment>;
      })}

      <ContactRow
        name="Halil İbrahim"
        subtitle="Bugün Planın Nedir"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
      <Serprator />

      <ContactRow
        name="DenemeUser"
        subtitle="Selam Deneme Gönderiyorum"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
      <Serprator />

      <ContactRow
        name="Cooper No2"
        subtitle="İstediklerini Almayı Unuttum"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
      <Serprator />

      <ContactRow
        name="Mo Baba"
        subtitle="Pcye Geçiyorum Bilgine"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
      <Serprator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Chats;
