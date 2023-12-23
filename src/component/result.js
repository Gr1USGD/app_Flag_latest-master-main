import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BackHandler } from 'react-native';
import { useSound } from '../screens/soundContext/SoundContext';
import SoundPlayer from 'react-native-sound-player';
import auth from '@react-native-firebase/auth';

width = Dimensions.get('screen').width
height = Dimensions.get('screen').height
const Result = ({ navigation, route }) => {
    const [playMode, setPlayMode] = useState(route.params?.playMode);
    const [currentUser, setCurrentUser] = useState(null);
    const score = route.params?.score || 0;
    const { isSoundOn } = useSound();
    const onAuthStateChanged = async user => {
        await setCurrentUser(user);
    };
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    useEffect(() => {
        if (isSoundOn) {
            const unsubcribe = navigation.addListener('focus', () => {
                SoundPlayer.pause();
                SoundPlayer.playSoundFile('finish', 'mp3')
            })
            return unsubcribe;
        }

    },);
    useEffect(() => {
        return () => {
            SoundPlayer.stop(); // Dừng phát âm thanh khi component unmount
        };
    }, []);
    const handleGoHome = () => {
        navigation.navigate('Home');
        // navigation.dispatch(
        //     CommonActions.reset({
        //         index: 0,
        //         routes: [{ name: 'Home' }],
        //     })
        // );
    };
    useEffect(() => {
        const backAction = () => {
            navigation.navigate('QuestionMode', { currentUser: currentUser }); // Điều hướng về màn hình QuestionMode
            return true; // Chặn việc thoát khỏi ứng dụng khi bấm back
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove(); // Cleanup khi component unmount

    }, []);
    useEffect(() => {
        console.log('Before navigating:', playMode);
        console.log('After navigating:', route.params?.mode);
    }, [route.params?.mode]);
    const handlePlayAgain = () => {
        const resetState = true;
        console.log('Before navigating:', route.params?.mode);
        if (playMode === true) {
            const currentMode = route.params?.mode === 'HardMode' ? 'HardMode' :
                route.params?.mode === 'EasyMode' ? 'EasyMode' : 'MediumMode';
            console.log('After navigating:', route.params?.mode);
            navigation.navigate(currentMode, { resetState });
        } else {
            const currentMode = route.params?.mode === 'HardModeFlag' ? 'HardModeFlag' :
                route.params?.mode === 'EasyModeFlag' ? 'EasyModeFlag' : 'MediumModeFlag';
            console.log('After navigating:', route.params?.mode);
            navigation.navigate(currentMode, { resetState });
        }

    }
    return (

        <View style={styles.container}>
            <View style={styles.img}>
                <ImageBackground style={styles.image} source={require('../../assets/Play.png')} resizeMode="cover" >

                    <View style={styles.champ}>
                        <Image style={styles.cup} source={require('../../assets/cup.png')} />
                    </View>

                    <View style={styles.champ}>
                        <Image style={styles.mvp} source={require('../../assets/mvp.png')} />
                    </View>

                    <View style={styles.score}>
                        <Text style={styles.uscore}>ĐIỂM CỦA BẠN: {score}</Text>
                    </View>


                    <View style={styles.home}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.uscore1} onPress={handleGoHome}> TRANG CHỦ </Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.home}>


                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Ranker')}>
                            <Text style={styles.uscore1}> XẾP HẠNG</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.home}>


                        <TouchableOpacity style={styles.btn} onPress={handlePlayAgain}>
                            <Text style={styles.uscore1} > CHƠI LẠI </Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    btn: {

    },
    // center:{
    // alignItems:'center',
    // },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    champ: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cup: {
        width: '45%',
        height: '45%',
        bottom: 30,
    },
    mvp: {
        width: 126,
        height: 65,
        bottom: 104,
    },
    score: {
        bottom: 130,
        alignItems: 'center',
    },
    uscore: {
        textAlign: 'center',
        fontSize: width * 0.08,
        fontWeight: '600',
        color: '#FAFAFA',
        backgroundColor: '#6A39A9',
        width: '80%',
        paddingVertical: 20,
        borderRadius: 10,
    },

    home: {
        flex: 1,
        width: '50%',
        left: '25%',
        bottom: '10%',
    },

    uscore1: {
        lineHeight: 50,
        textAlign: 'center',
        fontSize: width * 0.06,
        color: '#FAFAFA',
        fontWeight: '600',
        backgroundColor: '#6A39A9',
        paddingVertical: 10,
        borderRadius: 10,
    }
})