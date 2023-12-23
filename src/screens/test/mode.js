import { TouchableOpacity, Text, Image, View, Button, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const imagesetting = { uri: 'https://thenounproject.com/api/private/icons/4463025/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' };
// const onPress = () => setCount(prevCount => prevCount + 1);

const Mode = () => {
    return (
        <View style={style.body}>
            <View style={style.top}>
                <View>
                    <ImageBackground source={image} style={style.imagebackground}>
                        <TouchableOpacity><Image style={style.imgback} source={require('../../../assets/backicon.png')} /></TouchableOpacity>
                        <Image style={style.imageaccount} source={require('../../../assets/imgaccount.png')} />
                        <Text style={style.nametext}>Account</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={style.mode}>
                <TouchableOpacity style={style.easybtn}>
                    <Text style={style.text}>EASY </Text>
                    <Image style={style.easy} source={require('../../../assets/easyicon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={style.mediumbtn} >
                    <Text style={style.text}>MEDIUM</Text>
                    <Image style={style.medium} source={require('../../../assets/mediumicon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={style.hardbtn}>
                    <Text style={style.text}>HARD</Text>
                    <Image style={style.hard} source={require('../../../assets/hardicon.png')} />
                </TouchableOpacity>
                {/* <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} /> */}

            </View>

        </View>
    )
}

export default Mode
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

    imagebackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nametext: {
        fontSize: 50,
        bottom:40,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },

    imageaccount: {
        width: '40%',
        height: '45%',
        justifyContent: 'center',
        bottom:20,
    },

    imgback: {
        width: 40,
        height: 40,
        marginRight: '80%',
    },

    easy: {
        width: '25%',
        height: '100%',
        marginLeft: 15,
    },

    medium: {
        width: '25%',
        height: '100%',
        marginLeft:15,
    },

    hard: {
        width: '25%',
        height: '100%',
        marginLeft: 15,
    },

    mode: {
        width: '90%',
        height: '50%',
        marginLeft: '5%',
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: '8%',
    },

    easybtn: {
        flexDirection: 'row',
        width: '75%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        marginTop: '15%',
        marginLeft: '13%',
        borderRadius: 10,
    },

    mediumbtn: {
        flexDirection: 'row',
        width: '75%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        marginTop: '15%',
        marginLeft: '13%',
        borderRadius: 10,
    },

    hardbtn: {
        flexDirection: 'row',
        width: '75%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        marginTop: '15%',
        marginLeft: '13%',
        borderRadius: 10,
    },

    text: {
        fontSize: 30,
        color: '#6A39A9',
        fontWeight: "900",
        // fontFamily:'Roboto',
    }
});
