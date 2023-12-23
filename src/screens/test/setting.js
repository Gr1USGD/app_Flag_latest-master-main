import { TouchableOpacity, Text, Image, View, Button, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'
// const onPress = () => setCount(prevCount => prevCount + 1);

const Setting = () => {
    return (
        <View style={style.body}>
            <View style={style.top}>
                <ImageBackground style={style.imagebackground}>
                    <View style={style.mode}>
                        <TouchableOpacity>
                            <Image style={style.imgback} source={require('../../../assets/backicon.png')} /></TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={style.imgsound} source={require('../../../assets/soundicon.png')} /></TouchableOpacity>
                            <Image style={style.imgcloud} source={require('../../../assets/imgcloud.png')} />
                        <TouchableOpacity>
                            <Image style={style.imgnotsound} source={require('../../../assets/notsoundicon.png')} /></TouchableOpacity>

                        <TouchableOpacity style={style.logoutbtn}>
                            <Text style={style.text}>LOG OUT </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        </View>

    )
}

export default Setting
const style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    top: {
        width: '100%',
        height: '100%',
    },

    imagebackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
    },

    imgback: {
        width: '17%',
        height: '34%',
        marginLeft:10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },

    imgcloud: {
        width: '45%',
        height: 120,
        opacity: 0.4,
        position: 'absolute',
        marginLeft: 180,
        marginTop:50,
    },

    imgsound: {
        width: '26%',
        height: '44%',
        marginLeft: '40%',
        bottom: 80,
    },

    imgnotsound: {
        width: '25%',
        height: '44%',
        marginLeft: '40%',
        bottom:150,
    },

    mode: {
        width: '92%',
        height: '60%',
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
    },

    logoutbtn: {
        width: '75%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        marginLeft: '13%',
        borderRadius: 10,
        bottom:200,
    },

    text: {
        fontSize: 30,
        color: '#6A39A9',
        fontWeight: "900",
        // fontFamily:'Roboto',
    },

    imgbottom: {
        width: '100%',
        height: '30%',
        marginLeft: '8%',
        marginTop: '5%',
    },

});
