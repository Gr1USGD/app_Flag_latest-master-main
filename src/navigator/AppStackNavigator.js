import { View, Text } from 'react-native';
import React from 'react';
import Home from '../screens/home/Home';
import QuestionMode from '../screens/questionMode/QuestionMode';
import PlayModeTextGuess from '../screens/playModes/PlayModeTextGuess';
import Ranker from '../screens/rank/Ranker';
import HardMode from '../screens/wordAnswer/HardMode';
import Result from '../component/result';
import EasyMode from '../screens/wordAnswer/EasyMode';
import MediumMode from '../screens/wordAnswer/MediumMode';
import PlayModePicGuess from '../screens/playModes/PlayModePicGuess';
import HardModeFlag from '../screens/flagAnswer/HardModeFlag';
import MediumModeFlag from '../screens/flagAnswer/MediumModeFlag';
import EasyModeFlag from '../screens/flagAnswer/EasyModeFlag';
import Setting from '../screens/setting/Setting';
import { createStackNavigator } from '@react-navigation/stack';
import { SoundProvider } from '../screens/soundContext/SoundContext';
const Stack = createStackNavigator();
const AppStackNavigator = () => {
    return (
        <SoundProvider>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PlayModeTextGuess" component={PlayModeTextGuess} />
                <Stack.Screen name="PlayModePicGuess" component={PlayModePicGuess} />
                <Stack.Screen name="QuestionMode" component={QuestionMode} />
                <Stack.Screen name="Ranker" component={Ranker} />
                <Stack.Screen name="Result" component={Result} />
                <Stack.Screen name="Setting" component={Setting} />

                <Stack.Screen name="EasyMode" component={EasyMode} />
                <Stack.Screen name="HardMode" component={HardMode} />
                <Stack.Screen name="MediumMode" component={MediumMode} />

                <Stack.Screen name="EasyModeFlag" component={EasyModeFlag} />
                <Stack.Screen name="MediumModeFlag" component={MediumModeFlag} />
                <Stack.Screen name="HardModeFlag" component={HardModeFlag} />

            </Stack.Navigator>
        </SoundProvider>
    )
}

export default AppStackNavigator