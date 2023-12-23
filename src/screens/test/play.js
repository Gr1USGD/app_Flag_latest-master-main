import { TouchableOpacity, Text, Image, View,onPress, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'
import Mode from './mode';
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const imagesetting = { uri: 'https://thenounproject.com/api/private/icons/4463025/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' };
const imgbottom = {uri:'https://i.pinimg.com/564x/e2/89/be/e289be756cadd2d9fafebd2cff3173ed.jpg'};

const Play =() => {
    return (
        <View style={style.body}>
            <View style={style.top}>
                <View>
                    <ImageBackground source={image} style={style.imagebackground}>
                        <TouchableOpacity><Image source={imagesetting} style={style.imagesetting} /></TouchableOpacity>
                        <Image style={style.imageaccount} source={require('../../../assets/imgaccount.png')} />
                        <Text style={style.nametext}>Account</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={style.mode}>

                <TouchableOpacity style={style.playbtn}>
                    <Text style={style.text}>PLAY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.rankedbtn} onPress={onPress}>
                    <Text style={style.text}>RANKED</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.howtoplaybtn} onPress={onPress}>
                    <Text style={style.text}>HOW TO PLAY</Text>
                </TouchableOpacity>
                <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} />
            </View>

        </View>



    )
}

export default Play
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
        top:'2%',
        opacity:0.8,
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
        bottom:'10%',
    },

    imagesetting: {
        width: 40,
        height: 60,
        marginRight: '80%',
    },

    mode: {
        width: '90%',
        height: '50%',
        marginLeft: '5%',
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: '8%',
    },

    playbtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: '10%',
        marginLeft: '20%',
        borderRadius: 10,
    },

    rankedbtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: 30,
        marginLeft: '20%',
        borderRadius: 10,
    },

    howtoplaybtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: 30,
        marginLeft: '20%',
        borderRadius: 10,
    },

    text: {
        fontSize:25,
        color: 'white',
        fontWeight: "900",
        textAlign:'center',
    }
});
