import { TouchableOpacity, Text, Image, View, onPress, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Sound from 'react-native-sound';
import { useSound } from '../soundContext/SoundContext';
import { useState, useEffect } from 'react';
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const QuestionMode = ({ navigation, route }) => {
    const [currentUser, setCurrentUser] = useState(route.params.currentUser);
    //Sound
    // Enable playback in silence mode

    return (
        <View style={style.body}>
            <View style={style.top}>
                <View>
                    <ImageBackground source={image} style={style.imagebackground}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image source={require('../../../assets/back.png')} style={style.back} /></TouchableOpacity>
                        <Image style={style.imageaccount} source={{ uri: currentUser.photoURL }} />
                        <Text style={style.nametext}>{currentUser.displayName}</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={style.type}>
                <TouchableOpacity style={style.playFlag} onPress={() => navigation.navigate('PlayModePicGuess', { currentUser: currentUser })}>
                    <Text style={style.text}>Nhìn Quốc Kỳ Đoán Quốc Gia</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.playName} onPress={() => navigation.navigate('PlayModeTextGuess', { currentUser: currentUser })}>
                    <Text style={style.text}>Nhìn Quốc Gia Đoán Quốc Kỳ</Text>
                </TouchableOpacity>

                <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} />
            </View>

        </View>



    )
}

export default QuestionMode
const style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    top: {
        width: '100%',
        height: '50%',
    },

    imgbottom: {
        width: '100%',
        height: '60%',
        marginLeft: '25%',
        bottom: 11,
        // marginTop: '12%',
        opacity: 0.8,
    },

    imagebackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nametext: {
        bottom: '20%',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    imageaccount: {
        width: 120,
        height: 120,
        borderRadius: 80,
        marginBottom: '25%',
    },

    back: {
        bottom: '30%',
        right: '35%',
        width: 33,
        height: 33,
        position: 'absolute',
    },

    type: {
        width: '85%',
        height: '50%',
        marginLeft: 27,
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: 50,
    },

    playFlag: {
        width: '70%',
        height: '25%',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        padding: 10,
        marginTop: 30,
        marginLeft: '16%',
        borderRadius: 10,
    },

    playName: {
        width: '70%',
        height: '25%',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        padding: 10,
        marginTop: 30,
        marginLeft: '16%',
        borderRadius: 10,
    },

    text: {
        fontSize: 25,
        // color: 'white',
        fontWeight: "900",
        textAlign: 'center',
        color: '#6A39A9',

    }
});
