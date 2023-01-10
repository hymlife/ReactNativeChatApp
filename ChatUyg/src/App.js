import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Chats from './screens/ChatsPage/Chats';
import Settings from './screens/SettingsPage/Settings';
import SignUp from './screens/SignUp/SignUp';
import Chat from './screens/ChatPage/Chat';

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'red',
    }}>
    <Tabs.Screen name="Chats" headerMode="none" component={ChatsScreen} />
    <Tabs.Screen name="Settings" headerMode="none" component={SettingsScreen} />
  </Tabs.Navigator>
);

const ChatsStack = createStackNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator headerMode="none">
      <ChatsStack.Screen name="Chats" component={Chats} />
      <ChatsStack.Screen name="Chat" component={Chat} />
    </ChatsStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode="modal">
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen name="SignUp" component={SignUp} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
