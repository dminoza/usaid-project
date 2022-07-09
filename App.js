import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components here
import DashBoardScreen from './screen/Dashboard';
import LoginScreen from './screen/Authentication/Login';
import PostingScreen from './screen/Posting';
import ApplicationNotificationScreen from './screen/ApplicationNotification';
import ApplicationScreen from './screen/Application';
import SettingsScreen from './screen/Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="Postings" component={PostingScreen} />
        <Stack.Screen name="Pending Application" component={ApplicationNotificationScreen} />
        <Stack.Screen name="Application" component={ApplicationScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;