import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Type from './src/screens/home/type';
import Mode from './src/screens/home/mode';
import Login from './src/screens/login/Login';
import Setting from './src/screens/home/setting';
import Ranker from './src/screens/rank/ranker';
import SoundDemo from './src/screens/sounds/SoundDemo';
import Home from './src/screens/home/home';
import Play from './src/screens/home/play';
import Howtoplay from './src/screens/howtoplay/how_to_play';
// import PlayModeOne from './src/screens/testPlay/playModeOne';
import Total from './src/screens/home/total';
import Gameplay from './src/screens/home/gameplay';
import Gameplaywithflag from './src/screens/home/gameplaywithflag';
import Gamehard from './src/screens/home/gamehard';
import Gamehardwithflag from './src/screens/home/gamehard';

const Stack = createNativeStackNavigator();
// import Home from './src/screens/home/home';



export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Play/> */}
      {/* <Setting/> */}
      {/* <Type/> */}
      {/* <Mode/> */}
      {/* <Gameplay/> */}
      {/* <Gameplaywithflag/> */}
      {/* <Gamehard/> */}
      {/* <Gamehardwithflag/> */}
      {/* <Ranker/> */}
      <Howtoplay/>
      {/* <Total/> */}
      {/* <Home/> */}
      {/* <PlayModeOne/> */}
      {/* <SoundDemo/> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="TestFrontend" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Play" component={Play} />
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Type" component={Type} />
        <Stack.Screen name="Mode" component={Mode} />
        <Stack.Screen name="GamePlayWithFlag" component={Gameplaywithflag} />
        <Stack.Screen name="Total" component={Total} /> */}
      </Stack.Navigator>
      </NavigationContainer> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "FaFbFa",
    alignItems: "center",
    justifyContent: "center",
  },
});
