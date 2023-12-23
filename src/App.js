import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Login from './screens/login/Login';
import AppNavigator from './navigator/AppStackNavigator';
import { SoundProvider } from './screens/soundContext/SoundContext';
import SoundPlayer from './screens/soundContext/SoundPlayer';
import 'react-native-gesture-handler';
import Play from './screens/test/play';
import Home from './screens/home/Home';
export default function App() {
  const [userInfor, setUserInfor] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const onAuthStateChanged = async (user) => {
    await setUserInfor(user);
    console.log(user);
    setIsLoading(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <SoundProvider>
      <NavigationContainer>
        {userInfor ? <AppNavigator /> : <Login />}
      </NavigationContainer>
    </SoundProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})